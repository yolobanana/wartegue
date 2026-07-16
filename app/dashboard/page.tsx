import { AppShell } from "@/components/layout/app-shell";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <AppShell title="Dashboard Ringkasan Kas">
      <div className="space-y-6 animate-fade-up">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Ringkasan Kas
          </h2>
          <p className="text-sm text-muted-foreground">
            Pantau arus kas seluruh cabang warteg dalam satu layar.
          </p>
        </div>

        {/* Section-section ringkasan (ringkasan mingguan, rekap cabang, filter waktu,
            riwayat transaksi) diisi pada task-task berikutnya di halaman ini. */}
        <Card>
          <CardContent className="py-10 text-center text-sm text-muted-foreground">
            Ringkasan kas akan tampil di sini.
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
