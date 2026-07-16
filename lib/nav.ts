import { LayoutDashboard, PlusCircle, ReceiptText, type LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

// Navigasi utama aplikasi. Halaman transaksi & riwayat dibangun di fase berikutnya,
// tapi item nav sudah disiapkan agar shell konsisten.
export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Catat", href: "/transaksi/baru", icon: PlusCircle },
  { label: "Riwayat", href: "/transaksi", icon: ReceiptText },
];
