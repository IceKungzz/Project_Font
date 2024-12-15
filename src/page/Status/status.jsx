import React from 'react'

export function Status_product(props) {
    return (
        <div className="w-full h-[90%] flex overflow-auto no-scrollbar">
            <div className="w-full h-full flex flex-col gap-4 p-4">
                {/* Row 1 */}
                <div className="w-full flex items-start justify-start gap-4">
                    {/* สาขา */}
                    <div className="flex items-center gap-2">
                        <span className="text-[16px] xl:text-[20px] text-end">สาขา:</span>
                        <select
                            name=""
                            id=""
                            className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
                        >
                            <option value="">ชลบุรี</option>
                            <option value="">นพวงศ์</option>
                            <option value="">โคกขาม</option>
                            <option value="">ทั้งหมด</option>
                        </select>
                    </div>

                    {/* เลขที่ใบเสร็จ */}
                    <div className="flex items-center gap-2">
                        <span className="text-[16px] xl:text-[20px] text-end">เลขที่ใบเสร็จ:</span>
                        <input
                            type="text"
                            className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
                        />
                    </div>

                    {/* วันที่ทำรายการ */}
                    <div className="flex items-center gap-2">
                        <span className="text-[16px] xl:text-[20px] text-end">วันที่ทำรายการ:</span>
                        <input
                            type="date"
                            className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
                        />
                    </div>

                    {/* ปุ่มค้นหา */}
                    <div className="flex items-center">
                        <button className="w-[120px] bg-[#133E87] h-10 rounded-md text-white flex items-center justify-center gap-2">
                            <i className="fa-solid fa-search"></i>ค้นหา
                        </button>
                    </div>
                </div>

                {/* Row 2: ตาราง */}
                <div className="w-full overflow-y-scroll ">
                    <table className="w-full border-collapse overflow-hidden rounded-lg border border-[#133E87]">
    <thead className="bg-[#CBDCEB] h-16 rounded-t-lg">
        <tr>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">สาขา</th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">เลขที่ใบเสร็จ</th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">วันที่ทำรายการ</th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">นามลูกค้า/ชื่อบริษัท</th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">รูปแบบ</th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">
                <div className="flex flex-row items-center justify-center gap-2">
                    สถานะ
                    <select
                        name=""
                        id=""
                        className="bg-[#8FCAFF] w-4 h-4 px-1 items-center justify-center">
                        <option value=""></option>
                    </select>
                </div>
            </th>
            <th className="px-4 py-2 text-[#133E87] border border-[#133E87]">เพิ่มเติม</th>
        </tr>
    </thead>
                        <tbody>
                            {/* ตัวอย่างข้อมูล */}
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00110</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#555555]">เสร็จสมบูรณ์</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00111</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#01BBFF]">กำลังเช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00112</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-red-600">เลยกำหนดคืนสินค้า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00113</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#01BBFF]">กำลังเช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00114</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#555555]">เสร็จสมบูรณ์</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00115</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#9025C6]">จอง</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00116</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#158B11]">ส่งคืนแล้ว</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00117</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#C3C000]">เช่าต่อ</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00118</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#01BBFF]">กำลังเช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00119</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#01BBFF]">กำลังเช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00120</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-red-600">เลยกำหนดคืนสินค้า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ชลบุรี</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">00121</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">26 พฤศจิกายน 2567</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-left">คุณสมพร</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center">ขาย/เช่า</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center text-[#555555]">เสร็จสมบูรณ์</td>
                                <td className="border-b-2 border-[#133E87] px-4 py-2 text-center flex justify-center items-center">
                                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                                        ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}