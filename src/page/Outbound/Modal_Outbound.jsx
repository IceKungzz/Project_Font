import React from "react";
import {useState} from 'react'

export function Modal_Outbound({onclose}) {

  const data = [
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
    { no: 1, name: "text", size: 10, amount: 26 },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 z-50">
      <div className="bg-white w-[900px] h-[800px] rounded-lg shadow-xl flex flex-col items-center">
        {/* Header */}
        <div className=" w-full flex justify-between items-center p-4">
          <div></div>
          <h2 className="text-lg font-semibold">เลือกสินค้า</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onclose}>X</button>
        </div>

        {/* Search */}
        <div className="flex items-center justify-around w-3/4">
          <span>รหัสสินค้า: </span>
          <div className="p-4 w-2/4">
            <input
              type="text"
              placeholder="รหัสสินค้า"
              className="w-full  border border-gray-300 rounded-md p-2"
            />
          </div>
          <button className="bg-blue-900 w-1/4 p-2 rounded-md text-white">
            ค้นหา
          </button>
        </div>

        {/* Table */}
        <div className="overflow-y-auto max-h-[600px] no-scrollbar w-3/4 border-2 border-blue-500 rounded-md">
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
                  <td className="px-4 py-2 text-center">
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
    </div>
  );
}
