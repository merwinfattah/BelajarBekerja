import React from 'react';
import SignInLayout from '../layouts/SignInLayout';
import InputBox from '../components/text-boxs/InputBox';
import ButtonLarge from '../components/buttons/ButtonLarge';
import {AiOutlineEye} from 'react-icons/ai';




const SignUpPage: React.FC = () => {
    
    const [password, setPassword] = React.useState('');
    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const charNumberChecker = (password: string) => {
        return password.length >= 8 ? true : false;
    }

    const upperCaseChecker = (password: string) => {
        return /[A-Z]/.test(password) ? true : false;
    }

    const lowerCaseChecker = (password: string) => {
        return /[a-z]/.test(password) ? true : false;
    }

    const numberChecker = (password: string) => {
        return /[0-9]/.test(password) ? true : false;
    }

    const speciaLCharacterChecker = (password: string) => {
        return /[!@#$%^&*]/.test(password) ? true : false;
    }

    const [passwordShown, setPasswordShown] = React.useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    }
    const [passwordShown2, setPasswordShown2] = React.useState(false);
    const togglePasswordVisibility2 = () => {
        setPasswordShown2(passwordShown2 ? false : true);
    }
    const [passwordShown3, setPasswordShown3] = React.useState(false);
    const togglePasswordVisibility3 = () => {
        setPasswordShown3(passwordShown3 ? false : true);
    }
    
    

    return (
        <React.Fragment>
            <SignInLayout>
                <section className='mt-[74px]'>
                <h1 className='text-center text-[32px] font-semibold mb-[16px]'>Buat Akun</h1>
                <form className='flex flex-col gap-[24px] mb-[32px]'>
                        <div className='flex justify-between items-center'>
                            <label>Nama</label>
                            <div>
                                <InputBox  placeholder='e.g. Christine Palmer'  width='w-[512px]' id='Nama'/>
                                <p className=' text-xs text-c5'>Input text helper</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label>E-mail</label>
                            <div>
                                <InputBox  placeholder='e.g. christine.palmer@gmail.com'  width='w-[512px]' id='E-mail'/>
                                <p className=' text-xs text-c5'>Input text helper</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label>Password</label>
                            <div>
                                <div className='flex items-center  box-border w-[512px] h-12 bg-c2 rounded-[10px] border-2 border-c5 border-solid py-3 px-5 gap-[5px]'>
                                        <input placeholder='Password' type={passwordShown? 'text': 'password'} id='Password' className='outline-none w-[98%]' onChange={passwordChange} value={password} />
                                        <div onClick={togglePasswordVisibility} className='hover:cursor-pointer'>
                                            <AiOutlineEye className='text-xl font-bold text-[#383838]'/>
                                        </div>
                                </div>
                                <p className=' text-xs text-c5'>Input text helper</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2' >
                            <div className='flex justify-end gap-2 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-[16px] h-[16px] rounded-full ${charNumberChecker(password)? 'bg-[#A0AEDD]':'bg-c5'}`}>
                                    </div>
                                    <p className={`text-xs ${charNumberChecker(password)? 'text-[#A0AEDD]':'text-c5'}`}>min. 8 karakter</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-[16px] h-[16px] rounded-full ${lowerCaseChecker(password)? 'bg-[#A0AEDD]':'bg-c5'}`}>
                                    </div>
                                    <p className={`text-xs ${lowerCaseChecker(password)? 'text-[#A0AEDD]':'text-c5'}`}>huruf kecil</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-[16px] h-[16px] rounded-full ${upperCaseChecker(password)? 'bg-[#A0AEDD]':'bg-c5'}`}>
                                    </div>
                                    <p className={`text-xs ${upperCaseChecker(password)? 'text-[#A0AEDD]':'text-c5'}`}>huruf kapital</p>
                                </div>

                            </div>
                            <div className='flex justify-end gap-2 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-[16px] h-[16px] rounded-full ${numberChecker(password)? 'bg-[#A0AEDD]':'bg-c5'}`}>
                                    </div>
                                    <p className={`text-xs ${numberChecker(password)? 'text-[#A0AEDD]':'text-c5'}`}>angka</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-[16px] h-[16px] rounded-full ${speciaLCharacterChecker(password)? 'bg-[#A0AEDD]':'bg-c5'}`}>
                                    </div>
                                    <p className={`text-xs ${speciaLCharacterChecker(password)? 'text-[#A0AEDD]':'text-c5'}`}>karakter unik</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label>Konfirmasi Password</label>
                            <div>
                                <div className='flex items-center  box-border w-[512px] h-12 bg-c2 rounded-[10px] border-2 border-c5 border-solid py-3 px-5 gap-[5px]'>
                                        <input placeholder='Password' type={passwordShown2? 'text': 'password'} id='Konfirmasi Password' className='outline-none w-[98%]' />
                                        <div onClick={togglePasswordVisibility2} className='hover:cursor-pointer'>
                                            <AiOutlineEye className='text-xl font-bold text-[#383838]'/>
                                        </div>
                                </div>
                                <p className=' text-xs text-c5'>Input text helper</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label>Nomor HP Aktif</label>
                            <div>
                                <div className='flex items-center  box-border w-[512px] h-12 bg-c2 rounded-[10px] border-2 border-c5 border-solid py-3 px-5 gap-[5px]'>
                                        <input placeholder='Password' type={passwordShown3? 'text': 'password'} id='Nomor HP Aktif' className='outline-none w-[98%]' />
                                        <div onClick={togglePasswordVisibility3} className='hover:cursor-pointer'>
                                            <AiOutlineEye className='text-xl font-bold text-[#383838]'/>
                                        </div>
                                </div>
                                <p className=' text-xs text-c5'>Input text helper</p>
                            </div>
                        </div>
                        <div>
                            <ButtonLarge width={719} text='Buat Akun' textColor='text-c2' color='bg-c1' border='border-2' borderColor='border-[#218FED]' type='submit' />
                        </div>
                        <div className='flex items-center gap-2'>
                            <hr className=' w-[48%]'/>
                            <span >atau</span>
                            <hr className=' w-[48%]'/>
                        </div>
                        <div>
                            <ButtonLarge width={719} text='Lanjut dengan Google' textColor='text-c1' color='bg-c2' border='border-2' borderColor='border-[#218FED]' type='button'/>
                        </div>
                        <p className='text-center'>Sudah punya akun? <a href='?' className='text-c1'>Silakan masuk</a></p>
                </form>
                <p className='text-xs text-center'>Dengan masuk dan/atau mendaftar di BelajarBekerja, kamu sudah menyetujui <a href='?' className='text-c1 underline'>syarat dan ketentuan</a> serta <a href='?' className='text-c1 underline'>kebijakan privasi kami.</a></p>
                </section>
            </SignInLayout>
        </React.Fragment>
    )
}

export default SignUpPage;