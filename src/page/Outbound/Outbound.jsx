import React, { useState } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


export function Outbound() {

  const menu = [
    { title: 'นามลูกค้า/ชื่อบริษัท:', type: "text" },
    { title: 'ชื่อไซต์งาน:', type: "text" },
    { title: 'ที่อยู่ลูกค้า:', type: "text" },
    { title: 'วันที่เริ่มเช่า-ขาย:', type: "date" },
  ];

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
      if (amount <= 0) return; 
  
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
      title: "เลือกสินค้า",
      html: (
        <div className="flex flex-col items-center">
          {/* Search */}
          <div className="flex items-center justify-around w-3/4">
            <span className='text-black font-bold'>รหัสสินค้า: </span>
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
                <tr className="border-b border-blue-500 text-[#133E87] font-bold">
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
        title:'font-bold text-[#133E87]'
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
    });
  };


  const handleOpenModal_Create_Product = () => {
    MySwal.fire({
      title: "เลือกสินค้า",
      html: (
        <div className="flex flex-col items-center">
          {/* Search */}
          <div className="flex items-center justify-around w-3/4">
            <span className='font-bold text-black'>รหัสสินค้า: </span>
            <div className="p-4 w-1/4">
              <input
                type="text"
                placeholder="รหัสสินค้า"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <span className='font-bold text-black'>ชื่อสินค้า: </span>
            <div className="p-4 w-1/4">
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
          <div className='w-3/4 text-start text-[#133E87] font-bold mb-2'>
              เลือกสินค้าเพื่อเพิ่มรายการใหม่
          </div>

          {/* Table */}
          <div className="overflow-y-auto min-h-[500px] max-h-[500px] no-scrollbar w-3/4 border-2 border-blue-500 rounded-md">
            <table className="w-full text-center">
              <thead className="sticky top-0 bg-white z-10">
                <tr className="border-b border-blue-500 text-[#133E87] font-bold">
                  <th className="px-4 py-2">รหัสสินค้า</th>
                  <th className="px-4 py-2">ชื่อสินค้า</th>
                  <th className="px-4 py-2">ขนาด</th>
                  <th className="px-4 py-2">คงเหลือ</th>
                  <th className="px-4 py-2">จำนวน</th>
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
        title:'font-bold text-[#133E87]'
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
    });
  };

  

  return (
    <div className='w-full h-[90%] mt-5'>
      <div className='w-full h-[100%] grid grid-cols-5 overflow-auto no-scrollbar '>

        <div className="col-span-2 grid grid-rows-6 ">

          <div className='row-span-4 items-center text-base '>

            <div className='grid justify-end items-center grid-cols-4 '>
              <span className="col-span-1 grid justify-end pr-2">
                สาขา:
              </span>
              <select name="" id="" className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500" >
                <option value="">ชลบุรี</option>
                <option value="">ระยอง</option>
              </select>
            </div>

            {menu.map((item, index) => (
              <div key={index} className='grid justify-end items-center grid-cols-4 pt-10 '>
                <span className="col-span-1 grid justify-end  pr-2">
                  {item.title}
                </span>
                <input
                  type={item.type}
                  className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500"
                />
              </div>
            ))}

            <div className='grid justify-end items-center grid-cols-4 pt-10 '>
              <span className="col-span-1 grid justify-end pr-2 ">
                ระยะเวลา:
              </span>
              <input
                type="text"
                className="col-span-2 h-10 rounded-lg border border-gray-500 "
              />
              <span className="col-span-1 pl-5">
                วัน
              </span>
            </div>

            <div className='grid grid-cols-8 pt-10 '>
              <span className='col-span-2 '></span>
              <button className="col-span-3 w-[80%] bg-[#31AB31] h-10 rounded-md text-white hover:bg-[#2a7e2d] transition duration-300"
                onClick={handleOpenModal}
              >
                <i className="fa-solid fa-plus mr-2"></i>จองสินค้า
              </button>
              <button className="col-span-3 w-[80%] bg-[#909090] h-10 rounded-md text-white hover:bg-[#707070] transition duration-300" 
              onClick={handleOpenModal_Create_Product}
              >
                <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
              </button>
            </div>

          </div>

        </div>

        <div className="col-span-3 grid grid-rows-6">
          <div className='row-span-5 grid grid-rows-4 border border-gray-500 rounded-lg '>

            <div className='row-span-1 grid grid-cols-3 grid-rows-6 pl-4 pr-4 pt-1'>
              <span className='col-span-1 grid justify-start items-center '>ห้างหุ้นส่วนจำกัด ภัทรชัย แบบเหล็ก</span>
              <span className='col-span-1 row-span-2 grid justify-center items-center text-xl font-bold'>รายการส่งออกสินค้า</span>
              <span className='col-span-1 '></span>
              <span className='col-span-1 grid justify-start items-center'>สาขา: ชลบุรี</span>
              <span className='col-span-1 grid justify-end items-center'>12 ธันวาคม 2567</span>
              <span className='col-span-3 grid justify-start items-center'>นามลูกค้า/ชื่อบริษัท:
                คุณพรทิพย์</span>
              <span className='col-span-1 grid justify-start items-center'>ชื่อไซต์งาน: โรง2</span>
              <span className='col-span-1 grid justify-end items-center'>เริ่มเช่า: 27 พ.ย. 57</span>
              <span className='col-span-1 grid justify-end items-center'>สิ้นสุดเช่า: 03 ธ.ค.67</span>
              <span className='col-span-2 row-span-2 grid grid-cols-7'>
                <span className='col-span-1'>ที่อยู่ลูกค้า:</span>
                <span className='col-span-6'>บริษัท 123 จำกัด เลขที่ 22/11 หมู่ 1 ถนนลาดยาว ตำบลสองเสน อำเภอศรีราชา จังหวัดชลบุรี</span>
              </span>
              <span className='col-span-1 grid justify-end items-center'>ระยะเวลาเช่า: 7 วัน</span>
            </div>

            <div className='row-span-3 grid grid-rows-3'>
              <div className=' row-span-3 overflow-auto no-scrollbar border-b-4 flex justify-center items-start mr-3 ml-3'>
                <table className="w-full table-auto text-center border-collapse border-t-2">
                  <thead className="font-bold  bg-white sticky top-0 border-b-2">
                    <tr>
                      <th className="px-4 py-2">ลำดับ</th>
                      <th className="px-4 py-2">รายการ</th>
                      <th className="px-4 py-2">ขนาด</th>
                      <th className="px-4 py-2">รูปแบบ</th>
                      <th className="px-4 py-2">จำนวน</th>
                      <th className="px-4 py-2">ราคา</th>
                      <th className="px-4 py-2">รวม</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">M04 แบบเสาสี่เหลี่ยม</td>
                      <td className="px-4 py-2">100*100</td>
                      <td className="px-4 py-2">
                        <select
                          name="model"
                          id=""
                          className="px-4 py-2 text-center "
                        >
                          <option value="">เช่า</option>
                          <option value="">ซื้อ</option>
                        </select>
                      </td>
                      <td className="px-4 py-2">
                        <input type="number" className="px-2 py-2 text-center " />
                      </td>
                      <td className="px-4 py-2 ">2,000.00</td>
                      <td className="px-4 py-2">4,000.00</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">D10 แบบคาน</td>
                      <td className="px-4 py-2">10*100</td>
                      <td className="px-4 py-2">
                        <select
                          name="model"
                          id=""
                          className="px-4 py-2 text-center "
                        >
                          <option value="">เช่า</option>
                          <option value="">ซื้อ</option>
                        </select>
                      </td>
                      <td className="px-4 py-2">
                        <input type="number" className="px-2 py-2 text-center" />
                      </td>
                      <td className="px-4 py-2">3,000.00</td>
                      <td className="px-4 py-2">9,000.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className='row-span-1 grid grid-cols-6 grid-rows-3'>
              <span className="col-span-3 row-span-3 grid grid-cols-5 p-1">
                <span className='col-span-3 grid justify-end'>
                  รวมรายการสินค้าที่ส่งออกทั้งหมด
                </span>
                <span className='col-span-1 grid justify-center'>
                  1
                </span>
                <span className='col-span-1 grid justify-start'>
                  รายการ
                </span>
              </span>
              <span className="col-span-3 row-span-3 grid grid-cols-4 ">
                <span className='col-span-1 '></span>
                <span className='col-span-1 grid justify-end p-1'>ราคารวม</span>
                <span className='col-span-1 grid justify-end p-1'>120000.00</span>
                <span className='col-span-1 grid justify-start p-1'>บาท</span>

                <span className='col-span-2 grid justify-end p-1'>ภาษีมูลค่าเพิ่ม (7%)</span>
                <span className='col-span-1 grid justify-end p-1'>1200.00</span>
                <span className='col-span-1 grid justify-start p-1'>บาท</span>
                <span className='col-span-1'></span>
                <span className='col-span-1 grid justify-end p-1'>ราคาสุทธิ</span>
                <span className="col-span-1 grid justify-end p-1 underline"> 1200.00</span>
                <span className='col-span-1 grid justify-start p-1'>บาท</span>
              </span>
            </div>

          </div>

          <div className='row-span-1 grid grid-rows-3 '>
            <div className=" row-span-1   flex items-center">
              <input type='radio' name='vat' />  มีภาษีมูลค่าเพิ่ม
              <input type='radio' name='vat' className="ml-3" />  ไม่มีภาษีมูลค่าเพิ่ม
            </div>
            <span></span>
            <div className=" row-span-1  items-center justify-center grid grid-cols-2 text-white">
              <span className='col-span-1 flex  justify-end pr-2'>
              <button className=" bg-[#133E87] w-2/6 p-2 rounded-md hover:bg-[#172c4f] transition duration-300"><i className="fa-solid fa-floppy-disk mr-2"></i>บันทึก</button>
              </span>
              <span className='col-span-1 flex  justify-start pl-2'>
              <button className="bg-[#A62628] w-2/6 p-2 rounded-md hover:bg-[#762324] transition duration-300"><i className="fa-solid fa-x mr-2"></i>ยกเลิก</button>
              </span>
              
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
