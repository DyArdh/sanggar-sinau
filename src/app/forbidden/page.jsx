import Link from 'next/link';

export default function ForbiddenPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-6 text-center shadow-lg md:p-12">
        <h1 className="mb-4 text-4xl font-bold text-red-600 md:text-5xl">403 Forbidden</h1>
        <p className="mb-6 text-base text-gray-700 md:text-lg">Maaf, kamu tidak punya akses ke halaman ini</p>
        <Link href="/" className="text-primary underline hover:text-primary/75">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
