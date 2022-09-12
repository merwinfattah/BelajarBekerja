import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import AnimationLandingPage from '../assets/LandingPage.svg';
import ButtonLarge from '../components/buttons/ButtonLarge';
import Fitur1 from '../assets/Fitur1.svg';
import Fitur2 from '../assets/Fitur2.svg';
import Fitur3 from '../assets/Fitur3.svg';
import Fitur4 from '../assets/Fitur4.svg';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import {AiFillCheckCircle} from 'react-icons/ai';
import CardMentor from '../components/cards/CardMentor';
import CardWebinar from '../components/cards/CardWebinar';
import CardLive from './../components/cards/CardLive';
import CardTestimoni from '../components/cards/CardTestimoni';
import InputBox from '../components/text-boxs/InputBox';
import ButtonMedium from './../components/buttons/ButtonMedium';


const LandingPage = () => {
    return (
        <React.Fragment>
            <header>
                <Navbar isLogin={false}/>
            </header>
            <main className=' font-poppins'>
                <section className=' w-full h-[772px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(${AnimationLandingPage})`}}>
                    <article className='relative top-72 left-40  text-c2 font-bold max-w-[559px]'>
                        <h1 className=' text-5xl '>Belajar Skill Baru Langsung Dari Ahlinya</h1>
                        <p className=' font-[400] my-14'>
                        Dari kursus berkualitas hingga sesi mentoring privat, Belajar Bekerja
                        siap bantu kamu raih karir impian!
                        </p>
                        <ButtonLarge width={154} text='Mulai Belajar' />
                    </article>
                </section>
                <section className=' mt-[85px] mb-[133px] flex flex-col gap-[74px]'>
                    <article>
                        <h2 className=' text-center text-[32px] font-bold'>#<span className=' text-c1'>Belajar</span><span className=' text-c9'>Bekerja</span> Solusi Kebutuhan Karir Kamu</h2>
                        <p className=' text-center text-xl font-[400]'>Tidak hanya kursus berkualitas, kamu juga bisa konsultasi karir dengan para ahli di sini.</p>
                    </article>
                    <section className=' flex gap-8  justify-center'>
                        <article className='flex flex-col gap-[17px] w-[287px] h-[312px]'>
                            <img src={Fitur1} alt='Fitur 1' className=' w-[170px] h-[158px]' />
                            <h3 className=' text-xl font-bold'>Belajar di mana saja</h3>
                            <p className=' text-xl font-[400]'>Tempat paling nyaman untuk belajar sepenuhnya kamu yang tentukan.</p>
                        </article>
                        <article className='flex flex-col gap-[17px] w-[287px] h-[312px]'>
                            <img src={Fitur2} alt='Fitur 1' className=' w-[170px] h-[159px]' />
                            <h3 className=' text-xl font-bold'>On demand learning</h3>
                            <p className=' text-xl font-[400]'>Kami memprioritaskan waktu belajar kamu yang sangat fleksibel.</p>
                        </article>
                        <article className='flex flex-col gap-[17px] w-[287px] h-[312px]'>
                            <img src={Fitur3} alt='Fitur 1' className=' w-[173px] h-[160px]' />
                            <h3 className=' text-xl font-bold'>Pilih jadwal sendiri</h3>
                            <p className=' text-xl font-[400]'>Konsultasikan karir kamu dengan mentor kami kapan pun kamu mau.</p>
                        </article>
                        <article className='flex flex-col gap-[17px] w-[287px] h-[312px]'>
                            <img src={Fitur4} alt='Fitur 1' className=' w-[170px] h-[158px]' />
                            <h3 className=' text-xl font-bold'>Sertifikat</h3>
                            <p className=' text-xl font-[400]'>Apresiasi bahwa kamu sudah mempelajari skill baru di Belajar Bekerja!</p>
                        </article>

                    </section>
                </section>
                <section className='flex flex-col gap-[60px] mb-[76px]'>
                    <h2 className='text-[32px] font-bold ml-[130px]'>Semua Kursus di <span className=' text-c1'>Belajar</span> <span className='text-c9'>Bekerja</span></h2>
                    <article className=' bg-c5 w-[986px] h-[108px] rounded-[100px] mx-auto py-[32px] items-center justify-center px[24px] flex gap-[32px]'>
                        <div className=' w-[32px] h-[32px] bg-[#FAFAFA] rounded-full p-[8px] hover:cursor-pointer'>
                            <IoIosArrowBack className='  text-[#323232]  '/>
                        </div>
                        <article className=' flex gap-[16px]'>
                            <div className=' w-[143px] h-[44px] bg-c2 rounded-[10px] text-[#A0AEDD] hover:bg-c1  hover:text-c2 p-[10px] '>
                                Design & UI/UX
                            </div>
                            <div className=' w-[163px] h-[44px] bg-c2 rounded-[10px] text-[#A0AEDD] hover:bg-c1  hover:text-c2 p-[10px]'>
                                Digital Marekting
                            </div>
                            <div className=' w-[136px] h-[44px] bg-c2 rounded-[10px] text-[#A0AEDD] hover:bg-c1  hover:text-c2 p-[10px]'>
                                Programming
                            </div>
                            <div className=' w-[142px] h-[44px] bg-c2 rounded-[10px] text-[#A0AEDD] hover:bg-c1  hover:text-c2 p-[10px]'>
                                Data Analytics
                            </div>
                            <div className=' w-[162px] h-[44px] bg-c2 rounded-[10px] text-[#A0AEDD] hover:bg-c1  hover:text-c2 p-[10px]'>
                                Human Resource
                            </div>
                        </article>
                        <div className=' w-[32px] h-[32px] bg-[#FAFAFA] rounded-full p-[8px] hover:cursor-pointer'>
                            <IoIosArrowForward  className=' text-[#323232] '/>
                        </div>
                    </article>
                </section>
                <section className=' container flex flex-col gap-[36px] mx-auto mb-[86px]'>
                    <a href='etc' className='text-right text-c1 font-semibold'>Lihat lainnya</a>
                    <article className='flex justify-center gap-[20px]'>
                        <CardMentor name='John Doe' role='UI/UX' workplace='Gojek' title='UI/UX Designer' price='Rp. 250.000' />
                        <CardWebinar name='Erik Sandino' role='Front End Developer' workplace='Flip' title='Membuat Web Portfolio dengan PHP Codeigniter' price='Free' date='5 April 2022' /> 
                        <CardMentor name='John Doe' role='UI/UX' workplace='Gojek' title='UI/UX Designer' price='Rp. 250.000' />
                        <CardWebinar name='Erik Sandino' role='Front End Developer' workplace='Flip' title='Membuat Web Portfolio dengan PHP Codeigniter' price='Free' date='5 April 2022' /> 
                    </article>
                </section>
                <section className='justify-center flex gap-[160px] mb-[104px] text-[#383838] text-2xl'>
                    <article className=' w-[238px]'>
                        <h2 className=' text-[32px] mb-[16px]'>5000+</h2>
                        <p>Kursus & Kelas Monitoring</p>
                    </article>
                    <article className=' w-[238px]'>
                        <h2 className=' text-[32px] mb-[16px]'>20+</h2>
                        <p>Profesional Bersertifikasi</p>
                    </article>
                    <article className=' w-[238px]'>
                        <h2 className=' text-[32px] mb-[16px]'>250+</h2>
                        <p>Mentor Berkualitas</p>
                    </article>

                </section>
                <section className=' mb-[188px]'>
                    <h2 className=' text-center font-bold text-[32px] text-[#383838]'>Webinar Saat Ini</h2>
                    <article className=' flex gap-[20px] justify-center mt-[24px]'>
                        <CardLive mentor='John Doe' role='Product Lead' workplace='Gojek' category='Category, Scope' date='12 Juli 2022' time='14.00' isLive={false}/>
                        <CardLive mentor='John Doe' role='Product Lead' workplace='Gojek' category='Category, Scope' date='12 Juli 2022' time='14.00' isLive={true}/>
                        <CardLive mentor='John Doe' role='Product Lead' workplace='Gojek' category='Category, Scope' date='12 Juli 2022' time='14.00' isLive={false}/>
                        <CardLive mentor='John Doe' role='Product Lead' workplace='Gojek' category='Category, Scope' date='12 Juli 2022' time='14.00' isLive={true}/>
                    </article>
                </section>
                <section className=' bg-[#F9FAFB] w-full h-[532px] mb-[108px] pt-[56px] pl-[96px] pr-[90px] pb-[103px]'>
                    <article className='flex justify-between'>
                        <h2 className=' text-[32px] font-semibold text-[#383838]'>Apa Kata Mereka?</h2>
                        <p className=' text-sm font-[400] w-[349.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim mattis netus felis phasellus nisi.</p>
                    </article>
                    <article className=' mt-[80px] flex gap-[69px] justify-center'>
                        <CardTestimoni name='Chase Kohl' role='Product Manager' workplace='Gojek' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim id nisi lobortis facilisis dolor adipiscing lacus purus luctus.' />
                        <CardTestimoni name='Chase Kohl' role='Front End Developer' workplace='Gojek' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim id nisi lobortis facilisis dolor adipiscing lacus purus luctus.' />
                        <CardTestimoni name='Chase Kohl' role='Product Manager' workplace='Gojek' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim id nisi lobortis facilisis dolor adipiscing lacus purus luctus.' />
                    </article>
                </section>
                <section className='w-full h-[404px] bg-[#EE6D2D] mb-[76px]  p-[16px] text-c2'>
                    <h2 className=' font-bold text-[32px] mb-[24px] text-center'>Menjadi Mentor di Belajar Bekerja</h2>
                    <p className='container mx-auto font-[400] mb-[24px] text-center w-[484px] '>Pengalaman kerja kamu adalah inspirasi bagi semua orang. Gabung sebagai Mentor kami dan dapatkan benefit</p>
                    <article className=' container mx-auto flex flex-col gap-[24px] w-[266px] h-[120px] text-sm'>
                        <div className=' flex items-center gap-[16px]'>
                            <AiFillCheckCircle className='text-lg text-[#6FCF97]' />
                            <p>Pengalaman ekslusif mengajar</p>
                        </div>
                        <div className='flex items-center gap-[16px] '>
                            <AiFillCheckCircle className='text-lg text-[#6FCF97]'  />
                            <p>Jaringan karir yang lebih luas</p>
                        </div>
                        <div className=' flex items-center gap-[16px]'> 
                            <AiFillCheckCircle className='text-lg text-[#6FCF97]'  />
                            <p>Pemasukan ekstra</p>
                        </div>
                    </article>
                    <div className='flex justify-center mt-[24px]'>
                        <ButtonLarge width={154} text='Gabung Sebagai Mentor' color='bg-c2' radius={100} textColor='text-[#383838]' />
                    </div>

                </section>
                <section className='container mx-auto flex flex-col  justify-center w-[861px] h-[260px] mb-[93px]'>
                    <h2 className=' text-center text-[32px] text-[#383838] font-bold'>Siap jadi mentee produktif!</h2>
                    <p className='font-[400] text-[20px] text-center mt-[10px]'>Kami akan kirimkan info seputar kursus, mentoring, webinar, hingga tips dalam berkarir, ke e-mail kamu. No spam, promise!</p>
                    <div className='flex mt-[27px] justify-center'>
                        <InputBox borderColor='border-c1' placeholder='E-mail Kamu' textColor='text-c1' width='w-[400px]' id='E-mail Kamu'/>
                    </div>
                    <div className='flex mt-[27px] justify-center'>
                        <ButtonMedium width={86} text='Kirim' />
                    </div>
                    
                </section>

            </main>
            <Footer />

        </React.Fragment>
    )
}

export default LandingPage;