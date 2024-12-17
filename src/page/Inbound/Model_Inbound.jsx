import React, { useState } from "react";

export function Modal_Inbound({ close, confirm }) {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    size: '',
    meter: '',
    centimeter: '',
    price3D: '',
    price30D: '',
    price_sell: '',
    price_damage: '',
    unit: '',
    remark: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const confirm_item = () => {
    console.log(formData);
    confirm(formData);
    close();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-40 z-50">
      <div className="bg-white w-[900px] h-[800px] rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 bg-blue-600 text-white">
          <h2 className="text-2xl font-bold">เลือกสินค้า</h2>
          <button
            className="text-lg hover:text-red-300 transition"
            onClick={close}
          >
            ✖
          </button>
        </div>

        {/* Form Section */}
        <div className="p-8 overflow-y-auto flex-grow">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {[
              { label: "รหัสสินค้า", name: "code" },
              { label: "ชื่อสินค้า", name: "name" },
              { label: "ขนาดสินค้า", name: "size" },
              
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-2">
                  {field.label}:
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}

            {/* Custom Inputs for Meter and Centimeter */}
            <div className="flex items-center gap-x-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  เมตร:
                </label>
                <input
                  type="text"
                  name="meter"
                  value={formData.meter}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-600 mb-2 block">
                  เซนติเมตร:
                </label>
                <input
                  type="text"
                  name="centimeter"
                  value={formData.centimeter}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            {[
              
              { label: "ราคาเช่า 3 วัน", name: "price3D" },
              { label: "ราคาเช่า 30 วัน", name: "price30D" },
              { label: "ราคาขาย", name: "price_sell" },
              { label: "ราคาค่าปรับ", name: "price_damage" },
              { label: "หน่วย", name: "unit" },
              { label: "หมายเหตุ", name: "remark" }
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-2">
                  {field.label}:
                </label>
                <input
                  type="text"
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full h-12 px-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-100 flex justify-center border-t">
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-md text-lg font-medium hover:bg-green-600 active:bg-green-700 transition w-1/4"
            onClick={confirm_item}
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
}
