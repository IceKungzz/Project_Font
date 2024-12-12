import React from "react";

export default function Quotation() {
  const datatable = [
    {
      num: 1,
      order: "แบบเสาร์ 15*15*200 ซม",
      amount: "16 ต้น",
      price_day: "40",
      day: 3,
      price: 2000,
      sum: 1920.0,
    },
    {
      num: 2,
      order: "หนอน 16ตัว/ต้น",
      amount: "256 ต้น",
      price_day: "0.20",
      day: 3,
      price: 10,
      sum: 153.6,
    },
  ];

  const num = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-screen h-auto bg-white p-8">
      {/* Header */}
      <div className="grid grid-cols-5 border-b-2 pb-2 mb-2 print:mb-0 print:p-0">
        <div className="col-span-3 flex">
          <img
            src="img/logo.png"
            alt="logo"
            className="w-32 h-32 object-contain mr-4"
          />
          <div className="text-md print:text-[8px]">
            <h1 className="text-xl font-bold">ร้านภัทรชัย แบบเหล็ก</h1>
            <p>รับผลิต จำหน่ายและให้เช่า</p>
            <p>แบบคาน, แบบเสา, แบบหล่องานถนน, ฟุตติ้ง</p>
            <p>นั่งร้าน, ยูแจ็ค, แจ็คเบส, ฉาก, ป๊อปค้ำยัน</p>
            <p>แบบฐานเสาไฟ และแบบพิเศษสั่งทำทุกชนิด</p>
            <p>095-5862149 เปิ้ล</p>
            <p>
              สาขา: โคกขาม 084-1571097 / นพวงศ์ 084-1571094 / ชลบุรี 083-1653979
            </p>
          </div>
        </div>

        <div className="col-span-2 flex justify-end items-center">
          <div className="border-2 border-black text-center p-4 w-3/4 h-3/4 flex justify-center items-center">
            <p className="text-lg font-bold">ใบเสนอราคา</p>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-2 grid grid-cols-3 ">
        <div className="col-span-2 border-2 border-black print:col-span-2 print:text-[9px] text-md p-2 print:p-2 flex flex-col justify-around">
          <p>
            <span className="font-bold">ชื่อผู้ติดต่อ:</span> คุณภัทราชู
          </p>
          <p>
            <span className="font-bold">ชื่อร้านค้า:</span> -
          </p>
          <p>
            <span className="font-bold">ที่อยู่:</span> หน้างาน -
            ระเบาะ-ลาดหลุมแก้ว/ปทุมธานี
          </p>
          <p>
            <span className="font-bold">โทร:</span> -
          </p>
        </div>

        <div className="col-span-1 print:col-span-1 border-t-2 border-b-2 border-r-2 border-black grid grid-cols-2 grid-rows-4 text-sm print:text-[9px] items-center">
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            เลขที่ :
          </p>{" "}
          <p className="border-b-2 border-black text-center">6711-001</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            วันที่เสนอราคา :
          </p>{" "}
          <p className="border-b-2 border-black text-center">31 ต.ค. 67</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            ยืนราคาภายใน(วัน) :
          </p>{" "}
          <p className="border-b-2 border-black text-center">-</p>
          <p className="col-span-1  border-r-2 border-black text-center">
            เงื่อนไขการชำระเงิน :
          </p>{" "}
          <p className=" border-black text-center">เงินสด/โอน</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-yellow-500 h-[300px] grid grid-rows-12 text-sm print:text-[9px]">
        {/* หัวตาราง */}
        

          <table class="grid grid-cols-10 bg-blue-500">
            <thead>
              <tr>
                <th className="">ลำดับที่</th>
                <th className="">รายการ</th>
                <th>จำนวน</th>
                <th>ค่าเช่า/วัน</th>
                <th>จำนวนวัน</th>
                <th>ค่าปรับสินค้า/ชิ้น</th>
                <th>จำนวนเงินรวม</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
          

      </div>
    </div>
  );
}
