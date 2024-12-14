import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Modal_Outbound_SweetAlert() {
  const data = [
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 2, name: "text", size: 20, amount: 15 },
    { no: 3, name: "text", size: 30, amount: 50 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 2, name: "text", size: 20, amount: 15 },
    { no: 3, name: "text", size: 30, amount: 50 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 2, name: "text", size: 20, amount: 15 },
    { no: 3, name: "text", size: 30, amount: 50 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 2, name: "text", size: 20, amount: 15 },
    { no: 3, name: "text", size: 30, amount: 50 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 2, name: "text", size: 20, amount: 15 },
    { no: 3, name: "text", size: 30, amount: 50 },
  ];

  const handleOpenModal = () => {
    MySwal.fire({
      title: "<h2>เลือกสินค้า</h2>",
      html: (
        <div className="flex flex-col items-center">
          {/* Search */}
          <div className="flex items-center justify-around w-3/4">
            <span>รหัสสินค้า: </span>
            <div className="p-4 w-2/4">
              <input
                type="text"
                placeholder="รหัสสินค้า"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button className="bg-blue-900 w-1/4 p-2 rounded-md text-white">
              ค้นหา
            </button>
          </div>

          {/* Table */}
          <div className="overflow-y-auto max-h-[500px] no-scrollbar w-3/4 border-2 border-blue-500 rounded-md">
            <table className="w-full text-center">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="border-b border-blue-500">
                  <th className="px-4 py-2">รหัสสินค้า</th>
                  <th className="px-4 py-2">ชื่อสินค้า</th>
                  <th className="px-4 py-2">ขนาด</th>
                  <th className="px-4 py-2">คงเหลือ</th>
                  <th className="px-4 py-2">เลือก</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, key) => (
                  <tr key={key} className="border-b border-blue-500">
                    <td className="px-4 py-2">{item.no}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.size}</td>
                    <td className="px-4 py-2 text-red-500">{item.amount}</td>
                    <td className="px-4 py-2">
                      <input type="radio" name="selectedProduct" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-center p-4 border-t w-3/4">
            <button className="px-4 py-2 bg-[#31AB31] text-white rounded-md mr-2 w-1/4 text-center">
              ยืนยัน
            </button>
          </div>
        </div>
      ),
      showConfirmButton: false, // ปิดปุ่ม "OK" ของ SweetAlert2
      customClass: {
        popup: "rounded-lg w-[900px] h-[800px] p-4 relative",
        closeButton: "absolute top-2 right-2 text-2xl cursor-pointer",
      },
      didOpen: () => {
        // เพิ่มปุ่ม "X" ที่มุมขวาบน
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "×";
        closeButton.classList.add("absolute", "top-2", "right-2", "text-2xl", "cursor-pointer");
        closeButton.addEventListener("click", () => MySwal.close());
        document.querySelector(".swal2-popup").appendChild(closeButton);
      },
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleOpenModal}
      >
        เปิด Modal
      </button>
    </div>
  );
}
