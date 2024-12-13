import React from 'react'

export function Inbound(props) {

    const menu = [
        { title: 'นามลูกค้า/ชื่อบริษัท:', type: "text" },
        { title: 'ชื่อไซต์งาน:', type: "text" },
        { title: 'ที่อยู่ลูกค้า:', type: "text" },
        { title: 'วันที่เริ่มเช่า-ขาย:', type: "date", },
    ];

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

                        {menu.map((item, index) => (
                            <div key={index} className='grid justify-end items-center grid-cols-4 pt-10 '>
                                <span className="col-span-1 grid justify-end  pr-2">
                                    {item.title}
                                </span>
                                <input
                                    type={item.type}
                                    className=" col-span-3 w-[80%] h-10 rounded-lg border border-gray-500 "
                                />
                            </div>
                        ))}

                        <div className='grid justify-end items-center grid-cols-4 pt-10 '>
                            <span className="col-span-1 grid justify-end pr-2 ">
                                ระยะเวลา:
                            </span>
                            <input
                                type="text"
                                className=" col-span-2 h-10 rounded-lg border border-gray-500 "
                            />
                            <span className=" col-span-1 pl-5">
                                วัน
                            </span>
                        </div>

                        <div className='grid grid-cols-8 pt-10 '>
                            <span className='col-span-2 '></span>
                            <button className="col-span-3  w-[80%] bg-[#31AB31] h-10 rounded-md">
                                <i className="fa-solid fa-plus mr-2"></i>เพิ่มสินค้า
                            </button>
                            <button className="col-span-3 w-[80%] bg-[#909090] h-10 rounded-md">
                                <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
                            </button>
                        </div>

                    </div>

                    <div className='row-span-2 grid-cols-4 grid justify-start items-end '>
                        <button className=" col-span-1 bg-[#909090] h-10 rounded-md">
                            <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
                        </button>
                    </div>

                </div>

                <div className=" col-span-3 grid grid-rows-6  ">

                    <div className='row-span-5 grid grid-rows-4 border border-gray-500  rounded-lg '>

                        <div className='row-span-1 grid grid-cols-3 grid-rows-6  pl-4 pr-4 pt-1'>
                            <span className='col-span-1  grid justify-start items-center '>ห้างหุ้นส่วนจำกัด ภัทรชัย แบบเหล็ก</span>
                            <span className='col-span-1 row-span-2  grid justify-center items-center text-xl'>รายการส่งออกสินค้า</span>
                            <span className='col-span-1 '></span>
                            <span className='col-span-1  grid justify-start items-center'>สาขา: ชลบุรี</span>
                            <span className='col-span-1  grid justify-end items-center'>12 ธันวาคม 2567</span>
                            <span className='col-span-3  grid justify-start items-center'>นามลูกค้า/ชื่อบริษัท:
                                คุณพรทิพย์</span>
                            <span className='col-span-1  grid justify-start items-center'>ชื่อไซต์งาน: โรง2</span>
                            <span className='col-span-1  grid justify-end items-center'>เริ่มเช่า: 27 พ.ย. 57</span>
                            <span className='col-span-1  grid justify-end items-center'>สิ้นสุดเช่า: 03 ธ.ค.67</span>
                            <span className='col-span-2 row-span-2 grid grid-cols-7'>
                                <span className='col-span-1'>ที่อยู่ลูกค้า:</span>
                                <span className='col-span-6'>บริษัท 123 จำกัด เลขที่ 22/11 หมู่ 1 ถนนลาดยาว ตำบลสองเสน อำเภอศรีราชา จังหวัดชลบุรี</span>
                            </span>
                            <span className='col-span-1  grid justify-end items-center'>ระยะเวลาเช่า: 7 วัน</span>
                        </div>

                        <div className='row-span-3  grid grid-rows-3'>
                            <div className=' row-span-3 overflow-auto  no-scrollbar border-b-4 flex justify-center items-start mr-3 ml-3'>
                                <table className="w-full table-auto text-center border-collapse border-t-2">
                                    <thead className="font-bold  bg-white sticky top-0 border-b-2">
                                        <tr>
                                            <th className="px-4 py-2">ลำดับ</th>
                                            <th className="px-4 py-2">รายการ</th>
                                            <th className="px-4 py-2">ขนาด</th>
                                            <th className="px-4 py-2">รูปแบบ</th>
                                            <th className="px-4 py-2">จำนวน</th>
                                            <th className="px-4 py-2">ราคา</th>
                                            <th className="px-4 py-2">รวม</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b-2">
                                            <td className="px-4 py-2">1</td>
                                            <td className="px-4 py-2">M04 แบบเสาสี่เหลี่ยม</td>
                                            <td className="px-4 py-2">100*100</td>
                                            <td className="px-4 py-2">
                                                <select
                                                    name="model"
                                                    id=""
                                                    className="px-4 py-2 text-center "
                                                >
                                                    <option value="">เช่า</option>
                                                    <option value="">ซื้อ</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <input type="number" className="px-2 py-2 text-center " />
                                            </td>
                                            <td className="px-4 py-2 ">2,000.00</td>
                                            <td className="px-4 py-2">4,000.00</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-2">2</td>
                                            <td className="px-4 py-2">D10 แบบคาน</td>
                                            <td className="px-4 py-2">10*100</td>
                                            <td className="px-4 py-2">
                                                <select
                                                    name="model"
                                                    id=""
                                                    className="px-4 py-2 text-center "
                                                >
                                                    <option value="">เช่า</option>
                                                    <option value="">ซื้อ</option>
                                                </select>
                                            </td>
                                            <td className="px-4 py-2">
                                                <input type="number" className="px-2 py-2 text-center" />
                                            </td>
                                            <td className="px-4 py-2">3,000.00</td>
                                            <td className="px-4 py-2">9,000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='row-span-1 grid grid-cols-6 grid-rows-3  '>
                            <span className="col-span-3 row-span-3 grid grid-cols-5  p-1">
                                <span className='col-span-3 grid justify-end'>
                                    รวมรายการสินค้าที่ส่งออกทั้งหมด
                                </span>
                                <span className='col-span-1 grid justify-center'>
                                    1
                                </span>
                                <span className='col-span-1 grid justify-start'>
                                    รายการ
                                </span>
                            </span>
                            <span className="col-span-3 row-span-3 grid grid-cols-4 ">
                                <span className='col-span-1 '></span>
                                <span className='col-span-1 grid justify-end p-1'>ราคารวม</span>
                                <span className='col-span-1 grid justify-end p-1'>120000.00</span>
                                <span className='col-span-1 grid justify-start p-1'>บาท</span>

                                <span className='col-span-2 grid justify-end p-1'>ภาษีมูลค่าเพิ่ม (7%)</span>
                                <span className='col-span-1 grid justify-end p-1'>1200.00</span>
                                <span className='col-span-1 grid justify-start p-1'>บาท</span>
                                <span className='col-span-1'></span>
                                <span className='col-span-1 grid justify-end p-1'>ราคาสุทธิ</span>
                                <span className="col-span-1 grid justify-end p-1 underline"> 1200.00</span>
                                <span className='col-span-1 grid justify-start p-1'>บาท</span>
                            </span>
                        </div>

                    </div>

                    <div className='row-span-1 grid grid-rows-3 '>
                        <div className=" row-span-1   flex items-center">
                            <input type='radio' name='vat' />  มีภาษีมูลค่าเพิ่ม
                            <input type='radio' name='vat' className="ml-3" />  ไม่มีภาษีมูลค่าเพิ่ม
                        </div>
                        <span></span>
                        <div className=" row-span-1  items-center justify-center grid grid-cols-2 text-white">
                            <span className='col-span-1 flex  justify-end pr-2'>
                            <button className=" bg-[#133E87] w-2/6 p-2 rounded-md"><i className="fa-solid fa-floppy-disk mr-2"></i>บันทึก</button>
                            </span>
                            <span className='col-span-1 flex  justify-start pl-2'>
                            <button className="bg-[#A62628] w-2/6 p-2 rounded-md"><i className="fa-solid fa-x mr-2"></i>ยกเลิก</button>
                            </span>
                            
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
