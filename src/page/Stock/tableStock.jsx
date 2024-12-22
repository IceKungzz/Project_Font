// src/components/TableItem.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export function TableItem({ selectedBranch }) {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ฟังก์ชันที่ดึงข้อมูลสินค้า
  const fetchProductDetails = async (branchId) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      let url = `http://192.168.195.75:5000/v1/product/stock/all-product`;

      // ถ้ามีการเลือกสาขา จะส่งไปเป็นพารามิเตอร์
      if (branchId) {
        url = `http://192.168.195.75:5000/v1/product/stock/product-bybranch/${branchId}`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "x-api-key": "1234567890abcdef",
        },
      });

      if (response.data && response.data.data) {
        const allProductDetails = Object.values(response.data.data).flat();
        setProductDetails(allProductDetails);
      } else {
        throw new Error("Data is not in expected format");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // เรียก fetchProductDetails เมื่อ selectedBranch เปลี่ยนแปลง
  useEffect(() => {
    fetchProductDetails(selectedBranch); // เรียก API สำหรับข้อมูลทั้งหมด หรือข้อมูลตามสาขาที่เลือก
  }, [selectedBranch]);

  // ฟังก์ชันที่ใช้แปลง branch_id เป็นชื่อสาขา
  const getBranchName = (branch_id) => {
    switch (branch_id) {
      case 1:
        return "สมุทรสาคร ( โคกขาม )";
      case 2:
        return "ชลบุรี ( บ้านเก่า )";
      case 3:
        return "ปทุมธานี ( นพวงศ์ )";
      default:
        return "-"; // กรณีเลือก "ทั้งหมด"
    }
  };

  if (isLoading) {
    return <div className="text-center text-gray-600">กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        เกิดข้อผิดพลาดในการดึงข้อมูล: {error}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">รายการสินค้า</h3>
      <div className="overflow-x-auto max-h-[calc(100vh-250px)]">
        <table className="w-full table-auto border-collapse border shadow-sm">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="border p-2 rounded-tl-md">ลำดับที่</th>
              <th className="border p-2 ">สาขา</th>
              <th className="border p-2">รหัสสินค้า</th>
              <th className="border p-2">ชื่อสินค้า</th>
              <th className="border p-2">ขนาด</th>
              <th className="border p-2">จำนวนทั้งหมด</th>
              <th className="border p-2">เช่า</th>
              <th className="border p-2 rounded-tr-md">คงเหลือ</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center text-gray-600 p-4">
                  ไม่มีข้อมูลสินค้าที่จะแสดง
                </td>
              </tr>
            ) : (
              productDetails.map((product, index) => (
                <tr key={`${product.id}-${product.branch_id}-${index}`}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{getBranchName(product.branch_id)}</td>
                  <td className="border p-2">{product.code || "-"}</td>
                  <td className="border p-2">{product.name || "-"}</td>
                  <td className="border p-2">{product.size || "-"}</td>
                  <td className="border p-2">{product.quantity || 0}</td>
                  <td className="border p-2">{product.rent_quantity || 0}</td>
                  <td className="border p-2">
                    {product.remaining_quantity || 0}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableItem;
