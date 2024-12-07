import React from 'react'

export function Outbound(props) {
    

    return (
        <div className='w-full h-[90%] flex'>
            
            {/* input left */}
                <div className='w-2/4'>
                    {/* input ด้านบน  */}
                    <div className='w-full h-5/6 flex flex-col items-center p-4'>

                        <div className=" flex items-center justify-between p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px]'>สาขา:</label>
                            <select name="l" id="" className='inputclass_Outbound'>
                                <option value="">ชลบุรี</option>
                            </select>
                        </div>

                        <div className=" flex items-center justify-between p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px]'>นามลูกค้า/ชื่อบริษัท:</label>
                            <input type="text" 
                            className='inputclass_Outbound'
                            />
                        </div>

                        <div className=" flex items-center justify-between p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px]'>ชื่อไซต์งาน:</label>
                            <input type="text" 
                            className='inputclass_Outbound'
                            />
                        </div>

                        <div className=" flex items-center justify-between p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px]'>ที่อยู่ลูกค้า:</label>
                            <input type="text" 
                            className='inputclass_Outbound'
                            />
                        </div>

                        <div className=" flex items-center justify-between p-3 w-full ">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px] '>ระยะทาง:</label>
                            <input type="text" 
                            className='w-1/4 p-2 mr-3 rounded-sm outline-none border border-black'
                            />
                            <p className='w-1/4 text-[24px]'>กิโลเมตร</p>
                        </div>

                        <div className=" flex items-center justify-between p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px] '>วันที่เริ่มเช่า-ขาย:</label>
                            <input type="date" 
                            className='inputclass_Outbound'
                            />
                        </div>

                        <div className=" flex items-center p-3 w-full">
                            <label htmlFor="" className=' w-2/4 text-end pr-5 text-[24px] '>ระยะเวลา:</label>
                            <input type="text" 
                            className='w-1/4 p-2 mr-3 rounded-sm outline-none border border-black'
                            />
                            <p className='w-1/4 text-[24px] '>วัน</p>
                        </div>

                        <div className=' w-full p-5 flex itmes-center justify-end'>
                            <div className='w-2/4 flex items-center justify-between mr-3 p-1'>
                                <button className='bg-green-500 px-3 py-2 rounded-md w-2/4 text-white'>เพิ่มสินค้า</button>
                                <button className='bg-gray-500 px-3 py-2 rounded-md w-2/4 ml-2 text-white'>สร้างสินค้า</button>
                            </div>
                        </div>

                    </div>
                    {/* input ด้านบน  */}


                    {/* ปุ่มด้านล่าง */}
                    <div className='h-1/6 flex flex-col items-start justify-end p-4 bg-yellow-500'>
                        <button className='bg-gray-500 px-3 py-2 rounded-md w-2/4'>จองสินค้า</button>
                    </div>

                     {/* ปุ่มด้านล่าง */}
                </div>

                <div className="w-3/4 p-4">
                    <div className='w-full h-5/6 rounded-lg border border-black'>

                    </div>

                
                    <div className='h-1/6 flex flex-col items-end justify-center p-4 gap-6'>
                        <div className='w-full p-2'>   
                            <input type="radio" name='vat' className='mr-2'/><span className='mr-3'>มีภาษีมูลค่าเพิ่ม</span>
                            <input type="radio" name='vat' className='mr-2'/><span>ไม่มีภาษีมูลค่าเพิ่ม</span>
                        </div>

                        <div className='w-full p-2 flex justify-center items-center gap-6'>
                            <button className='bg-blue-500 px-3 py-2 rounded-md w-1/4'>บันทึกรายการ</button>
                            <button className='bg-red-500 px-3 py-2 rounded-md w-1/4'>ลบรายการ</button>
                        </div>

                    </div>

                </div>



            {/* input left */}

        </div>
    )
}
