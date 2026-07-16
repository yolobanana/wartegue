import { AppShell } from "@/components/layout/app-shell";
import { WeeklySummary } from "@/components/dashboard/weekly-summary";
import { weeklySummary } from "@/lib/mock-data";

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

        {/* Rekap cabang, filter waktu, dan riwayat transaksi diisi pada task berikutnya. */}
      </div>
    </AppShell>
  );
}
