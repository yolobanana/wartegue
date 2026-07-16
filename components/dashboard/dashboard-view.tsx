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
import { CalendarOff } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
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
            {filtered.length} transaksi · periode {periodLabels[period].toLowerCase()}
          </p>
        </div>
        <PeriodFilter value={period} onChange={setPeriod} />
      </div>

      <WeeklySummary summary={summary} periodLabel={periodLabels[period]} />

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-2 py-10 text-center">
            <CalendarOff className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium">Belum ada transaksi</p>
            <p className="text-sm text-muted-foreground">
              Tidak ada data untuk periode {periodLabels[period].toLowerCase()}.
              Coba ganti filter waktu.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <BranchRecapList recaps={recaps} />
          <RecentTransactions transactions={recent} />
        </>
      )}
    </div>
  );
}
