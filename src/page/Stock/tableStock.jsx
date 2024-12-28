import { useState, useEffect } from "react";
import axios from "axios";
import EditModal from "./EditModal"; // Import Modal
import EditModall from "./editModal_copy"; // Import Modal

export function TableItem({
  selectedBranch,
  onSelectProduct,
}) {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State สำหรับ Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false); // State สำหรับ Modal
  const [selectedProductId, setSelectedProductId] = useState(null); // ID สินค้าที่เลือก

  const fetchProductDetails = async (branchId) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      let url = "http://192.168.195.75:5000/v1/product/stock/all-product";

      if (branchId && branchId !== "") {
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
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails(selectedBranch);
  }, [selectedBranch]);

  const getBranchName = (branchId) => {
    switch (branchId) {
      case 1:
        return "สมุทรสาคร (โคกขาม)";
      case 2:
        return "ชลบุรี (บ้านเก่า)";
      case 3:
        return "ปทุมธานี (นพวงศ์)";
      default:
        return "-";
    }
  };

  const openModal = (productId) => {
    setSelectedProductId(productId);
    setIsModalOpen1(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalOpen1(false);
    setSelectedProductId(null);
  };

  if (isLoading)
    return <div className="text-center text-gray-600">กำลังโหลดข้อมูล...</div>;
  if (error)
    return (
      <div className="text-center text-red-600">เกิดข้อผิดพลาด: {error}</div>
    );

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">รายการสินค้า</h3>
      <div className="overflow-x-auto max-h-[calc(100vh-250px)]">
        <table className="w-full table-auto border-collapse border shadow-sm">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="border p-2 rounded-tl-md border-white">ลำดับที่</th>
              <th className="border p-2">สาขา</th>
              <th className="border p-2">รหัสสินค้า</th>
              <th className="border p-2">ชื่อสินค้า</th>
              <th className="border p-2">ขนาด</th>
              <th className="border p-2">จำนวนทั้งหมด</th>
              <th className="border p-2">จำนวนยอดจอง</th>
              <th className="border p-2 ">เปรียบเทียบสินค้า</th>
              <th className="border p-2 rounded-tr-md">เพิ่มสินค้า</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center text-gray-600">
                  ไม่มีข้อมูลสินค้าที่จะแสดง
                </td>
              </tr>
            ) : (
              productDetails.map((product, index) => (
                <tr key={`${product.id}-${index}`}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{getBranchName(product.branch_id)}</td>
                  <td className="border p-2">{product.code || "-"}</td>
                  <td className="border p-2">{product.name || "-"}</td>
                  <td className="border p-2">{product.size || "-"}</td>
                  <td className="border p-2">{product.quantity || 0}</td>
                  <td className="border p-2 text-red-700">
                    {product.reserve_quantity || 0}
                  </td>
                  <td className="flex justify-center items-center border p-1">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600"
                      onClick={() => onSelectProduct(product.id)}
                    >
                      เลือก
                    </button>
                  </td>
                  <td className="border p-2 text-center">
                    <button
                      className="bg-gray-500 text-white px-2 py-1 rounded-md hover:bg-gray-800"
                      onClick={() => openModal(product.id)}
                    >
                      เพิ่ม  <i class="fa-solid fa-prescription-bottle-medical"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <EditModal
        isModalOpen={isModalOpen}
        handleClose={closeModal}
        id={selectedProductId}
      />
      <EditModall
        isModalOpen={isModalOpen1}
        handleClose={closeModal}
        id={selectedProductId}
      />
    </div>
  );
}

export default TableItem;
