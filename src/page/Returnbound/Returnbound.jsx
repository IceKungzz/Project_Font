import React from 'react'

export function ReturnItem() {


    return (
        <div className='w-full h-[90%]  grid grid-rows-12'>


            <div className='row-span-1 bg-orange-300  flex justify-start items-center pl-5'>
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
                <span className='pr-2 pl-5 font-bold text-xl text-white'>
                    <button className='bg-blue-500 h-10 w-28 rounded-md hover:bg-blue-600'>ค้นหา</button>
                </span>

            </div>



            <div className='row-span-11 '>

                <div className="">
                    <div className="">
                        <table className="table-auto w-full border-collapse border-red-300">
                            <thead>
                                <tr>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 1</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 2</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 3</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 4</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 5</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 6</th>
                                    <th className="border border-red-300 rounded-lg px-4 py-2">หัวข้อ 7</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* แถวที่ 1 */}
                                <tr>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-1</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-2</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-3</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-4</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-5</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-6</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 1-7</td>
                                </tr>
                                {/* แถวที่ 2 */}
                                <tr>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-1</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-2</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-3</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-4</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-5</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-6</td>
                                    <td className="border border-red-300 px-4 py-2">ข้อมูล 2-7</td>
                                </tr>
                                {/* เพิ่มแถวที่ 3 ถึง 10 ตามต้องการ */}
                            </tbody>
                        </table>
                    </div>
                </div>



            </div>

        </div>


    )
}
