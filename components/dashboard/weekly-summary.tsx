import { ArrowDownCircle, ArrowUpCircle, Scale } from "lucide-react";

import type { CashSummary } from "@/lib/types";
import { StatCard } from "./stat-card";

// Ringkasan — total pemasukan, pengeluaran, dan selisih kas pada periode terpilih
// dalam satu baris kartu statistik.
export function WeeklySummary({
  summary,
  periodLabel = "Minggu Ini",
}: {
  summary: CashSummary;
  periodLabel?: string;
}) {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline justify-between">
        <h3 className="text-sm font-semibold text-muted-foreground">
          Ringkasan {periodLabel}
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <StatCard
          label="Total Pemasukan"
          amount={summary.income}
          icon={ArrowUpCircle}
          tone="income"
        />
        <StatCard
          label="Total Pengeluaran"
          amount={summary.expense}
          icon={ArrowDownCircle}
          tone="expense"
        />
        <StatCard
          label="Selisih Kas"
          amount={summary.balance}
          icon={Scale}
          tone="balance"
        />
      </div>
    </section>
  );
}
