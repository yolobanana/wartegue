# Arus Kas Warteg

Aplikasi web mobile-friendly untuk mencatat arus kas harian tiap cabang warteg
dan memantau performa keuangan semua cabang dalam satu dasbor.

- **Pengelola Cabang** — mencatat pemasukan & pengeluaran harian per cabang.
- **Investor** — memantau ringkasan dan rekap kas seluruh cabang.

## Tech Stack

- **Next.js** (App Router) — frontend & backend dalam satu codebase
- **Tailwind CSS** — styling, komponen bergaya shadcn/ui
- **Drizzle ORM + SQLite** — skema & query database (fase backend)
- **Better Auth** — autentikasi & manajemen peran (fase backend)

## Menjalankan

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) — otomatis diarahkan ke
`/dashboard`.

## Struktur

```
app/                  Rute Next.js (App Router)
  dashboard/          Halaman Dashboard Ringkasan Kas
components/
  layout/             Kerangka aplikasi (sidebar, topbar, bottom-nav)
  ui/                 Komponen UI dasar (card, button)
lib/                  Utilitas (cn, format rupiah, konfigurasi navigasi)
```

> Tahap saat ini: frontend dibangun di atas data tiruan/stub. API & database
> menyusul pada fase backend.
