import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Swal from 'sweetalert2'

const Login = () => {
    const [datauser, setDatauser] = useState({});

    const changedata = (e) => {
        setDatauser(prevdata => ({
            ...prevdata,
            [e.target.name]: e.target.value
        }));
    };

    //ข้อมูลอยู่ใน datauser เข้าถึงเหมือน object ธรรมดาเลย datauser.user || datauser.password 
    //หน้านี้เหลือ รอ api จากหลังบ้าน

    const confirm_login = () => {

            //รอส่งข้อมูลไปตรวจสอบ แล้วค่อยแสดง pop up

        Swal.fire({
            icon:"success",
            text:"Login success",
            confirmButtonText:'ตกลง'
        }).then((res) =>{
            if(res.isConfirmed){
                //สั่งให้ไปหน้าแรก
                console.log('ไปหน้าแรกของแอป');
            }else{
                Swal.fire({
                    icon:'error',
                    text:"Login Failed",
                    confirmButtonText:"ตกลง"
                })
            }
        })
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>LOGINn</title>
            </Helmet>
            <div className="font-inria bg-blue-300/60 bg-opacity-60 backdrop-blur-lg w-screen h-screen flex justify-center items-center">
                <div className="bg-white p-2 w-2/6 h-5/6 border rounded-xl">

                    <div className="p-2 flex justify-center items-center mt-3">
                        <img src='/img/logo.png' alt='logo' width={250} height={250} />
                    </div>

                    <div className='text-2xl text-[#222770] text-center mt-3'>
                        เข้าสู่ระบบ
                    </div>

                    <div className='mt-2 flex flex-col p-5 justify-center items-center'>
                        <div className="flex w-4/6 h-full flex-col">
                            <label htmlFor="user" className='text-[#222770] font-bold'>ชื่อผู้ใช้ :</label>
                            <input
                                type='text'
                                placeholder='ชื่อผู้ใช้งาน'
                                name='user'
                                id='user'
                                className='w-full p-1 outline-none border-2 border-blue-800 mt-1 rounded-lg'
                                onChange={changedata}
                            />
                        </div>

                        <div className="flex w-4/6 h-full flex-col mt-2">
                            <label htmlFor="password" className='text-[#222770] font-bold'>รหัสผ่าน :</label>
                            <input
                                type='password'
                                placeholder='รหัสผ่าน'
                                name="password"
                                id="password"
                                className='w-full p-1 outline-none border-2 border-blue-800 mt-1 rounded-lg'
                                onChange={changedata}
                            />
                        </div>
                    </div>

                    <div className=' mt-5 p-5 w-full flex justify-center items-center'>
                        <button className='bg-[#133E87] text-white w-4/6 p-2 rounded-lg' 
                        onClick={confirm_login}
                        >
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default Login;
