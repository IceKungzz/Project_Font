import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Layout_Components/Sidebar';
import {Get_DateTime} from './Components/Layout_Components/Datetimeshow'
import { useState,useEffect } from 'react'

function App() {
 
  const [datetime, setDatetime] = useState('')

    useEffect(() =>{
        const currentDateTime = Get_DateTime();
        setDatetime(currentDateTime);
        
        const interval = setInterval(() =>{
            const currentDateTime = Get_DateTime();
            setDatetime(currentDateTime);
        },1000)

        return () => clearInterval(interval)
    },[])

  return (
    <div className="flex h-screen font-inria">
      <div className=" h-full w-1/6">
        <Sidebar/>
      </div>
      <main className='flex-grow shadow-[-5px_0px_3px_0px_rgba(0,0,0,0.200)] mt-4 mr-4 mb-4 border rounded-xl p-2'>
        <div className=" p-2 border-b-2 border-[#608BC1] flex justify-between items-center text-[#608BC1] mb-2">
            <div className="text-xl">หน้าแรก</div>
            <div className="text-sm">{datetime}</div>
        </div>
        <Outlet/>
      </main>

    </div>
  );
}

export default App;
