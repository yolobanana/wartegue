import { ArrowDownRight, ArrowUpRight, Store } from "lucide-react";

import type { BranchRecap } from "@/lib/mock-data";
import { cn, formatRupiah } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Rekap Semua Cabang — perbandingan performa keuangan tiap cabang secara ringkas.
// Diurutkan dari selisih kas tertinggi; bar proporsional memudahkan perbandingan.
export function BranchRecapList({ recaps }: { recaps: BranchRecap[] }) {
  const maxIncome = Math.max(1, ...recaps.map((r) => r.income));

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-semibold text-muted-foreground">
          Rekap Semua Cabang
        </CardTitle>
        <Store className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-4">
        {recaps.map((r) => (
          <div key={r.branch.id} className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{r.branch.name}</p>
                <div className="mt-0.5 flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1 text-success">
                    <ArrowUpRight className="h-3 w-3" />
                    {formatRupiah(r.income)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-destructive">
                    <ArrowDownRight className="h-3 w-3" />
                    {formatRupiah(r.expense)}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "shrink-0 text-sm font-semibold",
                  r.balance >= 0 ? "text-foreground" : "text-destructive"
                )}
              >
                {formatRupiah(r.balance)}
              </p>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${(r.income / maxIncome) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
