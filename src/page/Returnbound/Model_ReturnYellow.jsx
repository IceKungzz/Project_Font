import React, { useState } from "react";
import { Modal_ReturnItem } from "./Model_ReturnItem";

export function Modal_ReturnYellow({ close, confirmYellow }) {
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

    const [showmodalItem, setShowmodalItem] = useState(false);
        const closeModalRed = () => {
            setShowmodalItem(false);
        };
    
    const confirm_item = () => {
        // if (isFormValid()) {
        //   console.log(formData);
        //   confirm(formData);
        //   close();
        // }
        console.log(formData);
        confirmYellow(formData);
        close();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50 ">
            {showmodalItem ? (
                            <Modal_ReturnItem close={closeModalRed} />
                        ) : null}
            <div className="  w-[900px] h-[750px] rounded-lg shadow-2xl overflow-hidden flex flex-col bg-yellow-200 border-yellow-700 border-2">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4  text-yellow-700">
                    <div></div>
                    <h2 className="text-3xl font-bold">เช่าต่อ</h2>
                    <button
                        className="text-lg hover:text-red-300 transition"
                        onClick={close}
                    >
                        ✖
                    </button>
                </div>

                {/* Form Section */}
                <div className=" overflow-y-auto flex-grow">
                    <div className="grid grid-cols-3 gap-x-6 gap-y-6 ">

                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                สาขา :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                ชลบุรี
                            </label>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                เลขที่ใบเสร็จ :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                00100
                            </label>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                            นามลูกค้า/ชื่อบริษัท :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                คุณสมพร
                            </label>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                วันที่เริ่มเช่า :
                            </label>
                        </div>
                        <div className=" col-span-2  flex items-center justify-between">
                            <label className="text-xl  text-gray-600 h-full  ">
                                20 พ.ย. 2567 <label className="pl-10 pr-10 text-xl font-bold text-gray-600">ถึง</label> 25 พ.ย. 2567
                            </label>

                        </div>

                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                                วันที่ส่งคืนจริง :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <input type='date' className="w-[30%] h-10 px-4 border-2 border-gray-400 rounded-md" />
                            <label className="pl-5 pr-5 text-xl font-bold text-gray-600 ">ถึง</label>
                            <input type='date' className="w-[30%] h-10 px-4 border-2 border-gray-400 rounded-md" />
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                            จำนวนวัน :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                5  <label className="pl-5">วัน</label>
                            </label>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                            รายการเช่าต่อ :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <button className="border-2 border-gray-400 pl-4 pr-4 pt-2 pb-2 rounded-md bg-slate-500 text-white"
                            onClick={() => setShowmodalItem(true)}
                            >เลือกรายการ</button>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                            สินค้าทั้งหมด :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                6  <label className="pl-5">ชิ้น</label>
                            </label>
                        </div>
                        <div className=" col-span-1  ">
                            <label className="text-xl font-bold text-gray-600    h-full flex items-center justify-end ">
                            เช่าต่อ :
                            </label>
                        </div>
                        <div className=" col-span-2  ">
                            <label className="text-xl  text-gray-600 h-full flex items-center justify-start ">
                                3  <label className="pl-5 pr-10">ชิ้น</label>
                                <label className="pl-14 pr-5 text-xl font-bold text-gray-600 ">ส่งคืน :</label> 3 <label className="pl-5 ">ชิ้น</label>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6  flex justify-center ">
                    <button
                        className={`px-6 py-3 text-white rounded-md text-lg font-medium transition w-1/4 ${isFormValid()
                            ? "bg-[#31AB31] hover:bg-green-600 active:bg-green-700"
                            : "bg-gray-400 cursor-not-allowed"
                            }`}
                        onClick={confirm_item}
                        disabled={!isFormValid()} // ปุ่มจะถูก disable ถ้าไม่ valid
                    >
                        ยืนยันเช่าต่อ
                    </button>

                </div>
            </div>
        </div>
    );
}
