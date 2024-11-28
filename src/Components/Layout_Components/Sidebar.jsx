import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    

    return (
        <div className='h-screen flex flex-col'>  
            <div className="flex items-center justify-center h-1/6">
                <img src='img/SCC.png' alt='image' width={100}/>
            </div>



            <div className="flex flex-col justify-between h-full w-full mt-4">
                    <div className='flex flex-col items-end h-5/6'>   
                        <div className=" h-1/6 w-full flex items-center justify-center p-4">
                            <div className="bg-blue-500 h-full flex justify-center items-center gap-2 w-full rounded-md p-6 ">
                                
                                <div className='hidden xl:block w-10 h-10 rounded-full overflow-hidden'>
                                    <img 
                                    src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZO80itzS42aLeUYNffMhzh75BcRd0d.jpg" 
                                    alt="profile"
                                    className='w-10 h-10 object-cover hidden xl:block'
                                    />
                                </div>

                                <div className="text-sm text-black flex flex-col items-center">
                                    <span className='hidden md:block md:text-sm text-center text-white'>เมทนี สนธิกัน</span>
                                    <span className="hidden text-white text-lg xl:block">user</span>
                                </div>
                                
                            </div>
                        </div>

                        <NavLink to="/profile" className={({isActive})  => 
                        `sidebar-menu
                        ${isActive ? "bg-blue-400  pl-10" : ""}`
                        }>
                            <div>Profile</div>
                        </NavLink>



                        <NavLink to='/delivery' className={({isActive})  => 
                        `sidebar-menu
                         ${isActive ? "bg-blue-400 pl-10 " : ""}`
                        }
                        >
                            <div>Delivery</div>
                        
                        </NavLink>
                    </div>
                    

                    <div className="text-xl text-black  h-1/6 w-full flex items-center justify-center">
                        <div className="bg-blue-900 w-3/4 p-3 rounded-md text-white text-lg text-center">
                            ออกจากระบบ
                        </div>
                    </div>
            </div>

        </div>
    )
}
