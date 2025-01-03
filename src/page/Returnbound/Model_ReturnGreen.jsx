import React, { useState } from "react";
import axios from "axios";

export function Modal_ReturnGreen({ close, data }) {
    const [hasVat, setHasVat] = useState(true);
    const [remarks, setRemarks] = useState(""); // สำหรับเก็บหมายเหตุ
    const [isSubmitting, setIsSubmitting] = useState(false); // สำหรับแสดงสถานะการส่งข้อมูล

    const handleVatChange = (e) => {
        setHasVat(e.target.value === "true");
    };

    const handleRemarksChange = (e) => {
        setRemarks(e.target.value);
    };

    const handleSubmit = async () => {
        if (!data || !data[0]?.receip_number) {
            alert("ไม่พบข้อมูลใบเสร็จ");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("Token not found");

            const url = `http://192.168.195.75:5000/v1/product/return/return-status`;
            const response = await axios.post(
                url,
                {
                    receipt_number: data[0].receip_number,
                    has_defects: hasVat,
                    remarks: remarks,
                },
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                        "x-api-key": "1234567890abcdef",
                    },
                }
            );

            if (response.data.code === 200) {
                alert("ส่งคืนสินค้าเรียบร้อยแล้ว");
                close(); // ปิด Modal หลังจากส่งคืนสำเร็จ
            } else {
                throw new Error(response.data.message || "เกิดข้อผิดพลาดในการส่งคืนสินค้า");
            }
        } catch (error) {
            console.error("Error returning product:", error);
            alert("เกิดข้อผิดพลาด: " + (error.message || "ไม่สามารถส่งคืนสินค้าได้"));
        } finally {
            setIsSubmitting(false);
        }
    };

    const calculateNewDate = (actualOut, daysToAdd) => {
        if (!actualOut) {
            return "วันที่ไม่พร้อมใช้งาน";
        }

        const actualOutDate = new Date(actualOut);
        actualOutDate.setDate(actualOutDate.getDate() + parseInt(daysToAdd, 10));

        const thaiMonthsShort = [
            "มกรา", "กุมภา", "มีนา", "เมษา", "พฤษภา", "มิถุนา",
            "กรกฎา", "สิงหา", "กันยา", "ตุลา", "พฤศจิกา", "ธันวา",
        ];
        const day = actualOutDate.getDate();
        const month = thaiMonthsShort[actualOutDate.getMonth()];
        const year = actualOutDate.getFullYear() + 543;

        return `${day} ${month} ${year}`;
    };

    const today = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = today.toLocaleDateString("th-TH", options);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50 ">
            <div className="w-[750px] h-[750px] rounded-3xl shadow-2xl overflow-hidden flex flex-col bg-green-200 border-green-700 border-2">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 text-green-700">
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
                <div className="overflow-y-auto flex-grow">
                    {data && Array.isArray(data) && data.map((items, index) => (
                        <div className="grid grid-cols-3 gap-x-6 gap-y-6" key={index}>
                            {/* Branch Name */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    สาขา:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <label className="text-xl text-gray-600 h-full flex items-center justify-start">
                                    {items.branch_name}
                                </label>
                            </div>

                            {/* Receipt Number */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    เลขที่ใบเสร็จ:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <label className="text-xl text-gray-600 h-full flex items-center justify-start">
                                    {items.receip_number}
                                </label>
                            </div>

                            {/* Customer Name */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    นามลูกค้า/ชื่อบริษัท:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <label className="text-xl text-gray-600 h-full flex items-center justify-start">
                                    {items.customer_name}
                                </label>
                            </div>

                            {/* Rental Dates */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    วันที่เริ่มเช่า:
                                </label>
                            </div>
                            <div className="col-span-2 flex items-center justify-between">
                                <label className="text-xl text-gray-600 h-full">
                                    {items.actual_out ? calculateNewDate(items.actual_out, 0) : "ไม่มีวันที่เริ่มต้น"}
                                    <label className="pl-10 pr-10 text-xl font-bold text-gray-600">ถึง</label>
                                    {items.actual_out && items.date
                                        ? calculateNewDate(items.actual_out, items.date)
                                        : "ไม่มีวันที่สิ้นสุด"}
                                </label>
                            </div>

                            {/* Return Date */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    วันที่ส่งคืนจริง:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <div className="border-2 border-gray-400 rounded-md w-[70%] h-10 flex justify-start items-center text-lg pl-4 bg-white">
                                    {formattedDate}
                                </div>
                            </div>

                            {/* Defects */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-center justify-end">
                                    ตรวจสอบตำหนิสินค้า:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <input
                                    type="radio"
                                    className="mr-2"
                                    checked={hasVat}
                                    value="true"
                                    onChange={handleVatChange}
                                />
                                <label>ปกติ</label>
                                <input
                                    type="radio"
                                    className="mr-2 ml-2"
                                    checked={!hasVat}
                                    value="false"
                                    onChange={handleVatChange}
                                />
                                <label>เสียหาย</label>
                            </div>

                            {/* Remarks */}
                            <div className="col-span-1">
                                <label className="text-xl font-bold text-gray-600 h-full flex items-start justify-end">
                                    หมายเหตุ:
                                </label>
                            </div>
                            <div className="col-span-2">
                                <input
                                    type="text"
                                    className="w-[70%] h-40 px-4 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={remarks}
                                    onChange={handleRemarksChange}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="p-6 flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-3 text-white rounded-md text-lg font-medium transition w-1/4 bg-[#31AB31] hover:bg-green-600 active:bg-green-700"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "กำลังส่งคืน..." : "ส่งคืนสินค้า"}
                    </button>
                </div>
            </div>
        </div>
    );
}
