import React from 'react'
import { useState , useEffect } from 'react'
import { Modal_ReturnGreen } from './Model_ReturnGreen';
import { Modal_ReturnRed } from './Model_ReturnRed';
import { Modal_ReturnYellow } from './Model_ReturnYellow';
import axios from 'axios';

export function ReturnItem() {

    const dataMenuReturn = [
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },


    ];

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://192.168.195.75:5000/v1/product/inbound/show-branch', {
            
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "x-api-key": "1234567890abcdef",
            },
            
        }).then((res) => {
            if (res.status === 200) {
                setProducts(res.data.data) 
                console.log(res.data.data);
            }

        })
        
    }, [])
    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('http://192.168.195.75:5000/v1/product/return/get-return-list', {
            
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "x-api-key": "1234567890abcdef",
            },
            
        }).then((res) => {
            if (res.status === 200) {
                // setProducts(res.data.data) 
                console.log(res);
            }

        })
        
    }, [])
    

    const [showmodalGreen, setShowmodalGreen] = useState(false);
    const closeModalGreen = () => {
        setShowmodalGreen(false);
    };

    const [showmodalRed, setShowmodalRed] = useState(false);
    const closeModalRed = () => {
        setShowmodalRed(false);
    };

    const [showmodalYellow, setShowmodalYellow] = useState(false);
    const closeModalYellow = () => {
        setShowmodalYellow(false);
    };

    return (
        <div className='w-full h-[90%]  grid grid-rows-12'>

            {showmodalGreen ? (
                <Modal_ReturnGreen close={closeModalGreen} />
            ) : null}
            {showmodalRed ? (
                <Modal_ReturnRed close={closeModalRed} />
            ) : null}
            {showmodalYellow ? (
                <Modal_ReturnYellow close={closeModalYellow} />
            ) : null}

            <div className='row-span-1 '>
                <span className='pr-2 font-bold text-xl text-sky-800'>สาขา :</span>
                <span>
                    <select
                        className="h-10 w-[220px] rounded-md border border-gray-500 p-2 "
                    >
                        <option value="">{products.branch_name}</option>
                    </select>
                </span>
                <span className='pr-2 pl-5 font-bold text-xl text-sky-800'>เลขที่ใบเสร็จ :</span>
                <span><input type='text' className="h-10 w-[220px] rounded-md border border-gray-500 p-2" /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-sky-800'>วันที่ทำรายการ :</span>
                <span><input type='date' className="h-10 w-[220px] rounded-md border border-gray-500 p-2" /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-white'>
                    <button className='bg-blue-500 h-10 w-28 rounded-md hover:bg-blue-600'>ค้นหา</button>
                </span>

            </div>



            <div className='row-span-11 overflow-auto no-scrollbar '>

               
                    <table className="table-auto w-full border-collapse ">
                        <thead className='bg-blue-200 border-l-2  h-14 text-sky-800 text-xl sticky top-0 rounded-lg '>
                            <tr>
                                <th className=" px-4 border-l-2  py-2">สาขา</th>
                                <th className=" px-4 border-l-2  py-2">เลขที่ใบเสร็จ</th>
                                <th className=" px-4 border-l-2 py-2">วันที่ทำรายการ</th>
                                <th className=" px-4 border-l-2 py-2">นามลูกค้า/ชื่อบริษัท</th>
                                <th className=" px-4 border-l-2 py-2">รูปแบบ</th>
                                <th className=" px-4 border-l-2 py-2">สถานะ</th>
                                <th className=" px-4 border-l-2 py-2">เพิ่มเติม</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMenuReturn.map((items, index) => (
                                <tr key={index} className='  border-2'>
                                    
                                    <td className="text-center border-l-2 px-4 py-2 ">{items.branch}</td>
                                    <td className="text-center border-l-2 px-4 py-2">{items.receipt}</td>
                                    <td className="text-center border-l-2 px-4 py-2">{items.date}</td>
                                    <td className="text-start border-l-2 px-4 py-2">{items.name}</td>
                                    <td className="text-center border-l-2 px-4 py-2">{items.type}</td>
                                    <td className={`text-center border-l-2 px-4 py-2 
                                        ${items.status === 'A' ? 'text-red-500' : 'text-green-500'}`}>
                                        {items.status === 'A' ? 'เลยกำหนดส่งคืน' : 'รอส่งคืน'}
                                    </td>
                                    <td className="text-center w-[20%] py-2 border-l-2 border-r-2">
                                        {items.status === 'A' ? (
                                            <button className="bg-red-500   pt-2 pb-2 w-24 rounded-lg text-white  "
                                                onClick={() => setShowmodalRed(true)}
                                            >เลยกำหนด</button>
                                        ) : items.status === 'B' ? (
                                            <>
                                                <button className="bg-green-500 pt-2 pb-2 w-24 mx-3 rounded-lg text-white  "
                                                    onClick={() => setShowmodalGreen(true)}
                                                >ส่งคืน</button>
                                                <button className="bg-yellow-300 pt-2 pb-2 w-24 mx-3 rounded-lg  "
                                                    onClick={() => setShowmodalYellow(true)}
                                                >เช่าต่อ</button>
                                            </>
                                        ) : null}
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                




            </div>

        </div>


    )
}
