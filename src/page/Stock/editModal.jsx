// src/components/EditModal.jsx;
import { useState, useEffect } from "react";

function EditModal({ isModalOpen, handleClose }) {
  // ข้อมูลสินค้าสำหรับแต่ละสาขา
  const productData = [
    {
      branch: "ชลบุรี(บ้านเก่า)",
      code: "A123",
      name: "สินค้า A",
      size: "15 cm",
      quantity: 100,
    },
  ];

  if (!isModalOpen) return null; // ถ้า Modal ไม่เปิดจะไม่ render อะไร

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div className="bg-white p-6 rounded-md w-3/4 mt-64 ml-80 shadow-lg">
        <h2 className="text-xl font-semibold mb-6 text-center">
          เปรียบเทียบสินค้า
        </h2>

        {/* ตารางเปรียบเทียบสินค้า */}
        <table className="border-collapse w-full text-sm ">
          <thead className="bg-blue-200 text-blue-900 ">
            <tr>
              <th className="border p-3 text-center rounded-tl-md">รหัสสินค้า</th>
              <th className="border p-3 text-center">ชื่อสินค้า</th>
              <th className="border p-3 text-center">ขนาดสินค้า</th>
              <th className="border p-3 text-center">ชลบุรี</th>
              <th className="border p-3 text-center">นพวงศ์</th>
              <th className="border p-3 text-center rounded-tr-md">โคกขาม</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr
                key={index}
                className="text-center odd:bg-gray-100 even:bg-gray-50"
              >
                <td className="border p-3">{product.code}</td>
                <td className="border p-3">{product.name}</td>
                <td className="border p-3">{product.size}</td>
                <td className="border p-3">{product.quantity}</td>
                <td className="border p-3">{product.quantity}</td>
                <td className="border p-3">{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ปุ่มสำหรับปิด Modal */}
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
