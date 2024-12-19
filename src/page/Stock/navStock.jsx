// src/components/NavStock.jsx
import React, { useState } from "react";
import EditModal from "./editModal"; // นำเข้า EditModal
import TableItem from "./tableStock"; // นำเข้า TableItem

export function NavStock() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(""); // สถานะของสาขาที่เลือก

  const handleClick = () => {
    setIsModalOpen(true); // เปิด Modal
  };

  const handleClose = () => {
    setIsModalOpen(false); // ปิด Modal
  };

  const handleBranchChange = (branchId) => {
    setSelectedBranch(branchId); // เปลี่ยนสาขาที่เลือก
  };

  return (
    <div className="bg-white p-4 flex flex-col w-full space-y-4">
      {/* Select Box */}
      <div className="flex space-x-4 items-center">
        <select
          className="border p-2 rounded-md w-1/4 shadow-md"
          value={selectedBranch}
          onChange={(e) => handleBranchChange(e.target.value)}
        >
          <option value="">เลือกสาขาทั้งหมด</option>
          <option value="1">สมุทรสาคร(โคกขาม)</option>
          <option value="2">ชลบุรี(บ้านเก่า)</option>
          <option value="3">ปทุมธานี(นพวงศ์)</option>
        </select>

        <div className="w-1/4">
          <input
            className="border p-2 rounded-md w-full shadow-md"
            placeholder="ค้นหาประเภทสินค้า"
            type="text"
          />
        </div>

        <div className="w-1/4">
          <button
            className="bg-orange-400 border p-2 rounded-md w-full shadow-md hover:bg-green-400 hover:text-white transition duration-300"
            onClick={handleClick}
          >
            เพิ่มสินค้า
          </button>
        </div>
      </div>

      {/* เรียกใช้ EditModal */}
      <EditModal isModalOpen={isModalOpen} handleClose={handleClose} />

      {/* ส่ง handleBranchChange และ selectedBranch ไปยัง TableItem */}
      <div className="overflow-x-auto">
        <TableItem
          selectedBranch={selectedBranch}
        />
      </div>
    </div>
  );
}

export default NavStock;