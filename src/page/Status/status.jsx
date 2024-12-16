import React, { useState, useEffect } from "react";
import axios from "axios";

export function StatusProduct() {
  const [status, setStatus] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");

  // ฟังก์ชันดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token not found");
          return;
        }

        const response = await axios.get(
          "http://192.168.195.75:5000/v1/product/list/get-status",
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef",
            },
          }
        );

        if (response.data.code === 200) {
          // เข้าถึงข้อมูลภายใต้ "Status Product"
          setStatus(response.data.data["Status Product"]);
        } else {
          console.error("Error fetching data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[90%] flex overflow-auto no-scrollbar">
      <div className="w-full h-full flex flex-col gap-4 p-4">
        {/* Row 1: ค้นหา */}
        <div className="w-full flex items-start justify-start gap-4">
          {/* เลือกสาขา */}
          <div className="flex items-center gap-2">
            <span className="text-[16px] xl:text-[20px] text-end">สาขา:</span>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
            >
              <option value="">ทั้งหมด</option>
              <option value="chonburi">ชลบุรี</option>
              <option value="naphawong">นพวงศ์</option>
              <option value="kokkham">โคกขาม</option>
            </select>
          </div>

          {/* กรอกเลขที่ใบเสร็จ */}
          <div className="flex items-center gap-2">
            <span className="text-[16px] xl:text-[20px] text-end">เลขที่ใบเสร็จ:</span>
            <input
              type="text"
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
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

        {/* Row 2: ตารางแสดงข้อมูล */}
        <div className="w-full overflow-y-scroll">
          <table className="table-auto w-full border-collapse text-center rounded-xl overflow-hidden">
            <thead className="bg-[#CBDCEB] h-16">
              <tr>
                <th className="border-t-2 border-b-2 border-l-2 border-[#133E87] px-4 py-2 text-[#133E87]">สาขา</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">เลขที่ใบเสร็จ</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">นามลูกค้า/ชื่อบริษัท</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">รูปแบบ</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">สถานะ</th>
                <th className="border-t-2 border-b-2 border-r-2 border-[#133E87] px-4 py-2 text-[#133E87]">เพิ่มเติม</th>
              </tr>
            </thead>
            <tbody>
              {status.length > 0 ? (
                status.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{item.branch_name}</td>
                    <td className="border px-4 py-2">{item.receip_number}</td>
                    <td className="border px-4 py-2">{item.customer_name}</td>
                    <td className="border px-4 py-2">{item.type}</td>
                    <td className="border px-4 py-2">{item.status}</td>
                    <button className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300">
                      ดูข้อมูล<i className="fa-solid fa-angle-right"></i>
                    </button>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="border px-4 py-2">
                    ไม่พบข้อมูล
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatusProduct;
