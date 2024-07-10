'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import { cn } from '@/lib/utils';
import { useStore } from '@/stores/store';
import ChevronDown from '@/components/icons/ChevronDown';

export default function Sidebar() {
  const router = usePathname();
  const { setLogin } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (router === '/admin/program-bimbingan/tatap-muka' || router === '/admin/program-bimbingan/konsultasi') {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [router]);

  return (
    <nav className={cn(`relative hidden h-screen w-72 border-r bg-[#51A1D3]/45 pt-16 lg:block`)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="fixed mt-5 flex w-60 flex-col gap-5">
            <Link
              href="/admin/dashboard"
              className={`${router === '/admin/dashboard' && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.13em"
                height="1em"
                viewBox="0 0 576 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1c-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2c-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24"
                />
              </svg>
              <span className="font-semibold tracking-tight">Beranda</span>
            </Link>
            <Link
              href="/admin/akun-admin"
              className={`${router === '/admin/akun-admin' && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.25em"
                height="1em"
                viewBox="0 0 640 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M144 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160m368 0a80 80 0 1 1 0 160a80 80 0 1 1 0-160M0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96H21.3C9.6 320 0 310.4 0 298.7M405.3 320h-.7c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7c0 11.8-9.6 21.3-21.3 21.3zM224 224a96 96 0 1 1 192 0a96 96 0 1 1-192 0m-96 261.3c0-73.6 59.7-133.3 133.3-133.3h117.4c73.6 0 133.3 59.7 133.3 133.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7"
                />
              </svg>
              <span className="font-semibold tracking-tight">Manajemen Akun</span>
            </Link>
            <div>
              <div
                className={`${isDropdownOpen && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25em"
                  height="1em"
                  viewBox="0 0 640 512"
                  className="h-5 w-5"
                >
                  <path
                    fill="currentColor"
                    d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9V320c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6c-3.2 4.3-4.1 9.9-2.3 15s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7.3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14.2-7.5-28.7-13.5-42v-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5.8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1l280.6-101c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1c-7.6-2.7-15.6-4.1-23.7-4.1M128 408c0 35.3 86 72 192 72s192-36.7 192-72l-15.3-145.4L354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6l-142.2-51.4z"
                  />
                </svg>
                <div className="flex items-center justify-between gap-x-3">
                  <span className="font-semibold tracking-tight">Program Bimbingan</span>
                  <ChevronDown />
                </div>
              </div>
              {isDropdownOpen && (
                <div className={`${isDropdownOpen ? 'animate-slide-down' : 'animate-slide-up'} pl-8`}>
                  <Link
                    href="/admin/program-bimbingan/tatap-muka"
                    className={`${router === '/admin/program-bimbingan/tatap-muka' && 'text-primary'} block px-4 py-2 font-semibold hover:text-primary`}
                  >
                    Tatap Muka
                  </Link>
                  <Link
                    href="/admin/program-bimbingan/konsultasi"
                    className={`${router === '/admin/program-bimbingan/konsultasi' && 'text-primary'} block px-4 py-2 font-semibold hover:text-primary`}
                  >
                    Konsultasi Tugas
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/admin/pengajar"
              className={`${router === '/admin/pengajar' && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.13em"
                height="1em"
                viewBox="0 0 576 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80m-32-96a64 64 0 1 1 128 0a64 64 0 1 1-128 0m256-32h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16m0 64h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16"
                />
              </svg>
              <span className="font-semibold tracking-tight">Guru Pengajar</span>
            </Link>
            <Link
              href="/admin/jadwal-kelas"
              className={`${router === '/admin/jadwal-kelas' && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.13em"
                height="1em"
                viewBox="0 0 576 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8v370.3c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5m76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5"
                />
              </svg>
              <span className="font-semibold tracking-tight">Jadwal Kelas</span>
            </Link>
            <Link
              href="/admin/verifikasi-pendaftaran"
              className={`${router === '/admin/verifikasi-pendaftaran' && 'bg-primary'} flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.88em"
                height="1em"
                viewBox="0 0 448 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32m45.3 493.3c12-12 18.7-28.3 18.7-45.3H160c0 17 6.7 33.3 18.7 45.3S207 512 224 512s33.3-6.7 45.3-18.7"
                />
              </svg>
              <span className="font-semibold tracking-tight">Verifikasi Pendafataran</span>
            </Link>
            <div
              className={`flex w-full items-center space-x-3 rounded-md py-2 pl-4 hover:bg-primary`}
              onClick={() => setLogin(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l73.4 73.4H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h210.7l-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128v256c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32z"
                />
              </svg>
              <span className="font-semibold tracking-tight">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
