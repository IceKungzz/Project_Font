import React from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from 'react'
import axios from 'axios'

const MySwal = withReactContent(Swal);


export function Inbound() {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const token = localStorage.getItem('token')
        axios.get('http://192.168.195.75:5000/v1/product/inbound/show-branch',{
          headers: {
                "Authorization": token, 
                "Content-Type": "application/json",
                "x-api-key": "1234567890abcdef",
              },
        }).then((res) =>{
          if(res.status ===200){
            setProducts(res.data.data) 
            console.log(res.data.data);
          }
          
        })



      },[])
    const [inputValue, setInputValue] = useState('');

    // ฟังก์ชันสำหรับการอัปเดตค่าใน input
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    // ฟังก์ชันที่ทำงานเมื่อกดปุ่ม
    const handleButtonClick = () => {
      console.log(inputValue); // พิมพ์ค่าที่ได้จาก input
    };
  


    const handleOpenModal = () => {
        MySwal.fire({
            title: "นำเข้าสินค้า",
            html: (
                <div className="pl-5 pb-5 pr-5">
                    <div className="pt-5 pb-5 rounded-xl border-2 border-spacing border-indigo-700">
                        <div className="grid grid-cols-2 mr-28">
                            <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                <span className="col-span-1 grid justify-end items-center pr-2 text-black">รหัสสินค้า:</span>
                                <span className="col-span-2 relative">
                                    <input
                                        type="text"
                                        className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                        value={inputValue}
                                        onChange={handleInputChange}
                                    />
                                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                        <i className="fa fa-times"></i>
                                    </span>
                                </span>
                            </span>
                            <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                <span className="col-span-1 grid justify-end items-center pr-2 text-black">ชื่อสินค้า:</span>
                                <span className="col-span-2 relative">
                                    <input
                                        type="text"
                                        className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                        
                                    />
                                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                        <i className="fa fa-times"></i>
                                    </span>
                                </span>
                            </span>
                            <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                <span className="col-span-1 grid justify-end items-center pr-2 text-black">ขนาดสินค้า:</span>
                                <span className="col-span-2 relative">
                                    <input
                                        type="text"
                                        className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                        
                                    />
                                    <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                        <i className="fa fa-times"></i>
                                    </span>
                                </span>
                            </span>
                            <span className="col-span-1 flex items-center">
                                <div className="flex justify-end items-center w-[60%]">
                                    <p className="pr-2 text-black">เมตร:</p>
                                    <input
                                        type="text"
                                        className="w-[43%] h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                       
                                    />
                                </div>
                                <div className="flex justify-end items-center w-[40%]">
                                    <p className="pr-2 text-black">เซนติเมตร:</p>
                                    <input
                                        type="text"
                                        className="w-[50%] h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                       
                                    />
                                </div>
                            </span>
                            
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">ราคาเช่า 3 วัน:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"

                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">ราคาเช่า 30 วัน:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                     
                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">ราคาขาย:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                     
                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">ราคาค่าปรับ:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                     
                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">หน่วย:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                     
                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                                <span className="col-span-1 grid grid-cols-3 justify-center items-center pt-5 pb-5">
                                    <span className="col-span-1 grid justify-end items-center pr-2 text-black">หมายเหตุ:</span>
                                    <span className="col-span-2 relative">
                                        <input
                                            type="text"
                                            className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                     
                                        />
                                        <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                                            <i className="fa fa-times"></i>
                                        </span>
                                    </span>
                                </span>
                            
                        </div>
                    </div>
                    <div className="pt-10 row-span-1 col-span-2">
                        <button
                            className="bg-[#31AB31] text-white rounded-md px-4 py-2"
                            onClick={() => {
                                handleButtonClick();
                                MySwal.close(); // ปิด modal
                            }}
                        >
                            ยืนยัน
                        </button>
                    </div>
                </div>
            ),
            showConfirmButton: false,
            customClass: {
                popup: "rounded-lg w-[60%] h-[100%]  relative",
                title: 'font-bold text-[#133E87]'
            },
            didOpen: () => {
                const closeButton = document.createElement("span");
                closeButton.innerHTML = "X";
                closeButton.classList.add("absolute", "top-4", "right-6", "text-2xl", "cursor-pointer");
                closeButton.addEventListener("click", () => {
                    MySwal.close();
                });
                document.querySelector(".swal2-popup").appendChild(closeButton);
            },
        });
    };

    return (
        <div className='w-full h-[90%]  mt-5'>

            <div className='w-full h-[100%] grid grid-cols-5  overflow-auto no-scrollbar '>

                <div className=" col-span-2  grid grid-rows-6 ">

                    <div className='row-span-4  items-center text-base ' >

                        <div className='grid justify-end items-center grid-cols-4 '>
                            <span className="col-span-1 grid justify-end pr-2">
                                สาขา:
                            </span>
                            <select name="" id="" className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500" >
                                <option value="">ชลบุรี</option>
                                <option value="">ระยอง</option>
                            </select>
                        </div>
                        <div className='grid justify-end items-center grid-cols-4 pt-10 '>
                            <span className="col-span-1 grid justify-end  pr-2">
                                วันที่นำเข้าสินค้า:
                            </span>
                            <input
                                type="date"
                                className=" col-span-3 w-[80%] h-10 rounded-lg border border-gray-500 pr-2 pl-2"
                            />
                        </div>
                        <div className='grid justify-end items-center grid-cols-4 pt-10 '>
                            <span className='col-span-1'></span>
                            <span className="col-span-2 flex justify-start  pr-2  text-sky-800 text-xl font-bold">
                                นำเข้าสินค้า
                            </span>

                        </div>


                        <div className='grid grid-cols-8 pt-10 '>
                            <span className='col-span-2 '></span>
                            <button className="col-span-3  w-[80%] bg-[#31AB31] h-10 rounded-md text-white" onClick={handleOpenModal}>
                                <i className="fa-solid fa-plus mr-2 "></i>เพิ่มสินค้า
                            </button>
                        </div>

                    </div>

                </div>

                <div className=" col-span-3 grid grid-rows-6  ">

                    <div className='row-span-5 grid grid-rows-12 border border-gray-500  rounded-lg '>

                        <div className='row-span-1 grid grid-cols-3 pl-4 pr-4 pt-1 '>
                            <span className='col-span-1  grid justify-start items-center '>ห้างหุ้นส่วนจำกัด ภัทรชัย แบบเหล็ก</span>
                            <span className='col-span-1 row-span-2  grid justify-center  items-center text-xl font-bold'>รายการนำเข้าสินค้า</span>
                            <span className='col-span-1 '></span>
                            <span className='col-span-1  grid justify-start items-center '>สาขา: ชลบุรี</span>
                            <span className='col-span-1  grid justify-end items-center '>12 ธันวาคม 2567</span>
                        </div>

                        <div className='row-span-10  grid grid-rows-3 pt-3'>
                            <div className=' row-span-3 overflow-auto  no-scrollbar border-b-4 flex justify-center items-start mr-3 ml-3'>
                                <table className="w-full table-auto text-center border-collapse border-t-2">
                                    <thead className="font-bold  bg-white sticky top-0 border-b-2">
                                        <tr>
                                            <th className="px-4 py-2">ลำดับ</th>
                                            <th className="px-4 py-2">รายการ</th>
                                            <th className="px-4 py-2">ขนาด</th>
                                            <th className="px-4 py-2">จำนวน</th>
                                            <th className="px-4 py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b-2">
                                            <td className="px-4 py-2">1</td>
                                            <td className="px-4 py-2">M04 แบบเสาสี่เหลี่ยม</td>
                                            <td className="px-4 py-2">100*100</td>
                                            <td className="px-4 py-2  ">
                                                <input type="number" className="px-2 py-2 text-center  border w-[30%] rounded-lg border-gray-500" />
                                            </td>
                                            <td className="px-6 py-2  ">
                                                <i className="fa-solid fa-trash text-red-600 text-xl "></i>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-2">2</td>
                                            <td className="px-4 py-2">D10 แบบคาน</td>
                                            <td className="px-4 py-2">10*100</td>
                                            <td className="px-4 py-2">
                                                <input type="number" className="px-2 py-2 text-center border w-[30%] rounded-lg border-gray-500" />
                                            </td>
                                            <td className="px-6 py-2  ">
                                                <i className="fa-solid fa-trash text-red-600 text-xl "></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='row-span-1 grid grid-cols-6   justify-start items-center'>
                            <span className="col-span-3  grid grid-cols-5  p-1">
                                <span className='col-span-3 grid justify-end'>
                                    รวมรายการสินค้าที่นำเข้าทั้งหมด
                                </span>
                                <span className='col-span-1 grid justify-center'>
                                    1
                                </span>
                                <span className='col-span-1 grid justify-start'>
                                    รายการ
                                </span>
                            </span>
                            <span className="col-span-3  grid grid-cols-4  ">
                                <span className='col-span-1 '></span>
                                <span className='col-span-1 grid justify-end p-1'>จำนวน</span>
                                <span className='col-span-1 grid justify-center p-1'>120</span>
                                <span className='col-span-1 grid justify-start p-1'> ชิ้น</span>
                            </span>
                        </div>
                    </div>

                    <div className='row-span-1 grid grid-rows-1 '>

                        <div className=" row-span-1  items-center justify-center grid grid-cols-2 text-white">
                            <span className='col-span-1 flex  justify-end pr-2'>
                                <button className=" bg-[#133E87] w-2/6 p-2 rounded-md"><i className="fa-solid fa-floppy-disk mr-2"></i>บันทึกรายการ</button>
                            </span>
                            <span className='col-span-1 flex  justify-start pl-2'>
                                <button className="bg-[#A62628] w-2/6 p-2 rounded-md"><i className="fa-solid fa-x mr-2"></i>ลบรายการ</button>
                            </span>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
