import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section1 from '@/../public/section1.png';
import Section2 from '@/../public/section2.png';
import Section3_1 from '@/../public/section3-1.png';
import Section3_2 from '@/../public/section3-2.png';
import Section4_1 from '@/../public/section4-1.png';
import Section4_2 from '@/../public/section4-2.png';
import Section4_3 from '@/../public/section4-3.png';
import Section5_1 from '@/../public/section5-1.png';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex w-full bg-white md:h-screen md:max-h-[850px]">
          <div className="container mx-auto flex items-center justify-center py-12 md:gap-8 md:py-0 md:pb-0 lg:px-16">
            <div className="flex items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-2xl font-extrabold leading-tight lg:text-[45px]">
                  Belajar dan Kembangkan <br />
                  Ide Mencapai <span className="text-secondary">Cita-citamu!</span>
                </h1>
                <p className="mt-5 text-base font-medium md:mt-10 md:text-[20px]">
                  Apakah kamu siap untuk menggapai cita-citamu? <br />
                  Bergabunglah dengan Sanggar Sinau dan temukan <br />
                  cara terbaik untuk mengembangkan potensi dirimu!
                </p>
                <Link href="/daftar-kelas">
                  <Button className="mt-10 rounded-[25px] px-7 py-6 text-base font-semibold md:mt-14 md:text-lg">
                    Daftar Sekarang!
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <Image src={Section1} className="hidden md:block" alt="Sanggar Sinau" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full bg-bgSecondary md:h-screen md:max-h-[850px]">
          <div className="container mx-auto flex items-center justify-center py-12 md:gap-8 md:py-0 lg:px-16">
            <div>
              <Image src={Section2} className="hidden md:block" alt="Mengenal Sanggar Sinau" />
            </div>
            <div className="max-w-[680px] rounded-[30px] border border-black border-opacity-50 bg-white px-6 py-7 md:px-8 md:py-9">
              <div>
                <h1 className="text-2xl font-bold lg:text-3xl">
                  Mengenal <span className="text-secondary">Sanggar Sinau</span>
                </h1>
                <p className="mt-4 opacity-80 lg:text-lg">
                  Program bimbingan PAUD/TK di Sanggar Sinau dirancang khusus untuk anak-anak usia dini untuk
                  mengembangkan keterampilan dasar mereka dalam suasana belajar yang menyenangkan dan interaktif.
                  Program ini mencakup pembelajaran dasar seperti membaca, menulis, berhitung, serta pengembangan
                  keterampilan motorik dan sosial
                </p>
              </div>
              <div>
                <h1 className="my-4 text-2xl font-bold lg:text-3xl">
                  Mengapa Memilih <span className="text-secondary">Sanggar Sinau?</span>
                </h1>
                <ol className="list-decimal ps-4 opacity-80 lg:text-lg">
                  <li>Program bimbingan yang komprehensif dan berkualitas.</li>
                  <li>Mentor berpengalaman dan profesional.</li>
                  <li>Metode pengajaran yang inovatif dan menyenangkan.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex w-full bg-white md:h-screen md:max-h-[850px]">
          <div className="container mx-auto flex flex-col items-center justify-center py-12 md:gap-8 md:py-0 lg:px-16">
            <h1 className="text-2xl font-bold md:text-3xl">Pilihan Program Bimbingan</h1>
            <div className="mt-5 flex flex-col gap-5 md:mt-2 md:flex-row md:gap-8">
              <div className="rounded-[30px] border border-black border-opacity-50 px-6 py-7 text-center">
                <Image src={Section3_1} className="rounded-[30px] md:max-w-[300px]" alt="Pilihan Program Bimbingan" />
                <div className="mb-7 mt-5">
                  <h1 className="text-xl font-bold">Kelas Tatap Muka Rutin</h1>
                  <p className="mt-2">
                    Dapatkan proses belajar bersama <br />
                    mentor profesional dilokasi <br />
                    terdekat dari rumah.
                  </p>
                </div>
                <Button className="bg-primary">Cek Lokasi Terdekat!</Button>
              </div>
              <div className="rounded-[30px] border border-black border-opacity-50 px-6 py-7 text-center">
                <Image src={Section3_2} className="rounded-[30px] md:max-w-[300px]" alt="Pilihan Program Bimbingan" />
                <div className="mb-7 mt-5">
                  <h1 className="text-xl font-bold">Kelas Konsultasi Tugas</h1>
                  <p className="mt-2">
                    Dapatkan konsultasi bersama <br />
                    mentor yang dapat membantu <br />
                    menyelesaikan tugas sekolah.
                  </p>
                </div>
                <Link href="/program-bimbingan/konsultasi-tugas">
                  <Button className="bg-primary">Lihat Jadwal Konsultasi!</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex w-full bg-bgSecondary md:h-screen md:max-h-[850px]">
          <div className="container mx-auto flex flex-col items-center justify-center py-12 md:gap-8 md:py-0 lg:px-16">
            <h1 className="text-2xl font-bold md:text-3xl">Pilihan Kategori Kelas</h1>
            <div className="mt-5 flex flex-col gap-5 md:mt-2 md:flex-row md:gap-8">
              <div>
                <Image src={Section4_1} alt="Kelas PAUD" />
                <div className="mt-6 text-center text-base md:text-xl">
                  <span className="rounded-full bg-[#D9D9D9] px-8 py-2 font-semibold">PAUD</span>
                  <p className="mt-5">Usia 3 - 4 Tahun</p>
                </div>
              </div>
              <div>
                <Image src={Section4_2} alt="Kelas TK" />
                <div className="mt-6 text-center text-base md:text-xl">
                  <span className="rounded-full bg-[#D9D9D9] px-8 py-2 font-semibold">TK</span>
                  <p className="mt-5">Usia 5 - 7 Tahun</p>
                </div>
              </div>
              <div>
                <Image src={Section4_3} alt="Kelas SD" />
                <div className="mt-6 text-center text-base md:text-xl">
                  <span className="rounded-full bg-[#D9D9D9] px-8 py-2 font-semibold">SD/MI</span>
                  <p className="mt-5">Kelas 1 - 6</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="flex w-full bg-white md:mt-20">
          <div className="container mx-auto flex flex-col items-center justify-center pt-10 md:gap-8 md:pt-0 lg:px-16">
            <h1 className="text-2xl font-bold text-primary md:text-3xl">
              Pengajar <span className="text-secondary">Sanggar Sinau</span>
            </h1>
            <div className="mt-5 flex flex-col gap-5 md:mt-2 md:flex-row md:gap-8">
              <div className="max-w-[250px]">
                <Image src={Section5_1} alt="Kelas PAUD" />
                <div className="mt-4 text-center">
                  <p className="text-base font-semibold text-primary md:text-lg">Rina Putri</p>
                  <p className="mt-2 text-sm text-black opacity-80 md:text-base">
                    Mahasiswa Universitas Jember PG PAUD
                  </p>
                </div>
              </div>
              <div className="max-w-[250px]">
                <Image src={Section5_1} alt="Kelas PAUD" />
                <div className="mt-4 text-center">
                  <p className="text-base font-semibold text-primary md:text-lg">Rina Putri</p>
                  <p className="mt-2 text-sm text-black opacity-80 md:text-base">
                    Mahasiswa Universitas Jember PG PAUD
                  </p>
                </div>
              </div>
              <div className="max-w-[250px]">
                <Image src={Section5_1} alt="Kelas PAUD" />
                <div className="mt-4 text-center">
                  <p className="text-base font-semibold text-primary md:text-lg">Rina Putri</p>
                  <p className="mt-2 text-sm text-black opacity-80 md:text-base">
                    Mahasiswa Universitas Jember PG PAUD
                  </p>
                </div>
              </div>
            </div>
            <Link href="/pengajar">
              <Button className="mt-8 bg-primary font-semibold">Lihat Selengkapnya</Button>
            </Link>
            <div className="mt-8 w-full rounded-30 bg-[#15C4CF] py-8 text-center">
              <h1 className="text-xl font-bold text-white md:text-3xl">Konsultasikan Kebutuhan Anda Sekarang</h1>
              <Button className="mt-8 bg-white text-base text-primary hover:bg-white/90 md:text-lg">Chat Admin</Button>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-8 flex w-full bg-white md:mt-5 md:py-10">
          <div className="container mx-auto flex flex-col items-center justify-center md:gap-8 md:pt-0 lg:px-16">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary md:text-3xl">
                Frequently Asked <span className="text-secondary">Question</span>
              </h1>
              <h2 className="text-lg font-medium md:text-xl">Pertanyaan yang sering diajukan</h2>
            </div>
            <div className="mt-5 flex w-full flex-col gap-5 md:mt-2 md:flex-row md:gap-8">
              <div className="w-full">
                <Accordion type="single" collapsible className="flex w-full flex-col gap-5">
                  <AccordionItem value="item-1" className="border-b-0">
                    <AccordionTrigger className="rounded-[6px] bg-primary px-8 text-base text-white md:text-lg">
                      Di mana kegiatan bimbingan dilaksanakan?
                    </AccordionTrigger>
                    <AccordionContent
                      className="bg-white px-8 py-3 text-sm shadow-lg md:text-base"
                      style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '0 0 6px 6px' }}
                    >
                      Bimbingan belajar dilaksanakan di sanggar sinau dengan pilihan lokasi terdekat dengan rumah.
                      Tempat yang disediakan aman dan nyaman.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b-0">
                    <AccordionTrigger className="rounded-[6px] bg-primary px-8 text-base text-white md:text-lg">
                      Bagaimana pembagian jadwal kelas bimbingan?
                    </AccordionTrigger>
                    <AccordionContent
                      className="bg-white px-8 py-3 text-sm shadow-lg md:text-base"
                      style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '0 0 6px 6px' }}
                    >
                      Jadwal bimbingan akan ditentukan diawal sesuai kebutuhan siswa. Orangtua siswa dapat memilih dan
                      menyesuaikan dengan jadwal yang telah ditentukan diawal.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b-0">
                    <AccordionTrigger className="rounded-[6px] bg-primary px-8 text-base text-white md:text-lg">
                      Bagaimana alur pendaftaran di Sanggar Sinau?
                    </AccordionTrigger>
                    <AccordionContent
                      className="bg-white px-8 py-3 text-sm shadow-lg md:text-base"
                      style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '0 0 6px 6px' }}
                    >
                      Alur pendaftaran dapat dilakukan dengan membuat akun terlebih dahulu dan melakukan registrasi akun
                      kemudian orangtua dapat memilih program bimbingan yang sesuai dengan kebutuhan anak.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-b-0">
                    <AccordionTrigger className="rounded-[6px] bg-primary px-8 text-base text-white md:text-lg">
                      Bolehkah mengganti jadwal yang sudah ditentukan?
                    </AccordionTrigger>
                    <AccordionContent
                      className="bg-white px-8 py-3 text-sm shadow-lg md:text-base"
                      style={{ boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '0 0 6px 6px' }}
                    >
                      Jadwal bimbingan yang sudah ditentukan dapat diganti dengan syarat jadwal bimbingan baru yang
                      dipilih tersedia dan disetujui oleh pengajar.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
