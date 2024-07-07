'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import User from '@/components/icons/User';
import Pencil from '@/components/icons/Pencil';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useStore } from '@/stores/store';

export default function Profile() {
  const router = useRouter();
  const { isLogin } = useStore();
  const [parentName, setParentName] = useState('Karina Aespa');
  const [childName, setChildName] = useState('Winter Aespa');
  const [email, setEmail] = useState('karinaespa@gmail.com');
  const [telp, setTelp] = useState('081234567890');
  const [password, setPassword] = useState('akuseorangkapitan');
  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [editMode3, setEditMode3] = useState(false);
  const [editMode4, setEditMode4] = useState(false);

  useEffect(() => {
    if (!isLogin && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [isLogin, router]);

  return (
    <>
      <section className="flex w-full bg-white">
        <div className="container mx-auto flex flex-col items-center pb-12 pt-12 md:gap-8 md:pb-16 md:pt-10 lg:px-16">
          <div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <span className="text-[#323232]">
                <User className="w-12" />
              </span>
              <div>
                <p className="mb-3 font-bold text-thirdary md:text-lg">{parentName}</p>
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-white md:text-base">
                  Orangtua
                </span>
              </div>
            </div>
            <div className="mt-5 rounded-20 border px-3 py-8 md:mt-7 md:max-w-[900px] md:px-12 md:py-6">
              <h1 className="pl-2 text-lg font-bold md:text-xl">Data Profile</h1>
              <table className="border-separate border-spacing-4 md:mt-6 md:border-spacing-2">
                <tbody>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Nama Orangtua</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode1 ? (
                        <Input type="text" value={parentName} onChange={e => setParentName(e.target.value)} />
                      ) : (
                        parentName
                      )}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={() => setEditMode1(!editMode1)}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Nama Anak</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode2 ? (
                        <Input type="text" value={parentName} onChange={e => setChildName(e.target.value)} />
                      ) : (
                        childName
                      )}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={() => setEditMode2(!editMode2)}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">No. Telp/HP</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode3 ? <Input type="text" value={telp} onChange={e => setTelp(e.target.value)} /> : telp}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={() => setEditMode3(!editMode3)}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Email</td>
                    <td className="text-thirdary md:text-lg">{email}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Password</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode4 ? (
                        <Input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                      ) : (
                        '*'.repeat(password.length)
                      )}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={() => setEditMode4(!editMode4)}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 text-end md:mt-10">
                <Button className="rounded-full px-6 font-semibold">Perbaharui Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
