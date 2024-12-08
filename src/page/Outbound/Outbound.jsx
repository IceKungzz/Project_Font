import React from "react";

export function Outbound(props) {
  return (
    <div className="w-full h-[90%] flex">
      {/* input left */}
      <div className="w-2/4">
        {/* input ด้านบน  */}
        <div className="w-full h-5/6 flex flex-col items-center p-4">
          <div className=" flex items-center justify-between p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px]">
              สาขา:
            </label>
            <select name="l" id="" className="inputclass_Outbound">
              <option value="">ชลบุรี</option>
            </select>
          </div>

          <div className=" flex items-center justify-between p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px]">
              นามลูกค้า/ชื่อบริษัท:
            </label>
            <input type="text" className="inputclass_Outbound" />
          </div>

          <div className=" flex items-center justify-between p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px]">
              ชื่อไซต์งาน:
            </label>
            <input type="text" className="inputclass_Outbound" />
          </div>

          <div className=" flex items-center justify-between p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px]">
              ที่อยู่ลูกค้า:
            </label>
            <input type="text" className="inputclass_Outbound" />
          </div>

          <div className=" flex items-center justify-between p-3 w-full ">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px] ">
              ระยะทาง:
            </label>
            <input
              type="text"
              className="w-1/4 p-2 mr-3 rounded-md outline-none border border-black"
            />
            <p className="w-1/4 text-[24px]">กิโลเมตร</p>
          </div>

          <div className=" flex items-center justify-between p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px] ">
              วันที่เริ่มเช่า-ขาย:
            </label>
            <input type="date" className="inputclass_Outbound" />
          </div>

          <div className=" flex items-center p-3 w-full">
            <label htmlFor="" className=" w-2/4 text-end pr-5 text-[24px] ">
              ระยะเวลา:
            </label>
            <input
              type="text"
              className="w-1/4 p-2 mr-3 rounded-md outline-none border border-black"
            />
            <p className="w-1/4 text-[24px] ">วัน</p>
          </div>

          <div className=" w-full p-5 flex itmes-center justify-end">
            <div className="w-2/4 flex items-center justify-between mr-3 p-1">
              <button className="bg-green-500 px-3 py-2 rounded-md w-2/4 mr-2 text-white">
                เพิ่มสินค้า
              </button>
              <button className="bg-gray-500 px-3 py-2 rounded-md w-2/4 ml-2 text-white">
                สร้างสินค้า
              </button>
            </div>
          </div>
        </div>
        {/* input ด้านบน  */}

        {/* ปุ่มด้านล่าง */}
        <div className="h-1/6 flex flex-col items-start justify-end p-4 ">
          <button className="bg-gray-400 px-3 py-2 rounded-md w-2/4">
            จองสินค้า
          </button>
        </div>

        {/* ปุ่มด้านล่าง */}
      </div>
      {/* input left */}

      {/* input right */}
      <div className="w-3/4 p-4">
        {/* form  */}
        <div className="w-full h-5/6 rounded-lg border border-black grid grid-rows-[1fr,3fr,1fr]">
          {/* header form  */}
          <div className="grid grid-rows-5 grid-cols-4 gap-0 bg-yellow-300">
            {/* ส่วนหัว */}
            <div className=" p-1 bg-red-500 flex justify-start items-center text-[16px] font-bold">
              ห้างหุ้นส่วนจำกัด ภัทรชัย แบบแหล็ก
            </div>

            <div className="row-span-2 col-span-2 flex items-center justify-center font-bold text-[20px] bg-red-200">
              รายการส่งออกสินค้า
            </div>

            <div className="bg-red-600"></div>

            <div className="p-1 bg-red-900  flex justify-start items-center text-[16px] row-span-1">
              <span className="font-bold mr-2">สาขา:</span> ชลบุรี
            </div>

            <div className="flex justify-center items-center pr-2 bg-red-700">
              26 ธันวาคม 2567
            </div>

            {/* ส่วนรายละเอียด */}
            <div className="p-1 bg-blue-600 col-span-4 flex justify-start items-center text-[16px]">
              <span className="font-bold mr-2">นามลูกค้า/ชื่อบริษัท:</span>
              คุณพรทิพย์
            </div>
            <div className="pl-1 flex justify-start items-center col-span-1 bg-green-100">
              <span className="font-bold mr-2">ชื่อไซต์งาน:</span> โรง 2
            </div>
            <div className="flex justify-center items-center bg-green-200">
              <span className="font-bold mr-2">ระยาทาง:</span> 52 กิโลเมตร
            </div>
            <div className="flex justify-center items-center bg-green-300">
              <span className="font-bold mr-2">เริ่มเช่า:</span> 27 พ.ย.67
            </div>
            <div className="flex justify-center items-center bg-green-400">
              <span className="font-bold mr-2">สิ้นสุดเช่า:</span> 03 ธ.ค.67
            </div>
            <div className="col-span-3 flex justify-start items-start pt-2 bg-green-500">
              <span className="pl-1 w-1/6 font-bold">ที่อยู่ลูกค้า:</span>
              <span className="w-5/6">
                บริษัท 123 จำกัด เลขที่ 22/11 หมู่ 1 ถนนลาดยาว ตำบลสองเสน
                อำเภอศรีราชา จังหวัดชลบุรี
              </span>
            </div>
            <div className="col-span-1 flex justify-center items-start pt-2 bg-green-600">
              <span className="font-bold">ระยะเวลาเช่า: 7 วัน</span>
            </div>
          </div>

          {/* ส่วน item  */}
          <div className="overflow-auto p-2">
            <table className="w-full table-auto text-center border-collapse">
              <thead className="font-bold  border-b-2">
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
                  <td className="px-4 py-2">เช่า</td>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">2,000.00</td>
                  <td className="px-4 py-2">4,000.00</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">D10 แบบคาน</td>
                  <td className="px-4 py-2">10*100</td>
                  <td className="px-4 py-2">ขาย</td>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">3,000.00</td>
                  <td className="px-4 py-2">9,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ส่วน summery  */}
          <div className="bg-yellow-400 grid grid-rows-3 text-[16px]">
            <div className='bg-blue-200 flex justify-start items-center w-full h-full'>
                <span className='bg-green-600 w-2/6 h-full flex justify-start items-center'>รวมรายการสินค้าที่ส่งออกทั้งหมด</span> 
                <span className='bg-yellow-300 w-1/6 h-full flex justify-start items-center'>2 รายการ</span> 
                <span className='w-3/6 bg-red-500 h-full flex justify-start items-center'>
                    <span className='bg-yellow-100 h-full w-1/3 flex justify-center items-center'>ราคารวม</span> 
                    <span className='bg-green-600 h-full w-1/3 flex justify-center items-center'>13000.00</span>
                    <span className='bg-blue-600 h-full w-1/3 flex justify-center items-center'>บาท</span>
                </span>
            </div>
            <div  className='bg-green-900 h-full flex  justify-end items-start w-full'>
                <div className='flex w-3/6 h-full justify-start items-center bg-black'>
                    <span className='bg-red-500 w-1/3 h-full flex items-center justify-center'>ภาษีมูลค่าเพิ่ม (7%)</span> 
                    <span className='bg-blue-900 w-1/3 h-full flex items-center justify-center'>910.00 </span>
                    <span className='bg-indigo-800 w-1/3 h-full flex items-center justify-center'>บาท</span> 
                </div>
            </div>
            <div  className='bg-blue-600 h-full flex  justify-end items-start w-full'>
                <div className='flex w-3/6 h-full justify-start items-center bg-black'>
                    <span className='bg-red-500 w-1/3 h-full flex items-center justify-center'>ราคาสุทธิ</span> 
                    <span className='bg-blue-900 w-1/3 h-full flex items-center justify-center'>13910.00 </span>
                    <span className='bg-indigo-800 w-1/3 h-full flex items-center justify-center'>บาท</span> 
                </div>
            </div>


          </div>
        </div>
        {/* form  */}

        {/* button  */}
        <div className="h-1/6 flex flex-col items-end justify-center p-4 gap-6">
          <div className="w-full p-2">
            <input type="radio" name="vat" className="mr-2" />
            <span className="mr-3">มีภาษีมูลค่าเพิ่ม 2 รายการ</span>
            <input type="radio" name="vat" className="mr-2" />
            <span>ไม่มีภาษีมูลค่าเพิ่ม</span>
          </div>

          <div className="w-full p-2 flex justify-center items-center gap-6">
            <button className="bg-blue-500 px-3 py-2 rounded-md w-1/4">
              บันทึกรายการ
            </button>
            <button className="bg-red-500 px-3 py-2 rounded-md w-1/4">
              ลบรายการ
            </button>
          </div>
        </div>
        {/* button  */}
      </div>
      {/* input right */}
    </div>
  );
}
