import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Modal_Outbound_SweetAlert({ onOpen, onclose }) {
  const data = [
    { no: 1, name: "text1", size: 10, amount: 26 },
    { no: 2, name: "text2", size: 20, amount: 15 },
    { no: 3, name: "text3", size: 30, amount: 50 },
    { no: 4, name: "text4", size: 40, amount: 26 },
    { no: 5, name: "text5", size: 50, amount: 15 },
    { no: 6, name: "text6", size: 10, amount: 26 },
    { no: 7, name: "text7", size: 20, amount: 15 },
    { no: 8, name: "text8", size: 30, amount: 50 },
    { no: 9, name: "text9", size: 40, amount: 26 },
    { no: 10, name: "text10", size: 50, amount: 15 },
    { no: 11, name: "text11", size: 10, amount: 26 },
    { no: 12, name: "text12", size: 20, amount: 15 },
    { no: 13, name: "text13", size: 30, amount: 50 },
    { no: 14, name: "text14", size: 40, amount: 26 },
    { no: 15, name: "text15", size: 50, amount: 15 },
  ];

  const [items, setItems] = useState([]);

  const SelectItem = (amount, newItem) => {
    if (amount <= 0) return; // Prevent zero or negative amounts

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.name === newItem);
      if (existingIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingIndex].amount = amount;
        return updatedItems;
      } else {
        return [...prevItems, { name: newItem, amount }];
      }
    });
  };

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
          <div className="overflow-y-auto min-h-[500px] max-h-[500px] no-scrollbar w-3/4 border-2 border-blue-500 rounded-md">
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
                      <input
                        type="number"
                        min={0}
                        className="w-[100px] p-2 text-center border border-black"
                        onChange={(e) => SelectItem(e.target.value, item.name)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="flex justify-center p-4 border-t w-3/4">
            <button
              className="px-4 py-2 bg-[#31AB31] text-white rounded-md mr-2 w-1/4 text-center"
              onClick={() => {
                console.log("Selected Items:", items);
                MySwal.close();
              }}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      ),
      showConfirmButton: false,
      customClass: {
        popup: "rounded-lg w-[900px] h-[800px] p-4 relative",
        closeButton: "absolute top-2 right-2 text-2xl cursor-pointer",
      },
      didOpen: () => {
        const closeButton = document.createElement("span");
        closeButton.innerHTML = "X";
        closeButton.classList.add("absolute", "top-4", "right-6", "text-2xl", "cursor-pointer");
        closeButton.addEventListener("click", () => {
          MySwal.close();
        });
        document.querySelector(".swal2-popup").appendChild(closeButton);
      },
      willClose: () => {
        if (onclose) onclose(); // Ensure onclose is properly invoked
        MySwal.close();
      },
    });
  };

  // ใช้ useEffect ตรวจสอบสถานะ onOpen
  useEffect(() => {
    if (onOpen) {
      // เปิด modal ใหม่ทุกครั้งที่ onOpen เป็น true
      handleOpenModal();
    }
  }, [onOpen]); // เมื่อ onOpen เปลี่ยนค่า

  return null;
}

export default Modal_Outbound_SweetAlert;
