// Tipe domain — mengikuti skema database di PRD (users, branches, transactions).
// Dipakai di layer frontend dengan data tiruan; kontrak yang sama akan diisi API
// pada fase backend.

export type Role = "INVESTOR" | "MANAGER";
export type TransactionType = "INCOME" | "EXPENSE";

export interface Branch {
  id: string;
  name: string;
  address?: string;
}

export interface Transaction {
  id: string;
  branchId: string;
  branchName: string;
  userId: string;
  userName: string;
  type: TransactionType;
  amount: number;
  description: string;
  transactionDate: string; // ISO date
  createdAt: string; // ISO date
}

export interface CashSummary {
  income: number;
  expense: number;
  balance: number; // income - expense
}
