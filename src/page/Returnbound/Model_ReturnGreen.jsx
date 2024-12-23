import React, { useState } from "react";

export function Modal_ReturnGreen({ close, data }) {

    const calculateNewDate = (actualOut, daysToAdd) => {
        if (!actualOut) {
            console.error("actualOut is missing:", actualOut);
            return "วันที่ไม่พร้อมใช้งาน";
        }
        if (isNaN(daysToAdd)) {
            console.error("daysToAdd is not a number:", daysToAdd);
            return "จำนวนวันไม่ถูกต้อง";
        }
    
        const actualOutDate = new Date(actualOut);
        if (isNaN(actualOutDate)) {
            console.error("Cannot parse actualOut:", actualOut);
            return "รูปแบบวันที่ไม่ถูกต้อง";
        }
    
        actualOutDate.setDate(actualOutDate.getDate() + parseInt(daysToAdd, 10));
    
        const thaiMonthsShort = [
            "มกรา", "กุมภา", "มีนา", "เมษา", "พฤษภา", "มิถุนา",
            "กรกฎา", "สิงหา", "กันยา", "ตุลา", "พฤศจิกา", "ธันวา"
        ];
        const day = actualOutDate.getDate();
        const month = thaiMonthsShort[actualOutDate.getMonth()];
        const year = actualOutDate.getFullYear() + 543;
    
        return `${day} ${month} ${year}`;
    };

    const [hasVat, setHasVat] = useState(true);

    const handleVatChange = (e) => {
        setHasVat(e.target.value === "true");
    };
    console.log(data, "มาแล้ว");

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50 ">
            <div className="  w-[750px] h-[750px] rounded-3xl shadow-2xl overflow-hidden flex flex-col bg-green-200 border-green-700 border-2">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4  text-green-700">
                    <div></div>
                    <h2 className="text-3xl font-bold">คืนสินค้า</h2>
                    <button
                        className="text-lg hover:text-red-300 transition"
                        onClick={close}
                    >
                        ✖
                    </button>
                </div>

                {/* Form Section */}
                <div className=" overflow-y-auto flex-grow">
                    {data.map((items, index) => (
                        <div className="grid grid-cols-3 gap-x-6 gap-y-6 " key={index}>

                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    สาขา :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                    {items.branch_name}
                                </label>
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    เลขที่ใบเสร็จ :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                    {items.receip_number}
                                </label>
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    นามลูกค้า/ชื่อบริษัท :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                    {items.customer_name}
                                </label>
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    วันที่เริ่มเช่า :
                                </label>
                            </div>
                            <div className=" col-span-2  flex items-center justify-between">
                                <label className="text-xl  text-gray-600 h-full  ">
                                    {/* แสดงวันที่เริ่มต้น */}
                                    {items.actual_out ? calculateNewDate(items.actual_out, 0) : "ไม่มีวันที่เริ่มต้น"}
                                    <label className="pl-10 pr-10 text-xl font-bold text-gray-600">ถึง</label>
                                    {/* แสดงวันที่สิ้นสุด */}
                                    {items.actual_out && items.date
                                        ? calculateNewDate(items.actual_out, items.date)
                                        : "ไม่มีวันที่สิ้นสุด"}
                                </label>

                            </div>

                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    วันที่ส่งคืนจริง :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <input type='date' className="w-[70%] h-10 px-4 border-2 border-gray-400 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    รายการเช่า :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                    5  <label className="pl-5">ชิ้น</label>
                                </label>
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                    ตรวจสอบตำหนิสินค้า :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <input type='radio' className="mr-2 "
                                    checked={hasVat} value="true"
                                    onChange={handleVatChange} /><label>มีตำหนิ</label>
                                <input type='radio' className="mr-2 ml-2"
                                    checked={!hasVat} value="false"
                                    onChange={handleVatChange} /><label>ไม่มีตำหนิ</label>
                            </div>
                            <div className=" col-span-1  ">
                                <label className="text-xl font-bold text-gray-600    h-full flex items-start justify-end ">
                                    หมายเหตุ :
                                </label>
                            </div>
                            <div className=" col-span-2  ">
                                <input type='tel' className="w-[70%] h-40 px-4 border-2 border-gray-400 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                        </div>
                    ))}

                </div>

                {/* Footer */}
                <div className="p-6  flex justify-center ">
                    <button
                        className="px-6 py-3 text-white rounded-md text-lg font-medium transition w-1/4 bg-[#31AB31] hover:bg-green-600 active:bg-green-700"
                    >


                        ส่งคืนสินค้า
                    </button>

                </div>
            </div>
        </div>
    );
}
