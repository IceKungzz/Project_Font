import React from "react";
import { formatDate } from "../../Components/Layout_Components/Datetimeshow";

export function Outbound(props) {
  return (
    <div className="w-full h-[90%] flex overflow-auto no-scrollbar">
      <div className="w-full h-full grid grid-cols-5">
        <div className="col-span-2 w-full h-full grid grid-rows-4 ">
          <div className="w-full h-full row-span-3 grid grid-rows-7 p-3">
            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                สาขา:
              </span>
              <select
                name=""
                id=""
                className="col-span-2 xl:col-span-3 h-2/4 rounded-md border border-gray-500"
              >
                <option value="">ชลบุรี</option>
              </select>
            </div>

            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                นามลูกค้า/ชื่อบริษัท:
              </span>
              <input
                type="text"
                className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"
              />
            </div>

            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                ชื่อไซต์งาน:
              </span>
              <input
                type="text"
                className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"
              />
            </div>

            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                ที่อยู่ลูกค้า:
              </span>
              <input
                type="text"
                className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"
              />
            </div>

            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                วันที่เริ่มเช่า-ขาย:
              </span>
              <input
                type="date"
                className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"
              />
            </div>

            <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
              <span className="col-span-1 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">
                ระยะเวลา:
              </span>
              <input
                type="text"
                className="col-span-2 xl:col-span-2 h-2/4 rounded-md p-2 border border-gray-500"
              />
              <span className="col-span-1 xl:col-span-1 text-[16px] xl:text-[20px]">
                วัน
              </span>
            </div>

            <div className=" row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2 text-white">
              <div className=" col-span-1 "></div>
              <div className=" col-span-3 h-full flex justify-around items-center gap-2">
                <button className="w-2/4 bg-[#31AB31] h-3/4 rounded-md">
                  <i className="fa-solid fa-plus mr-2"></i>เพิ่มสินค้า
                </button>
                <button className="w-2/4 bg-[#909090] h-3/4 rounded-md">
                <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-1 flex justify-start items-end text-white">
            <button className="bg-[#909090] w-1/4 p-2 rounded-md">
              <i className="fa-solid fa-file-pen mr-2"></i>จองสินค้า
            </button>
          </div>
        </div>

        <div className="col-span-3 min-w-full h-full grid grid-rows-5 overflow-hidden ">
          <div className="row-span-4 border border-black min-w-full p-6  rounded-md grid grid-rows-6 ">
            <div className=" min-w-full row-span-1 grid grid-rows-2 grid-cols-3">
              <span className=" col-span-1 row-span-1 flex justify-start items-center">
                ห้างหุ้นส่วนจำกัด ภัทรชัย แบบเหล็ก
              </span>
              <span className="row-span-2 col-span-1 text-[24px] flex items-center justify-center">
                รายการส่งออกสินค้า
              </span>
              <span className=" col-span-1"></span>
              <span className="bg-green-500col-span-1 flex justify-start items-center">สาขา: ชลบุรี</span>
              <span className=" col-span-1 row-span-1 flex justify-end items-center">
                {formatDate()}
              </span>
            </div>

            <div className="row-span-1 grid grid-rows-[1fr_1fr_2fr] grid-cols-4">
              <span className=" col-span-4 row-span-1 flex justify-start items-center">
                <b>นามลูกค้า/ชื่อบริษัท:</b> คุณพรทิพย์
              </span>
              <span className=" col-span-1 row-span-1 flex justify-start items-center">
                ชื่อไซต์งาน: โรง2
              </span>
              <span className="col-span-1 row-span-1 flex justify-start items-center">
                ระยะทาง: 52 กิโลเมตร
              </span>
              <span className=" col-span-1 row-span-1 flex justify-center items-center">
                เริ่มเช่า: 27 พ.ย. 57
              </span>
              <span className=" col-span-1 row-span-1 flex justify-end items-start">
                สิ้นสุดเช่า: 03 ธ.ค.67
              </span>
              <span className=" col-span-3 row-span-1 w-full flex">
                <div className=" w-1/4 h-full flex items-start">ที่อยู่ลูกค้า:</div>
                <div className="w-3/4 text-[15px] h-full font-bold flex items-start">
                  บริษัท 123 จำกัด เลขที่ 22/11 หมู่ 1 ถนนลาดยาว ตำบลสองเสน
                  อำเภอศรีราชา จังหวัดชลบุรี
                </div>
              </span>
              <span className="col-span-1 flex justify-end">ระยะเวลาเช่า: 7 วัน</span>
            </div>

            <div className=" row-span-3 overflow-auto no-scrollbar border-b-4">
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


            <div className="row-span-1 grid grid-rows-3 grid-cols-4">

              <div className=" col-span-4 grid grid-cols-4">
                <div className="col-span-2  flex justify-around items-center">
                  <span className="">รวมรายการสินค้าที่ส่งออกทั้งหมด</span> 
                  <span>2 รายการ</span>
                </div>
                <div className="col-span-2  grid grid-cols-3 items-center">
                  <span className="w-full h-full flex items-center justify-end">ราคารวม</span>
                  <span className=" h-full flex items-center justify-end">13000.00</span>
                  <span className=" h-full flex items-center justify-center">บาท</span>
                </div>
              </div>

              <div className=" col-span-4 grid grid-cols-4">
                <div className="col-span-2"></div>
                <div className="col-span-2  grid grid-cols-3 items-center">
                  <span className=" w-full h-full flex items-center justify-end">ภาษีมูลค่าเพิ่ม(7%)</span>
                  <span className="w-full h-full flex items-center justify-end">910.00</span>
                  <span className="w-full h-full flex items-center justify-center">บาท</span>
                </div>
              </div>

              <div className=" col-span-4 grid grid-cols-4">
                <div className="col-span-2"></div>
                <div className="col-span-2  grid grid-cols-3 items-center">
                  <span className=" w-full h-full flex items-center justify-end">ราคาสุทธิ</span>
                  <span className="w-full h-full flex items-center justify-end">13910.00</span>
                  <span className="w-full h-full flex items-center justify-center">บาท</span>
                </div>
              </div>

            </div>

          </div>

          <div className="row-span-1 grid grid-rows-2 grid-cols-4">
            <div className=" row-span-1 col-span-4 p-3">
              <input type='radio' name='vat' />  มีภาษีมูลค่าเพิ่ม
              <input type='radio' name='vat' className="ml-3"/>  ไม่มีภาษีมูลค่าเพิ่ม
            </div>
            <div className=" row-span-1 col-span-4 flex justify-center items-center gap-4 text-white">
              <button className="bg-[#133E87] w-2/6 p-2 rounded-md"><i className="fa-solid fa-floppy-disk mr-2"></i>บันทึก</button>
              <button className="bg-[#A62628] w-2/6 p-2 rounded-md"><i className="fa-solid fa-x mr-2"></i>ยกเลิก</button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
