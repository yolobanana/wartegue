import { Wallet } from "lucide-react";

// Header ringkas. Di mobile menampilkan brand; di desktop menampilkan judul halaman.
export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Wallet className="h-4 w-4" />
        </div>
        <span className="font-semibold">Arus Kas Warteg</span>
      </div>
      <h1 className="hidden text-lg font-semibold md:block">{title}</h1>
    </header>
  );
}
