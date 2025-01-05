import React, { useEffect, useState } from "react";

export default function ProductReturn({ id }) {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ดึงข้อมูลเมื่อ productId เปลี่ยน
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const token = localStorage.getItem("token"); // ดึง token จาก localStorage
        const response = await fetch(
          `http://192.168.195.75:5000/v1/product/return/product/${id}`,
          {
            method: "GET", // ระบุ method ว่าเป็น 'GET'
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef", // ใส่ API Key (ถ้าจำเป็น)
            },
          }
        );

        const data = await response.json(); // แปลงข้อมูลที่ตอบกลับเป็น JSON

        if (data.status) {
          setProductData(data.option.products); // เก็บข้อมูลสินค้าใน state
        } else {
          setError("ไม่พบข้อมูลสินค้า");
        }
      } catch (err) {
        setError("เกิดข้อผิดพลาดในการดึงข้อมูล");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // ดึงข้อมูลใหม่ทุกครั้งที่ id เปลี่ยน

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin border-t-4 border-blue-500 w-16 h-16 border-solid rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-bold p-4 bg-red-100 rounded-lg border border-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-700">รายละเอียดสินค้า</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left text-gray-600">Product Name</th>
              <th className="px-4 py-2 border-b text-left text-gray-600">Product Code</th>
              <th className="px-4 py-2 border-b text-left text-gray-600">Borrowed Quantity</th>
              <th className="px-4 py-2 border-b text-left text-gray-600">Remaining Quantity</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr
                key={product.product_id}
                className="hover:bg-gray-50 transition-all duration-200"
              >
                <td className="px-4 py-2 border-b text-gray-800">{product.product_name}</td>
                <td className="px-4 py-2 border-b text-gray-800">{product.code}</td>
                <td className="px-4 py-2 border-b text-gray-800">{product.borrowed_quantity}</td>
                <td className="px-4 py-2 border-b text-gray-800">{product.remaining_quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
