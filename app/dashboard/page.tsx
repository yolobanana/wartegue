import { AppShell } from "@/components/layout/app-shell";
import { WeeklySummary } from "@/components/dashboard/weekly-summary";
import { BranchRecapList } from "@/components/dashboard/branch-recap";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { branchRecaps, recentTransactions, weeklySummary } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard Ringkasan Kas">
      <div className="space-y-6 animate-fade-up">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Ringkasan Kas</h2>
          <p className="text-sm text-muted-foreground">
            Pantau arus kas seluruh cabang warteg dalam satu layar.
          </p>
        </div>

        <WeeklySummary summary={weeklySummary} />

        <BranchRecapList recaps={branchRecaps()} />

        <RecentTransactions transactions={recentTransactions()} />

        {/* Filter waktu diisi pada task berikutnya. */}
      </div>
    </AppShell>
  );
}
