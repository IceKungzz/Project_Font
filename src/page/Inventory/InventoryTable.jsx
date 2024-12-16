import React from "react";

function InventoryTable({ products, showEditIcons, onEditClick }) {
  
  return (
    <div className="w-full p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">ตารางสินค้าคงคลัง</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-500 text-white">
          <th className="px-4 py-2 border">ลำดับ</th>
            <th className="px-4 py-2 border">สาขา</th>
            <th className="px-4 py-2 border">รหัสสินค้า</th>
            <th className="px-4 py-2 border">ชื่อสินค้า</th>
            <th className="px-4 py-2 border">ขนาด</th>
            <th className="px-4 py-2 border">จำนวน</th>
            <th className="px-4 py-2 border">ราคา 3 วัน</th>
            <th className="px-4 py-2 border">ราคา 30 วัน</th>
            {showEditIcons && <th className="px-4 py-2 border">แก้ไข</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.branchName}</td>
              <td className="px-4 py-2 border flex">{item.code}<a href=""><img class="ms-3 mt-1 w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/2038/2038806.png"></img></a></td>
              <td className="px-4 py-2 border">{item.name}</td>
              <td className="px-4 py-2 border">{item.size}</td>
              <td className="px-4 py-2 border">{item.quantity}</td>
              <td className="px-4 py-2 border">{item.price3D}</td>
              <td className="px-4 py-2 border">{item.price30D}</td>
              {showEditIcons && (
                <td className="px-4 py-2 border">
                  <img
                    src="/imgoil/utr.png"
                    alt="Edit Icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => onEditClick(item.id)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
