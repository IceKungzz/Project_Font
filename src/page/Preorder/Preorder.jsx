import React from "react";

export default function Quotation() {
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
              สาขา: โคกขาม 084-1571097 / นพวงศ์ 084-1571094 / ชลบุรี
              083-1653979
            </p>
          </div>
        </div>
        
        <div className="col-span-2 flex justify-center items-center">
          <div className="border-2 border-black text-center p-4">
            <p className="text-lg font-bold">ใบเสนอราคา</p>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="mb-2 grid grid-cols-3 print:grid-cols-2">
        <div className="col-span-2 border-2 border-black print:col-span-1 print:text-[9px] text-md p-2 print:p-2 flex flex-col justify-around">
          <p>
            <span className="font-bold">ชื่อผู้ติดต่อ:</span> คุณภัทราชู
          </p>
          <p>
            <span className="font-bold">ชื่อร้านค้า:</span> -
          </p>
          <p>
            <span className="font-bold">ที่อยู่:</span> หน้างาน - ระเบาะ-ลาดหลุมแก้ว/ปทุมธานี
          </p>
          <p>
            <span className="font-bold">โทร:</span> -
          </p>
        </div>

        <div className="col-span-1 print:col-span-1 border-t-2 border-b-2 border-r-2 border-black grid grid-cols-2 grid-rows-4 text-sm print:text-[9px] items-center">
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">เลขที่ :</p> <p className="border-b-2 border-black text-center">6711-001</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">วันที่เสนอราคา :</p> <p className="border-b-2 border-black text-center">31 ต.ค. 67</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">ยืนราคาภายใน(วัน) :</p> <p className="border-b-2 border-black text-center">-</p>
          <p className="col-span-1  border-r-2 border-black text-center">เงื่อนไขการชำระเงิน :</p> <p className=" border-black text-center">เงินสด/โอน</p>
        </div>
        
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-black mb-4">
        <thead>
          <tr>
            <th className="border border-black px-2 py-1">ลำดับที่</th>
            <th className="border border-black px-2 py-1">รายการ</th>
            <th className="border border-black px-2 py-1">จำนวน</th>
            <th className="border border-black px-2 py-1">ค่าเช่าต่อวัน</th>
            <th className="border border-black px-2 py-1">จำนวนวัน</th>
            <th className="border border-black px-2 py-1">ค่าเช่ารวม</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-2 py-1 text-center">1</td>
            <td className="border border-black px-2 py-1">แบบเสา 15*15*200 ซม.</td>
            <td className="border border-black px-2 py-1 text-center">16</td>
            <td className="border border-black px-2 py-1 text-right">40.00</td>
            <td className="border border-black px-2 py-1 text-center">3</td>
            <td className="border border-black px-2 py-1 text-right">2,000.00</td>
          </tr>
          <tr>
            <td className="border border-black px-2 py-1 text-center">2</td>
            <td className="border border-black px-2 py-1">น๊อคดาวน์ (1ตัว/ต้น)</td>
            <td className="border border-black px-2 py-1 text-center">256</td>
            <td className="border border-black px-2 py-1 text-right">0.20</td>
            <td className="border border-black px-2 py-1 text-center">3</td>
            <td className="border border-black px-2 py-1 text-right">153.60</td>
          </tr>
        </tbody>
      </table>

      {/* Summary */}
      <div className="text-right mb-4">
        <p>ยอดค่าเช่ารวม/วัน: 691.20 บาท</p>
        <p>รวมเงิน: 2,073.60 บาท</p>
        <p>ค่ามัดจำสินค้า: 5,000.00 บาท</p>
        <p className="font-bold">รวมยอดเงินที่ต้องชำระ: 8,473.60 บาท</p>
      </div>

      {/* Footer */}
      <div className="border-t-2 pt-4">
        <p>ผู้จอง: Walk in / หน้างาน</p>
        <p>ลงวันที่: 31 ต.ค. 67</p>
      </div>
    </div>
  );
}
