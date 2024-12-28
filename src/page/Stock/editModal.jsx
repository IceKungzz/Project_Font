import { useState, useEffect } from "react";
import axios from "axios";

function EditModal({ isModalOpen, handleClose, id }) {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductDetails = async (id) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) throw new Error("Token not found");

      const url = `http://192.168.195.75:5000/v1/product/stock/compare/${id}`;

      const response = await axios.get(url, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "x-api-key": "1234567890abcdef",
        },
      });

      if (response.data.code === 200) {
        setProductDetails(response.data.data);
        console.log(response.data.data);
      } else {
        throw new Error(response.data.message || "Error fetching product details");
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  if (!isModalOpen) return null;

  if (isLoading) {
    
  }

  if (error) {
    return <div className="text-center text-red-500 p-6">เกิดข้อผิดพลาด: {error}</div>;
  }

  if (!productDetails) {
    return <div className="text-center p-6">ไม่มีข้อมูลสินค้า</div>;
  }

  const { product_samutsakhon, product_chonburi, product_pathumthani } = productDetails;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div className="bg-white p-6 rounded-md w-3/4 mt-64 ml-80 shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-center">เปรียบเทียบสินค้า</h2>

        <table className="border-collapse w-full text-sm">
          <thead className="bg-blue-200 text-blue-900">
            <tr>
              <th className="border p-3 text-center rounded-tl-md">รหัสสินค้า</th>
              <th className="border p-3 text-center">ชื่อสินค้า</th>
              <th className="border p-3 text-center">ขนาดสินค้า</th>
              <th className="border p-3 text-center bg-red-200">สมุทรสาคร (คงคลัง)</th>
              <th className="border p-3 text-center  bg-red-200">สมุทรสาคร (จอง)</th>
              <th className="border p-3 text-center bg-lime-300">ชลบุรี (คงคลัง)</th>
              <th className="border p-3 text-center bg-lime-300">ชลบุรี (จอง)</th>
              <th className="border p-3 text-center bg-teal-300">ปทุมธานี (คงคลัง)</th>
              <th className="border p-3 text-center rounded-tr-md bg-teal-300">ปทุมธานี (จอง)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center odd:bg-gray-100 even:bg-gray-50">
              <td className="border p-3">{product_samutsakhon.code || "-"}</td>
              <td className="border p-3">{product_samutsakhon.name || "-"}</td>
              <td className="border p-3">{product_samutsakhon.size || "-"}</td>
              <td className="border p-3 ">{product_samutsakhon.quantity || 0}</td>
              <td className="border p-3 text-yellow-800">{product_samutsakhon.reserve_quantity || 0}</td>
              <td className="border p-3">{product_chonburi.quantity || 0}</td>
              <td className="border p-3 text-yellow-800">{product_chonburi.reserve_quantity || 0}</td>
              <td className="border p-3">{product_pathumthani.quantity || 0}</td>
              <td className="border p-3 text-yellow-800">{product_pathumthani.reserve_quantity || 0}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
}



export default EditModal;
