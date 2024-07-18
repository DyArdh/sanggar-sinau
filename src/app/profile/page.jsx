'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

import User from '@/components/icons/User';
import Pencil from '@/components/icons/Pencil';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useStore } from '@/stores/store';

export default function Profile() {
  const router = useRouter();
  const { toast } = useToast();
  const { loggedInAccount } = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm({
    defaultValues: {
      parentName: loggedInAccount?.nama || '',
      childName: 'Winter Aespa',
      email: loggedInAccount?.email || '',
      telp: loggedInAccount?.telp || '',
      password: loggedInAccount?.password || '',
    },
  });

  const [editMode1, setEditMode1] = useState(false);
  const [editMode2, setEditMode2] = useState(false);
  const [editMode3, setEditMode3] = useState(false);
  const [editMode4, setEditMode4] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = Cookies.get('isLogin');
    if (!isUserLoggedIn && typeof window !== 'undefined') {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    if (loggedInAccount) {
      reset({
        parentName: loggedInAccount?.nama || '',
        childName: 'Winter Aespa',
        email: loggedInAccount?.email || '',
        telp: loggedInAccount?.telp || '',
        password: loggedInAccount?.password || '',
      });
    }
  }, [loggedInAccount, reset]);

  const onSubmit = data => {
    console.log(data);
    toast({
      description: 'Data pengajar telah ditambahkan',
      className: 'bg-green-500 text-white font-medium',
    });
  };

  const handleEditMode1 = () => {
    setEditMode1(!editMode1);
    if (!editMode1) {
      trigger('parentName');
    }
  };

  const handleEditMode2 = () => {
    setEditMode2(!editMode2);
    if (!editMode2) {
      trigger('childName');
    }
  };

  const handleEditMode3 = () => {
    setEditMode3(!editMode3);
    if (!editMode3) {
      trigger('telp');
    }
  };

  const handleEditMode4 = () => {
    setEditMode4(!editMode4);
    if (!editMode4) {
      trigger('password');
    }
  };

  return (
    <section className="flex w-full bg-white">
      <div className="container mx-auto flex flex-col items-center pb-12 pt-12 md:gap-8 md:pb-16 md:pt-10 lg:px-16">
        <div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <span className="text-[#323232]">
              <User className="w-12" />
            </span>
            <div>
              <p className="mb-3 font-bold text-thirdary md:text-lg">{loggedInAccount?.nama}</p>
              <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-white md:text-base">
                {loggedInAccount?.role}
              </span>
            </div>
          </div>
          <div className="mt-5 rounded-20 border px-3 py-8 md:mt-7 md:max-w-[900px] md:px-12 md:py-6">
            <h1 className="pl-2 text-lg font-bold md:text-xl">Data Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <table className="border-separate border-spacing-4 md:mt-6 md:border-spacing-2">
                <tbody>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Nama Orangtua</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode1 ? (
                        <Input type="text" {...register('parentName', { required: true })} />
                      ) : (
                        <span>{loggedInAccount?.nama}</span>
                      )}
                      {editMode1 && errors.parentName && (
                        <span className="text-sm text-red-500">Nama orangtua harus diisi.</span>
                      )}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={handleEditMode1}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Nama Anak</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode2 ? (
                        <Input type="text" {...register('childName', { required: true })} />
                      ) : (
                        <span>Winter Aespa</span>
                      )}
                      {editMode2 && errors.childName && <span className="text-red-500">Nama anak harus diisi.</span>}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={handleEditMode2}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">No. Telp/HP</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode3 ? (
                        <Input type="text" {...register('telp', { required: true })} />
                      ) : (
                        <span>{loggedInAccount?.telp}</span>
                      )}
                      {editMode3 && errors.telp && <span className="text-red-500">No. Telp/HP harus diisi.</span>}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={handleEditMode3}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Email</td>
                    <td className="text-thirdary md:text-lg">{loggedInAccount?.email}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-thirdary md:w-64 md:text-lg">Password</td>
                    <td className="md:w-80 md:text-lg">
                      {editMode4 ? (
                        <Input type="text" {...register('password', { required: true })} />
                      ) : (
                        <span>{'*'.repeat(loggedInAccount?.password.length)}</span>
                      )}
                      {editMode4 && errors.password && (
                        <span className="text-sm text-red-500">Password harus diisi.</span>
                      )}
                    </td>
                    <td className="relative w-10">
                      <div className="flex h-full items-center justify-center">
                        <span onClick={handleEditMode4}>
                          <Pencil />
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 text-end md:mt-10">
                <Button type="submit" className="rounded-full px-6 font-semibold">
                  Perbaharui Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
