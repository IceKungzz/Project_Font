import React from 'react'
import { useState, useEffect } from 'react'
import { Modal_ReturnGreen } from './Model_ReturnGreen';
import { Modal_ReturnRed } from './Model_ReturnRed';
import { Modal_ReturnYellow } from './Model_ReturnYellow';
import axios from 'axios';

export function ReturnItem() {


    const [filterReceipt, setFilterReceipt] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [dataMenuReturn, setDataMenuReturn] = useState([]);
    
    // ฟังก์ชันกรองข้อมูล
    const filteredData = dataMenuReturn.filter(item =>
        item.receip_number.toLowerCase().includes(filterReceipt.toLowerCase()) &&
        item.created_at.includes(filterDate)
    );

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
        axios.get('http://192.168.195.75:5000/v1/product/return/get-return-list', {
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "x-api-key": "1234567890abcdef",
            },
        }).then((res) => {
            if (res.status === 200) {
                setDataMenuReturn(res.data.data)
                console.log(res.data.data);
            }
        })

    }, [])




    const [showmodalGreen, setShowmodalGreen] = useState(false);
    const [selectedReceipt, setSelectedReceipt] = useState(null);
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


    const handleOpenModal = (id, modalType) => {
        setSelectedReceipt(id); // เก็บค่า id
        console.log('Selected Receipt:', id); // log ค่า
    
        // เปิด modal ตามประเภท
        if (modalType === 'green') {
            setShowmodalGreen(true);
        } else if (modalType === 'red') {
            setShowmodalRed(true);
        } else if (modalType === 'yellow') {
            setShowmodalYellow(true);
        }
    
        // เรียก API ด้วย id
        const token = localStorage.getItem('token');
        axios
            .get(`http://192.168.195.75:5000/v1/product/return/return/${id}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json",
                    "x-api-key": "1234567890abcdef",
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data.data); // แสดงข้อมูลที่ได้
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error); // จัดการข้อผิดพลาด
            });
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
                <span><input type='text' className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
                    value={filterReceipt}
                    onChange={(e) => setFilterReceipt(e.target.value)}
                // placeholder="ค้นหาใบเสร็จ"
                /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-sky-800'>วันที่ทำรายการ :</span>
                <span><input type='date' className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                /></span>
                <span className='pr-2 pl-5 font-bold text-xl text-white'>
                    <button className='bg-blue-500 h-10 w-28 rounded-md hover:bg-blue-600'>ค้นหา</button>
                </span>

            </div>



            <div className='row-span-11 overflow-auto no-scrollbar '>


                <table className="table-auto w-full border-collapse ">
                    <thead className='bg-blue-200 border-l-2  h-14 text-sky-800 text-xl sticky top-0 rounded-lg '>
                        <tr>
                            <th className=" px-4 border-l-2  py-2">ลำดับ</th>
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
                        {filteredData.map((items, index) => (
                            <tr key={index} className='  border-2'>
                                <td className="text-center border-l-2 px-4 py-2 ">{index + 1}</td>
                                <td className="text-center border-l-2 px-4 py-2 ">{items.branch_name}</td>
                                <td className="text-center border-l-2 px-4 py-2">{items.receip_number}</td>
                                <td className="text-center border-l-2 px-4 py-2">{items.created_at}</td>
                                <td className="text-start border-l-2 px-4 py-2">{items.customer_name}</td>
                                <td className="text-center border-l-2 px-4 py-2">{items.type}</td>
                                <td className={`text-center border-l-2 px-4 py-2 
                                        ${items.status === 'late' ? 'text-red-500' : 'text-green-500'}`}>
                                    {items.status === 'late' ? 'เลยกำหนดส่งคืน' : 'รอส่งคืน'}
                                </td>
                                <td className="text-center w-[20%] py-2 border-l-2 border-r-2">
                                    {items.status === 'late' ? (
                                        <button className="bg-red-500   pt-2 pb-2 w-24 rounded-lg text-white  "
                                        onClick={() => handleOpenModal(items.id, 'red')}
                                        >เลยกำหนด</button>
                                    ) : items.status === 'hire' ? (
                                        <>
                                            <button className="bg-green-500 pt-2 pb-2 w-24 mx-3 rounded-lg text-white  "
                                               onClick={() => handleOpenModal(items.id, 'green')}
                                            >ส่งคืน</button>
                                            <button className="bg-yellow-300 pt-2 pb-2 w-24 mx-3 rounded-lg  "
                                                onClick={() => handleOpenModal(items.id, 'yellow')}
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
