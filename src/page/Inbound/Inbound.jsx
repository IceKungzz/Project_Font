import React from 'react'

export function Inbound(props) {

    const menu = [
        { title: 'รหัสสินค้า:', type: "text" },
        { title: 'ชื่อสินค้า:', type: "text" },
        { title: 'ขนาดสินค้า:', type: "text" },
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
                        <div className='grid justify-end items-center grid-cols-4 pt-10 '>
                            <span className="col-span-1 grid justify-end  pr-2">
                                วันที่นำเข้าสินค้า:
                            </span>
                            <input
                                type="date"
                                className=" col-span-3 w-[80%] h-10 rounded-lg border border-gray-500 "
                            />
                        </div>
                        <div className='grid justify-end items-center grid-cols-4 pt-10 '>
                            <span className='col-span-1'></span>
                            <span className="col-span-2 flex justify-start  pr-2  text-sky-800 text-xl font-bold">
                                นำเข้าสินค้า
                            </span>

                        </div>
                        {menu.map((item, index) => (
                            <div
                                key={index}
                                className="grid justify-end items-center grid-cols-4 pt-10"
                            >
                                <span className="col-span-1 grid justify-end pr-2">{item.title}</span>
                                <div className="relative col-span-3 w-[80%]">
                                    <input
                                        type={item.type}
                                        value={item.value} // Binding with state
                                        // onChange={(e) => handleInputChange(e, index)}
                                        className="w-full h-10 rounded-lg border border-gray-500 pr-10 pl-3"
                                    />
                                    <span
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                    // onClick={() => handleClearInput(index)}
                                    >
                                        <i className="fa fa-times"></i>
                                    </span>
                                </div>
                            </div>
                        ))}

                        <div className='grid grid-cols-8 pt-10 '>
                            <span className='col-span-2 '></span>
                            <button className="col-span-3  w-[80%] bg-[#31AB31] h-10 rounded-md">
                                <i className="fa-solid fa-plus mr-2"></i>เพิ่มสินค้า
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
