import { AppShell } from "@/components/layout/app-shell";
import { DashboardView } from "@/components/dashboard/dashboard-view";
import { mockTransactions } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard Ringkasan Kas">
      <DashboardView transactions={mockTransactions} />
    </AppShell>
  );
}
