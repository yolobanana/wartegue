"use client";

import type { Period } from "@/lib/mock-data";
import { periodLabels } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const periods: Period[] = ["daily", "weekly", "monthly"];

// Filter Waktu — segmented control untuk mengubah tampilan laporan ke harian,
// mingguan, atau bulanan.
export function PeriodFilter({
  value,
  onChange,
}: {
  value: Period;
  onChange: (period: Period) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter waktu"
      className="inline-flex rounded-lg border border-border bg-muted p-1"
    >
      {periods.map((p) => {
        const active = p === value;
        return (
          <button
            key={p}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(p)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              active
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {periodLabels[p]}
          </button>
        );
      })}
    </div>
  );
}
