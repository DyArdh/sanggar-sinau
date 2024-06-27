'use client';

import { usePathname } from 'next/navigation';

export default function TatapMuka() {
  const router = usePathname();

  console.log(router);
  return (
    <>
      <h1>Test</h1>
    </>
  );
}
