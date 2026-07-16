import Link from "next/link";
import { History } from "lucide-react";

import type { Transaction } from "@/lib/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TransactionItem } from "@/components/transaction/transaction-item";

// Riwayat Transaksi Terkini — daftar transaksi terbaru dari semua cabang tanpa
// perlu membuka halaman lain.
export function RecentTransactions({
  transactions,
}: {
  transactions: Transaction[];
}) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
          <History className="h-4 w-4" />
          Transaksi Terkini
        </CardTitle>
        <Link
          href="/transaksi"
          className="text-xs font-medium text-primary hover:underline"
        >
          Lihat semua
        </Link>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            Belum ada transaksi.
          </p>
        ) : (
          <div className="divide-y divide-border">
            {transactions.map((t) => (
              <TransactionItem key={t.id} transaction={t} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
