import React from 'react'
import { useState } from 'react'
import { Modal_ReturnGreen } from './Model_ReturnGreen';
import { Modal_ReturnRed } from './Model_ReturnRed';
import { Modal_ReturnYellow } from './Model_ReturnYellow';

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

            <div className='row-span-1   flex justify-start items-center pl-5'>
                <span className='pr-2 font-bold text-xl text-indigo-800'>สาขา :</span>
                <span>
                    <select
                        className="h-10 w-[220px] rounded-md border border-gray-500 p-2 "
                    >
                        <option value="">ทั้งหมด</option>
                        <option value="chonburi">ชลบุรี</option>
                        <option value="naphawong">นพวงศ์</option>
                        <option value="kokkham">โคกขาม</option>
                    </select>
                </span>
                <span className='pr-2 pl-5 font-bold text-xl text-indigo-800'>เลขที่ใบเสร็จ :</span>
                <span><input type='text' className="h-10 w-[220px] rounded-md border border-gray-500 p-2" /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-indigo-800'>วันที่ทำรายการ :</span>
                <span><input type='date' className="h-10 w-[220px] rounded-md border border-gray-500 p-2" /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-white'>
                    <button className='bg-blue-500 h-10 w-28 rounded-md hover:bg-blue-600'>ค้นหา</button>
                </span>

            </div>



            <div className='row-span-11 overflow-auto no-scrollbar mt-2'>

                <div className="">
                    <table className="table-auto w-full border-collapse ">
                        <thead className='bg-slate-200  border-indigo-800 h-14 text-indigo-800 text-xl sticky top-0 rounded-lg '>
                            <tr className='' >
                                <th className=" px-4  py-2">สาขา</th>
                                <th className=" px-4  py-2">เลขที่ใบเสร็จ</th>
                                <th className=" px-4  py-2">วันที่ทำรายการ</th>
                                <th className=" px-4  py-2">นามลูกค้า/ชื่อบริษัท</th>
                                <th className=" px-4  py-2">รูปแบบ</th>
                                <th className=" px-4  py-2">สถานะ</th>
                                <th className=" px-4  py-2">เพิ่มเติม</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataMenuReturn.map((items, index) => (
                                <tr key={index} className='border-b-2 border-indigo-800'>
                                    <td className="text-center px-4 py-2 ">{items.branch}</td>
                                    <td className="text-center px-4 py-2">{items.receipt}</td>
                                    <td className="text-center px-4 py-2">{items.date}</td>
                                    <td className="text-start  px-4 py-2">{items.name}</td>
                                    <td className="text-center px-4 py-2">{items.type}</td>
                                    <td className={`text-center px-4 py-2 
                                        ${items.status === 'A' ? 'text-red-500' : 'text-green-500'}`}>
                                        {items.status === 'A' ? 'เลยกำหนดส่งคืน' : 'รอส่งคืน'}
                                    </td>
                                    <td className="text-center w-[20%] py-2 ">
                                        {items.status === 'A' ? (
                                            <button className="bg-red-500  pt-2 pb-2 pl-10 pr-10 rounded-lg text-white border-2 border-gray-500"
                                                onClick={() => setShowmodalRed(true)}
                                            >เลยกำหนด</button>
                                        ) : items.status === 'B' ? (
                                            <>
                                                <button className="bg-green-500 pt-2 pb-2 pl-10 pr-10 mx-3 rounded-lg text-white border-2 border-gray-500"
                                                    onClick={() => setShowmodalGreen(true)}
                                                >ส่งคืน</button>
                                                <button className="bg-yellow-300 pt-2 pb-2 pl-10 pr-10 mx-3 rounded-lg border-2 border-gray-500"
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

        </div>


    )
}
