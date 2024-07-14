'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import IconButton from './IconButton';
import ChevronDown from '@/components/icons/ChevronDown';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/../public/logo.png';
import { useStore } from '@/stores/store';
import User from '@/components/icons/User';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = usePathname();
  const { isLogin, setLogin, logout } = useStore();

  useEffect(() => {
    if (router === '/program-bimbingan/tatap-muka' || router === '/program-bimbingan/konsultasi-tugas') {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [router]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleProfileDropdownMouseEnter = () => {
    setIsProfileDropdownOpen(true);
  };

  const handleProfileDropdownMouseLeave = () => {
    setIsProfileDropdownOpen(false);
  };

  return (
    <div className="sticky-container bg-white shadow">
      <nav className="container mx-auto px-4 py-3 md:px-16">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src={Logo} alt="Logo" className="h-8 w-8" />
            <span className="ml-2 font-comfortaa text-lg font-bold text-primary md:text-xl">Sanggar Sinau</span>
          </Link>
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
                  className={`${router.includes('/program-bimbingan') ? 'text-primary' : 'hover:text-primary'} flex items-center gap-x-2`}
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  Program Bimbingan{' '}
                  <span>
                    <ChevronDown className="h-4 w-4" />
                  </span>
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
            {isLogin ? (
              <Link
                href="/jadwal-kelas"
                className={`${router === '/jadwal-kelas' ? 'text-primary' : 'hover:text-primary'}`}
              >
                Jadwal Kelas
              </Link>
            ) : (
              ''
            )}
            <Link href="/kurikulum" className={`${router === '/kurikulum' ? 'text-primary' : 'hover:text-primary'}`}>
              Kurikulum
            </Link>
            {isLogin ? (
              <div
                className="relative"
                onMouseEnter={handleProfileDropdownMouseEnter}
                onMouseLeave={handleProfileDropdownMouseLeave}
              >
                <User className="h-8 w-8 cursor-pointer text-primary" onClick={toggleProfileDropdown} />
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 w-40 rounded-md border bg-white shadow-lg">
                    <Link href="/profile" className="block px-4 py-2 hover:text-primary">
                      Profile
                    </Link>
                    <Link href="/riwayat-pendaftaran" className="block px-4 py-2 hover:text-primary">
                      Riwayat Pendaftaran
                    </Link>
                    <button className="block w-full px-4 py-2 text-left hover:text-primary" onClick={logout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/registrasi">
                <Button className="rounded-[30px] px-8 font-semibold">Daftar</Button>
              </Link>
            )}
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
                className={`${isDropdownOpen && 'text-primary'} flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left hover:text-primary`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Program Bimbingan{' '}
                <span>
                  <ChevronDown />
                </span>
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
              {isLogin ? (
                <div className="relative">
                  <button
                    className="flex w-full items-center justify-between px-4 py-2 text-left hover:text-primary"
                    onClick={toggleProfileDropdown}
                  >
                    Profile
                    <span>
                      <ChevronDown />
                    </span>
                  </button>
                  {isProfileDropdownOpen && (
                    <div className={`${isProfileDropdownOpen ? 'animate-slide-down' : 'animate-slide-up'} pl-5`}>
                      <Link
                        href="/profile"
                        className={`${router === '/profile' && 'text-primary'} block px-4 py-2 hover:text-primary`}
                      >
                        Profile
                      </Link>
                      <Link
                        href="/riwayat-pendaftaran"
                        className={`${router === '/riwayat-pendaftaran' && 'text-primary'} block px-4 py-2 hover:text-primary`}
                      >
                        Riwayat Pendaftaran
                      </Link>
                      <button className="block w-full px-4 py-2 text-left hover:text-primary" onClick={logout}>
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/registrasi">
                  <Button className="w-full">Daftar</Button>
                </Link>
              )}
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
