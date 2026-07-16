"use client";

import { useMemo, useState } from "react";

import type { Transaction } from "@/lib/types";
import {
  branchRecaps,
  filterByPeriod,
  periodLabels,
  recentTransactions,
  summarize,
  type Period,
} from "@/lib/mock-data";
import { WeeklySummary } from "./weekly-summary";
import { BranchRecapList } from "./branch-recap";
import { RecentTransactions } from "./recent-transactions";
import { PeriodFilter } from "./period-filter";

// Konten dashboard yang interaktif: filter waktu mengubah ringkasan, rekap cabang,
// dan riwayat terkini secara langsung. Data tiruan diterima dari server component.
export function DashboardView({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [period, setPeriod] = useState<Period>("weekly");

  const filtered = useMemo(
    () => filterByPeriod(transactions, period),
    [transactions, period]
  );
  const summary = useMemo(() => summarize(filtered), [filtered]);
  const recaps = useMemo(() => branchRecaps(filtered), [filtered]);
  const recent = useMemo(() => recentTransactions(filtered), [filtered]);

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Ringkasan Kas</h2>
          <p className="text-sm text-muted-foreground">
            Pantau arus kas seluruh cabang warteg dalam satu layar.
          </p>
        </div>
        <PeriodFilter value={period} onChange={setPeriod} />
      </div>

      <WeeklySummary summary={summary} periodLabel={periodLabels[period]} />

      <BranchRecapList recaps={recaps} />

      <RecentTransactions transactions={recent} />
    </div>
  );
}
