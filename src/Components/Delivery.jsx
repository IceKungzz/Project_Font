import React from 'react'
import { Get_DateTime } from './Layout_Components/Datetimeshow'
import { useState,useEffect } from 'react'


export default function Delivery() {
    
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
        <>
            {datetime}
        </>
    )
}
