import React, { useState } from 'react';
import InputBox from '../components/text-boxs/InputBox';
import SignInLayout from '../layouts/SignInLayout';
import {AiOutlineEye} from 'react-icons/ai';
import ButtonLarge from '../components/buttons/ButtonLarge';

const SignInPage : React.FC = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    }



    return (
        <React.Fragment>
            <SignInLayout>
                    <section className='flex flex-col justify-center mt-[144px]' >
                        <h1 className='text-center text-[32px] font-semibold mb-[48px]'>Masuk</h1>
                        <form className=' grid grid-cols-1 gap-[24px] w-[719px]'>
                            <div className='flex justify-between items-center'>
                                <label>E-mail</label>
                                <InputBox  placeholder='e.g. katnees.everdeen@gmail.com'  width='w-[512px]' id='E-mail'/>
                            </div>
                            <div className='flex justify-between items-center'>
                                <label>Password</label>
                                <div className='flex items-center  box-border w-[512px] h-12 bg-c2 rounded-[10px] border-2 border-c5 border-solid py-3 px-5 gap-[5px]'>
                                    <input placeholder='Password' type={passwordShown? 'text': 'password'} id='Password' className='outline-none w-[98%]' />
                                    <div onClick={togglePasswordVisibility} className='hover:cursor-pointer'>
                                        <AiOutlineEye className='text-xl font-bold text-[#383838]'/>
                                    </div>
                                </div>
                            </div>
                            <div className=' flex justify-between'>
                                <div className='flex items-center gap-3'>
                                    <input className=' w-[24px] h-[24px] border-3 rounded-sm border-solid border-c1 px-[1px]  ' type='checkbox'>
                                    </input>
                                    <p>Ingat saya</p>
                                </div>
                                <a href='?' className='text-c1 font-[500] '>Lupa password?</a>

                            </div>
                            <div>
                                <ButtonLarge width={719} text='Masuk' textColor='text-c2' color='bg-c1'  type='submit'/>
                            </div>
                            <div className='flex items-center gap-2'>
                                <hr className=' w-[48%]'/>
                                <span >atau</span>
                                <hr className=' w-[48%]'/>
                            </div>
                            <div>
                                <ButtonLarge width={719} text='Masuk dengan Google' textColor='text-c1' color='bg-c2' border='border-2' borderColor='border-[#218FED]' type='button'/>
                            </div>
                            <p className='text-center'>Belum punya akun BelajarBekerja?<a href='?' className='text-c1'>Buat akun sekarang!</a></p>
                            <p className='text-xs text-center relative top-[160px]'>Dengan masuk dan/atau mendaftar di BelajarBekerja, kamu sudah menyetujui <a href='?' className='text-c1 underline'>syarat dan ketentuan</a> serta <a href='?' className='text-c1 underline'>kebijakan privasi kami.</a></p>
                        </form>
                    </section>
            </SignInLayout>
        </React.Fragment>
    )
}

export default SignInPage;