'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import Logo from '@/../public/logo.png';
import User from '../icons/User';
import { useStore } from '@/stores/store';

export default function Header() {
  const { loggedInAccount } = useStore();
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    setLoading(false); // Simulate data loading completion
  }, []);

  if (!loggedInAccount || loading) {
    return <div>...</div>;
  }

  let roleText = '';
  if (loggedInAccount.role === 'pemilik') {
    roleText = 'Pemilik';
  } else if (loggedInAccount.role === 'admin') {
    roleText = 'Admin';
  }

  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-7">
        <div className="hidden lg:block">
          <Link href="/admin/dashboard" className="flex items-center gap-x-3" target="_blank">
            <Image src={Logo} className="w-8" alt="Logo" />
            <h1 className="font-comfortaa text-xl font-bold text-primary">Sanggar Sinau</h1>
          </Link>
        </div>
        <Link href={'/admin/profile'} className="flex items-center gap-x-4">
          <p className="text-sm font-medium text-[#1782C4]">{roleText}</p>
          <User className="h-7 w-7 text-[#1782C4]" />
        </Link>
      </nav>
    </div>
  );
}
