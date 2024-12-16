import React from 'react'

export function ReturnItem() {


    return (
        <div className='w-full h-[90%]  grid grid-rows-12'>


            <div className='row-span-1 bg-orange-300 grid grid-cols-8 items-center'>
                <span className='flex justify-end pr-4'><p className='text-xl text-indigo-900 font-bold'>สาขา :</p></span>
                <span>
                    <select
                        className="h-10 w-full rounded-md border border-gray-500 p-2"
                    >
                        <option value="">ทั้งหมด</option>
                        <option value="chonburi">ชลบุรี</option>
                        <option value="naphawong">นพวงศ์</option>
                        <option value="kokkham">โคกขาม</option>
                    </select>
                </span>
                <span className="flex justify-end pr-4"><p className='text-xl text-indigo-900 font-bold'>เลขที่ใบเสร็จ:</p>

                </span>
                <span><input
                    type="text"
                    className="h-10 w-full rounded-md border border-gray-500 p-2"
                />
                </span>
                <span className="flex justify-center">
                    <button className="w-[80%] bg-[#133E87] h-10 rounded-md text-white flex items-center justify-center gap-2">
                        <i className="fa-solid fa-search"></i>ค้นหา
                    </button>
                </span>
            </div>



            <div className='row-span-11 '>


                <div className="">
                    <div className="">
                        <table class="rounded-bl-full bg-slate-600 border-slate-500 border">
                            <thead>
                                <tr>
                                    <th class="border border-slate-600 ...">State</th>
                                    <th class="border border-slate-600 ...">City</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border border-slate-700 ...">Indiana</td>
                                    <td class="border border-slate-700 ...">Indianapolis</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">Ohio</td>
                                    <td class="border border-slate-700 ...">Columbus</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-700 ...">Michigan</td>
                                    <td class="border border-slate-700 ...">Detroit</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>



            </div>

        </div>


    )
}
