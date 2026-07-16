import type { Branch, CashSummary, Transaction } from "./types";

// ---------------------------------------------------------------------------
// Data tiruan (stub) untuk membangun UI dashboard sebelum backend tersedia.
// Struktur mengikuti tipe domain di lib/types.ts. Diganti data API di fase backend.
// ---------------------------------------------------------------------------

export const mockBranches: Branch[] = [
  { id: "b1", name: "Warteg Jaya 1", address: "Jl. Merdeka No. 1, Jakarta" },
  { id: "b2", name: "Warteg Jaya 2", address: "Jl. Sudirman No. 12, Bekasi" },
  { id: "b3", name: "Warteg Jaya 3", address: "Jl. Melati No. 7, Depok" },
];

// Beberapa transaksi terbaru tersebar di seluruh cabang, dalam rentang minggu ini.
export const mockTransactions: Transaction[] = [
  {
    id: "t1", branchId: "b1", branchName: "Warteg Jaya 1", userId: "u1",
    userName: "Sari", type: "INCOME", amount: 1250000,
    description: "Penjualan harian", transactionDate: "2026-07-16T09:30:00Z",
    createdAt: "2026-07-16T09:31:00Z",
  },
  {
    id: "t2", branchId: "b1", branchName: "Warteg Jaya 1", userId: "u1",
    userName: "Sari", type: "EXPENSE", amount: 380000,
    description: "Belanja sayur & bumbu", transactionDate: "2026-07-16T06:00:00Z",
    createdAt: "2026-07-16T06:05:00Z",
  },
  {
    id: "t3", branchId: "b2", branchName: "Warteg Jaya 2", userId: "u2",
    userName: "Budi", type: "INCOME", amount: 980000,
    description: "Penjualan harian", transactionDate: "2026-07-15T20:00:00Z",
    createdAt: "2026-07-15T20:02:00Z",
  },
  {
    id: "t4", branchId: "b2", branchName: "Warteg Jaya 2", userId: "u2",
    userName: "Budi", type: "EXPENSE", amount: 250000,
    description: "Gas & galon air", transactionDate: "2026-07-15T07:15:00Z",
    createdAt: "2026-07-15T07:16:00Z",
  },
  {
    id: "t5", branchId: "b3", branchName: "Warteg Jaya 3", userId: "u3",
    userName: "Rina", type: "INCOME", amount: 1430000,
    description: "Penjualan harian + katering", transactionDate: "2026-07-15T19:45:00Z",
    createdAt: "2026-07-15T19:46:00Z",
  },
  {
    id: "t6", branchId: "b3", branchName: "Warteg Jaya 3", userId: "u3",
    userName: "Rina", type: "EXPENSE", amount: 520000,
    description: "Belanja ayam & telur", transactionDate: "2026-07-14T06:30:00Z",
    createdAt: "2026-07-14T06:31:00Z",
  },
  {
    id: "t7", branchId: "b1", branchName: "Warteg Jaya 1", userId: "u1",
    userName: "Sari", type: "INCOME", amount: 1120000,
    description: "Penjualan harian", transactionDate: "2026-07-14T20:10:00Z",
    createdAt: "2026-07-14T20:11:00Z",
  },
  {
    id: "t8", branchId: "b2", branchName: "Warteg Jaya 2", userId: "u2",
    userName: "Budi", type: "EXPENSE", amount: 175000,
    description: "Beras 25kg", transactionDate: "2026-07-13T06:45:00Z",
    createdAt: "2026-07-13T06:46:00Z",
  },
];

/** Hitung ringkasan kas (pemasukan, pengeluaran, selisih) dari daftar transaksi. */
export function summarize(transactions: Transaction[]): CashSummary {
  const income = transactions
    .filter((t) => t.type === "INCOME")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "EXPENSE")
    .reduce((sum, t) => sum + t.amount, 0);
  return { income, expense, balance: income - expense };
}

/** Ringkasan kas minggu ini (data tiruan sudah berada dalam rentang minggu berjalan). */
export const weeklySummary: CashSummary = summarize(mockTransactions);

export type Period = "daily" | "weekly" | "monthly";

export const periodLabels: Record<Period, string> = {
  daily: "Harian",
  weekly: "Mingguan",
  monthly: "Bulanan",
};

/**
 * Batas awal rentang untuk sebuah periode, relatif terhadap `ref`:
 * - daily   → awal hari ini
 * - weekly  → 7 hari terakhir
 * - monthly → awal bulan ini
 */
function periodStart(period: Period, ref: Date): Date {
  const d = new Date(ref);
  if (period === "daily") {
    d.setHours(0, 0, 0, 0);
  } else if (period === "weekly") {
    d.setDate(d.getDate() - 6);
    d.setHours(0, 0, 0, 0);
  } else {
    d.setDate(1);
    d.setHours(0, 0, 0, 0);
  }
  return d;
}

/** Saring transaksi sesuai periode terpilih (relatif ke `ref`, default sekarang). */
export function filterByPeriod(
  transactions: Transaction[],
  period: Period,
  ref: Date = new Date()
): Transaction[] {
  const start = periodStart(period, ref).getTime();
  const end = ref.getTime();
  return transactions.filter((t) => {
    const time = new Date(t.transactionDate).getTime();
    return time >= start && time <= end;
  });
}

export interface BranchRecap extends CashSummary {
  branch: Branch;
}

/** Transaksi terbaru dari daftar (default: semua data tiruan), terbaru lebih dulu. */
export function recentTransactions(
  transactions: Transaction[] = mockTransactions,
  limit = 5
): Transaction[] {
  return [...transactions]
    .sort(
      (a, b) =>
        new Date(b.transactionDate).getTime() -
        new Date(a.transactionDate).getTime()
    )
    .slice(0, limit);
}

/** Rekap kas per cabang dari daftar transaksi (default: semua data tiruan). */
export function branchRecaps(
  transactions: Transaction[] = mockTransactions
): BranchRecap[] {
  return mockBranches
    .map((branch) => {
      const txs = transactions.filter((t) => t.branchId === branch.id);
      return { branch, ...summarize(txs) };
    })
    .sort((a, b) => b.balance - a.balance);
}
