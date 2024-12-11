import React from 'react'

export function Inbound(props) {

    const menu = [
        { title: 'นามลูกค้า/ชื่อบริษัท:', type: "text" },
        { title: 'ชื่อไซต์งาน:', type: "text" },
        { title: 'ที่อยู่ลูกค้า:', type: "text" },
        { title: 'วันที่เริ่มเช่า-ขาย:', type: "date", },


    ];

    return (
        <div className='w-full h-[90%] bg-slate-800'>

            <div className='w-full h-full grid grid-cols-5'>

                <div className=" col-span-2 bg-lime-400 grid grid-rows-6">
                    <div className='row-span-4 bg-slate-300 grid justify-end items-center pt-2' >
                        <div className='grid justify-end items-center grid-cols-4'>
                            <span className="col-span-1 grid justify-end pr-2">
                                สาขา:
                            </span>
                            <select name="" id="" className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500" >
                                <option value="">ชลบุรี</option>
                                <option value="">ระยอง</option>
                            </select>
                        </div>

                        {menu.map((item, index) => (
                            <div key={index} className='grid justify-end items-center grid-cols-4 pt-10'>
                                <span className="col-span-1 grid justify-end  pr-2">
                                    {item.title}
                                </span>
                                <input
                                    type={item.type}
                                    className=" col-span-3 w-[80%] h-10 rounded-lg border border-gray-500"
                                />
                            </div>
                        ))}
                        <div className='grid justify-end items-center grid-cols-4 pt-10'>
                            <span className="col-span-1 grid justify-end pr-2">
                                ระยะเวลา:
                            </span>
                            <input
                                type="text"
                                className=" col-span-2 h-10 rounded-lg border border-gray-500"
                            />
                            <span className=" col-span-1 pl-5">
                                วัน
                            </span>
                        </div>
                        <div className='grid grid-cols-6 pt-10'>
                            <span className='col-span-2'></span>
                            <button className="col-span-2  w-[80%] bg-[#31AB31] h-10 rounded-md">
                                <i className="fa-solid fa-plus mr-2"></i>เพิ่มสินค้า
                            </button>
                            <button className="col-span-2 w-[80%] bg-[#909090] h-10 rounded-md">
                                <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
                            </button>
                        </div>

                    </div>
                    <div className='row-span-2 grid-cols-4 grid justify-start items-end'>
                        <button className=" col-span-1 bg-[#909090] h-10 rounded-md">
                            <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
                        </button>
                    </div>
                </div>


                <div className=" col-span-3 grid grid-rows-6  bg-red-600">

                    <div className='row-span-5 grid  grid-rows-4 border border-gray-500 bg-slate-400 mt-2 rounded-lg'>
                        <div className='row-span-1 grid  grid-cols-3 bg-orange-500'>
                            <div className=' col-span-1 grid grid-rows-2 bg-gray-500'>
                                <span>2</span>
                                <span>2</span>
                            </div>
                            <div className=' col-span-1 bg-gray-600'>

                            </div>
                            <div className=' col-span-1 bg-gray-700'>

                            </div>
                        </div>
                        <div className='row-span-3 grid grid-rows-3 bg-orange-400'>
                            <div className='row-span-2 bg-orange-100'>

                            </div>
                            <div className='row-span-2 bg-orange-700'>

                            </div>
                        </div>

                    </div>







                    <div className='row-span-1  bg-slate-600'>

                    </div>

                </div>
            </div>

        </div>
    )
}
