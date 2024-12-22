import React, { useState } from "react";


export function Modal_ReturnItem({ close, confirmRed }) {
    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("th-TH", options);

    const [hasVat, setHasVat] = useState(true);

    const handleVatChange = (e) => {
        setHasVat(e.target.value === "true");
    };
    const dataMenuReturn = [
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        { branch: 'ชลบุรี', receipt: '00032', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'A' },
        { branch: 'ชลบุรี', receipt: '00342', date: '26 พฤศจิกายน 2567', name: 'นาย A', type: 'เช่า/ซื้อ', status: 'B' },
        


    ];
    const [formData, setFormData] = useState({
        code: "",
        name: "",
        size: "",
        meter: "",
        centimeter: "",
        price3D: "",
        price30D: "",
        price_sell: "",
        price_damage: "",
        unit: "",
        remark: "",
    });

    // ฟังก์ชัน handleChange สำหรับอัปเดตข้อมูลฟอร์ม
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // ตรวจสอบว่า field ที่มีดอกจันทั้งหมดถูกกรอกครบหรือไม่
    const isFormValid = () => {
        const requiredFields = [
            "code",
            "name",
            "price3D",
            "price30D",
            "price_sell",
            "price_damage",
        ];
        return requiredFields.every((field) => formData[field].trim() !== "");
    };

    const confirm_item = () => {
        // if (isFormValid()) {
        //   console.log(formData);
        //   confirm(formData);
        //   close();
        // }
        console.log(formData);
        confirmRed(formData);
        close();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50 ">
            <div className="  w-[950px] h-[600px] rounded-lg shadow-2xl overflow-hidden flex flex-col bg-white border-cyan-800 border-2">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4  text-cyan-800">
                    <div></div>
                    <h2 className="text-3xl font-bold">รายการเช่าต่อ</h2>
                    <button
                        className="text-lg hover:text-red-300 transition"
                        onClick={close}
                    >
                        ✖
                    </button>
                </div>

                {/* Form Section */}
                <div className=" overflow-y-auto flex-grow">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-6  ">

                        <div className=" col-span-3  ">
                            <table className="table-auto w-full border-collapse ">
                                <thead className='bg-slate-200 border-l-2  h-14 text-indigo-800 text-xl sticky top-0 rounded-lg '>
                                    <tr className='' >
                                        <th className=" px-4 border-l-2  py-2">สาขา</th>
                                        <th className=" px-4 border-l-2  py-2">เลขที่ใบเสร็จ</th>
                                        <th className=" px-4 border-l-2 py-2">วันที่ทำรายการ</th>
                                        <th className=" px-4 border-l-2 py-2">วันที่ทำรายการ</th>
                                        <th className=" px-4 border-l-2 py-2">รูปแบบ</th>
                                        <th className=" px-4 border-l-2 py-2">สถานะ</th>
                                        <th className=" px-4 border-l-2 py-2">เพิ่มเติม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataMenuReturn.map((items, index) => (
                                        <tr key={index} className='  border-2'>
                                            <td className="text-center border-l-2 px-4 py-2 ">{items.branch}</td>
                                            <td className="text-center border-l-2 px-4 py-2">{items.receipt}</td>
                                            <td className="text-center border-l-2 px-4 py-2">{items.date}</td>
                                            <td className="text-start border-l-2 px-4 py-2">{items.name}</td>
                                            <td className="text-center border-l-2 px-4 py-2">{items.type}</td>
                                            <td className={`text-center border-l-2 px-4 py-2 
                                        ${items.status === 'A' ? 'text-red-500' : 'text-green-500'}`}>
                                                {items.status === 'A' ? 'เลยกำหนดส่งคืน' : 'รอส่งคืน'}
                                            </td>
                                            <td className="text-center border-l-2 px-4 py-2"><input type='checkbox'/></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>

                {/* Footer */}
                <div className="p-6  flex justify-center ">
                    <button
                        className={`px-6 py-3 text-white rounded-md text-lg font-medium transition w-1/6 ${isFormValid()
                            ? "bg-[#31AB31] hover:bg-green-600 active:bg-green-700"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                        onClick={confirm_item}
                        disabled={!isFormValid()} // ปุ่มจะถูก disable ถ้าไม่ valid
                    >
                        ตกลง
                    </button>

                </div>
            </div>
        </div>
    );
}