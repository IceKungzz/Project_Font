import React, { useState, useEffect } from "react";
import axios from "axios";

// ฟังก์ชัน Modal
const Modal = ({ isOpen, onClose, id }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found");

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
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl shadow-lg relative">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-2xl font-semibold text-gray-800">ใบเสนอราคา-เช่า</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-600 font-bold text-lg transition duration-300"
          >
            ✕
          </button>
        </div>
  
        {isLoading ? (
          <p className="mt-6 text-center text-gray-600">กำลังโหลด...</p>
        ) : error ? (
          <p className="mt-6 text-center text-red-500">{error}</p>
        ) : productDetails ? (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <p><strong className="text-gray-700">สาขา:</strong> {productDetails.branch_name}</p>
              <p><strong className="text-gray-700">เลขที่ใบเสร็จ:</strong> {productDetails.export_number}</p>
              <p><strong className="text-gray-700">นามลูกค้า/ชื่อบริษัท:</strong> {productDetails.customer_name}</p>
              <p><strong className="text-gray-700">วันที่สร้าง:</strong> {productDetails.created_at}</p>
            </div>
  
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">รายการสินค้า</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border shadow-sm">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="border p-2">รหัสสินค้า</th>
                      <th className="border p-2">ชื่อสินค้า</th>
                      <th className="border p-2">จำนวน</th>
                      <th className="border p-2">ราคาเช่าต่อวัน</th>
                      <th className="border p-2">จำนวนวัน</th>
                      <th className="border p-2">ค่าปรับ</th>
                      <th className="border p-2">จำนวนรวม</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productDetails.products.map((product) => (
                      <tr key={product.product_id} className="hover:bg-gray-50 transition duration-200">
                        <td className="border p-2 text-center">{product.code}</td>
                        <td className="border p-2">{product.product_name}</td>
                        <td className="border p-2 text-center">{product.quantity} {product.unit}</td>
                        <td className="border p-2 text-right">{product.price}</td>
                        <td className="border p-2 text-right">{productDetails.date}</td>
                        <td className="border p-2 text-center">{product.price_damage}</td>
                        <td className="border p-2 text-right">{product.amount_price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
  
            <div className="mt-6 me-6">
              
              <div className="justify-end grid gap-4">
                <p><strong className="text-gray-700 me-3">รวมเงิน: </strong> {productDetails.price_oute}</p>
                <p><strong className="text-gray-700 me-3">ส่วนลด: </strong> {productDetails.discount}</p>
                <p><strong className="text-gray-700 me-3">รวมหักหลังส่วนลด: </strong> {productDetails.total_price_out}</p>
                <p><strong className="text-gray-700 me-3">ค่าขนส่งสินค้าไป-กลับ: </strong> {productDetails.shipping_cost}</p>
                <p><strong className="text-gray-700 me-3">ค่าบริการเคลื่อนย้ายสินค้า: </strong> {productDetails.move_price}</p>
                <p><strong className="text-gray-700 me-3">ค่าประกันสินค้า: </strong> {productDetails.guarantee_price}</p>
                <p><strong className="text-gray-700 me-3">รวมยอดเงินที่ต้องชำระ:</strong> {productDetails.final_price}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-600">ไม่พบข้อมูลสินค้า</p>
        )}
      </div>
    </div>
  );
}  

      export function StatusProduct() {
  const [status, setStatus] = useState([]);
      const [selectedBranch, setSelectedBranch] = useState("");
      const [receiptNumber, setReceiptNumber] = useState("");
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedProductId, setSelectedProductId] = useState(null);
      const [error, setError] = useState(null);

  // ฟังก์ชันดึงข้อมูลจาก API
  useEffect(() => {
    const fetchData = async () => {
        setError(null);
      try {
        const token = localStorage.getItem("token");
      if (!token) {
          throw new Error("Token not found");
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
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      setError(error.message);
      }
    };

      fetchData();
  }, []);

  // ฟังก์ชันเปิด Modal
  const openModal = (id) => {
    if (!id) {
        console.error("ID is undefined");
      return;
    }
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
          {/* แสดง Error หากเกิดปัญหา */}
          {error && <p className="text-red-500">{error}</p>}

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
          </div>

          {/* ตารางแสดงข้อมูล */}
          <div className="w-full overflow-y-scroll no-scrollbar">
            <table className="table-auto w-full border-separate border-spacing-0 text-center">
              <thead className="h-16">
                <tr>
                  <th className="border px-4 py-2">สาขา</th>
                  <th className="border px-4 py-2">เลขที่ใบเสร็จ</th>
                  <th className="border px-4 py-2">นามลูกค้า</th>
                  <th className="border px-4 py-2">สถานะ</th>
                  <th className="border px-4 py-2">เพิ่มเติม</th>
                </tr>
              </thead>
              <tbody>
                {status.length > 0 ? (
                  status.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.branch_name}</td>
                      <td className="border px-4 py-2">{item.export_number}</td>
                      <td className="border px-4 py-2">{item.customer_name}</td>
                      <td className="border px-4 py-2">{item.status}</td>
                      <td className="border px-4 py-2">
                        <button onClick={() => openModal(item.id)} className="text-blue-500">
                          ดูข้อมูล
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="border px-4 py-2">ไม่พบข้อมูล</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal} id={selectedProductId} />
        </div>
      </div>
      );
}

      export default StatusProduct;
