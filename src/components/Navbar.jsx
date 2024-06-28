'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import IconButton from './IconButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/../public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = usePathname();

  useEffect(() => {
    if (router === '/program-bimbingan/tatap-muka') {
      setIsDropdownOpen(true);
    } else if (router === '/program-bimbingan/konsultasi-tugas') {
      setIsDropdownOpen(true);
    }
  }, [router]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="sticky-container bg-white shadow">
      <nav className="container mx-auto px-4 py-3 md:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" className="h-8 w-8" />
            <span className="ml-2 font-comfortaa text-lg font-bold text-primary md:text-xl">Sanggar Ilmu</span>
          </div>
          <div className="hidden items-center space-x-5 font-medium md:flex">
            <Link href="/" className={`${router === '/' ? 'text-primary' : 'hover:text-primary'}`}>
              Beranda
            </Link>
            <div
              className="group relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div className="flex items-center">
                <button
                  className={`${isDropdownOpen ? 'text-primary' : 'hover:text-primary'}`}
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Program Bimbingan
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-[100px] block w-48 rounded-md border bg-white shadow-lg">
                    <Link href="/program-bimbingan/tatap-muka" className="block px-4 py-2 hover:text-primary">
                      Tatap Muka
                    </Link>
                    <Link href="/program-bimbingan/konsultasi-tugas" className="block px-4 py-2 hover:text-primary">
                      Konsultasi Tugas
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <Link href="/pengajar" className={`${router === '/pengajar' ? 'text-primary' : 'hover:text-primary'}`}>
              Pengajar
            </Link>
            <Link
              href="/jadwal-kelas"
              className={`${router === '/jadwal-kelas' ? 'text-primary' : 'hover:text-primary'}`}
            >
              Jadwal Kelas
            </Link>
            <Link href="/kurikulum" className={`${router === '/kurikulum' ? 'text-primary' : 'hover:text-primary'}`}>
              Kurikulum
            </Link>
            <Button className="rounded-[30px] px-8 font-semibold">Daftar</Button>
          </div>
          <IconButton className="text-gray-700 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}
              ></path>
            </svg>
          </IconButton>
        </div>
        <div
          className={`${isOpen ? 'animate-slide-down' : 'animate-slide-up'} mt-3 space-y-2 font-medium md:hidden`}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {isOpen && (
            <>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Beranda
              </Link>
              <div
                className={`${isDropdownOpen && 'text-primary'} block w-full cursor-pointer px-4 py-2 text-left hover:text-primary`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Program Bimbingan
              </div>
              {isDropdownOpen && (
                <div className={`${isDropdownOpen ? 'animate-slide-down' : 'animate-slide-up'} pl-5`}>
                  <Link
                    href="/program-bimbingan/tatap-muka"
                    className={`${router === '/program-bimbingan/tatap-muka' && 'text-primary'} block px-4 py-2 hover:text-primary`}
                  >
                    Tatap Muka
                  </Link>
                  <Link
                    href="/program-bimbingan/konsultasi-tugas"
                    className={`${router === '/program-bimbingan/konsultasi-tugas' && 'text-primary'} block px-4 py-2 hover:text-primary`}
                  >
                    Konsultasi Tugas
                  </Link>
                </div>
              )}
              <Link href="/pengajar" className="block px-4 py-2 hover:bg-gray-100">
                Pengajar
              </Link>
              <Link href="/jadwal-kelas" className="block px-4 py-2 hover:bg-gray-100">
                Jadwal Kelas
              </Link>
              <Link href="/kurikulum" className="block px-4 py-2 hover:bg-gray-100">
                Kurikulum
              </Link>
              <Button className="w-full">Daftar</Button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
