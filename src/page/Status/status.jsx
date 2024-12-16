import React, { useState, useEffect } from "react";
import axios from "axios";

// ฟังก์ชัน Modal
const Modal = ({ isOpen, onClose, id }) => {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token not found");
          return;
        }

        const response = await axios.get(
          `http://192.168.195.75:5000/v1/product/list/get-statusone/${id}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef",
            },
          }
        );

        if (response.data.code === 200) {
          setProductDetails(response.data.data);
        } else {
          console.error("Error fetching product details:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!isOpen || !productDetails) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">รายละเอียดสินค้า</h2>
          <button onClick={onClose} className="text-red-500 font-bold">ปิด</button>
        </div>
        <div className="mt-4">
          <p><strong>สาขา:</strong> {productDetails.branch_name}</p>
          <p><strong>เลขที่ใบเสร็จ:</strong> {productDetails.export_number}</p>
          <p><strong>นามลูกค้า/ชื่อบริษัท:</strong> {productDetails.customer_name}</p>
          <p><strong>วันที่สร้าง:</strong> {productDetails.created_at}</p>
          <div className="mt-4">
            <h3 className="font-semibold">รายการสินค้า</h3>
            <table className="w-full mt-2 border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">รหัสสินค้า</th>
                  <th className="border p-2">ชื่อสินค้า</th>
                  <th className="border p-2">จำนวน</th>
                </tr>
              </thead>
              <tbody>
                {productDetails.products.map((product) => (
                  <tr key={product.product_id}>
                    <td className="border p-2">{product.code}</td>
                    <td className="border p-2">{product.product_name}</td>
                    <td className="border p-2">{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export function StatusProduct() {
  const [status, setStatus] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

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

  // ฟังก์ชันเปิด Modal
  const openModal = (id) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  // ฟังก์ชันปิด Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  return (
    <div className="w-full h-[90%] flex overflow-auto no-scrollbar">
      <div className="w-full h-full flex flex-col gap-4 p-4">
        {/* Row 1: ค้นหา */}
        <div className="w-full flex items-start justify-start gap-4">
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

          <div className="flex items-center gap-2">
            <span className="text-[16px] xl:text-[20px] text-end">เลขที่ใบเสร็จ:</span>
            <input
              type="text"
              value={receiptNumber}
              onChange={(e) => setReceiptNumber(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
            />
          </div>

          <div className="flex items-center">
            <button className="w-[120px] bg-[#133E87] h-10 rounded-md text-white flex items-center justify-center gap-2">
              <i className="fa-solid fa-search"></i>ค้นหา
            </button>
          </div>
        </div>

        {/* Row 2: ตารางแสดงข้อมูล */}
        <div className="w-full overflow-y-scroll no-scrollbar">
          <table className="table-auto w-full border-separate border-spacing-0  text-center overflow-hidden ">
            <thead className="h-16 ">
              <tr className="">
                <th className="border-b-2 border-l-2 border-t-2 border-[#133E87] rounded-tl-xl  px-4 py-2 text-[#133E87]">สาขา</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">เลขที่ใบเสร็จ</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">นามลูกค้า/ชื่อบริษัท</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">รูปแบบ</th>
                <th className="border-t-2 border-b-2 border-[#133E87] px-4 py-2 text-[#133E87]">สถานะ</th>
                <th className="border-t-2 border-b-2 border-[#133E87] rounded-tr-xl py-2 text-[#133E87] w-[30px]">เพิ่มเติม</th>
              </tr>
            </thead>
            <tbody>
              {status.length > 0 ? (
                status.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{item.branch_name}</td>
                    <td className="border px-4 py-2">{item.export_number}</td>
                    <td className="border px-4 py-2">{item.customer_name}</td>
                    <td className="border px-4 py-2">{item.type}</td>
                    <td className="border px-4 py-2">{item.status}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => openModal(item.id)} // ส่ง ID ไปที่ Modal
                        className="w-[80px] bg-[#FFFFFF] h-8 rounded-md text-[#000000] text-sm flex items-center justify-center gap-2 border border-gray-300"
                      >
                        ดูข้อมูล <i className="fa-solid fa-angle-right"></i>
                      </button>
                    </td>
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

      {/* Modal สำหรับแสดงรายละเอียด */}
      <Modal isOpen={isModalOpen} onClose={closeModal} id={selectedProductId} />

    </div>
  );
}

export default StatusProduct;
