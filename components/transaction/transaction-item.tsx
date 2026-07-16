import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

import type { Transaction } from "@/lib/types";
import { cn, formatDateTime, formatRupiah } from "@/lib/utils";

// Satu baris transaksi — dipakai di riwayat terkini (dashboard) dan bisa dipakai
// ulang untuk daftar riwayat lain. `showBranch` menampilkan nama cabang.
export function TransactionItem({
  transaction,
  showBranch = true,
}: {
  transaction: Transaction;
  showBranch?: boolean;
}) {
  const isIncome = transaction.type === "INCOME";
  const Icon = isIncome ? ArrowUpRight : ArrowDownLeft;

  return (
    <div className="flex items-center gap-3 py-2.5">
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          isIncome
            ? "bg-success/10 text-success"
            : "bg-destructive/10 text-destructive"
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{transaction.description}</p>
        <p className="truncate text-xs text-muted-foreground">
          {showBranch && <>{transaction.branchName} · </>}
          {formatDateTime(transaction.transactionDate)}
        </p>
      </div>
      <p
        className={cn(
          "shrink-0 text-sm font-semibold",
          isIncome ? "text-success" : "text-destructive"
        )}
      >
        {isIncome ? "+" : "−"}
        {formatRupiah(transaction.amount)}
      </p>
    </div>
  );
}
