import Link from 'next/link';

import Whatsapp from '@/components/icons/Whatsapp';
import Instagram from '@/components/icons/Instagram';
import Facebook from '@/components/icons/Facebook';

export default function Footer() {
  return (
    <footer className="mt-8 w-full bg-primary py-8 md:mt-0 md:py-12">
      <div className="container mx-auto lg:px-16">
        <hr className="h-[1px] border border-white opacity-50" />
        <div className="mt-3 flex flex-col-reverse items-center justify-between gap-5 text-base font-semibold text-white md:flex-row md:gap-0 md:text-lg">
          <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <p>Ikuti kami:</p>
            <div className="flex gap-4">
              <Link href={'https://wa.me/6282230908550'} target="_blank">
                <Whatsapp className="w-8" />
              </Link>
              <Link href={'https://instagram.com/sanggar_sinau'} target="_blank">
                <Instagram className="w-8" />
              </Link>
              <Link href={'https://facebook.com/sanggarSinau'} target="_blank">
                <Facebook className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
