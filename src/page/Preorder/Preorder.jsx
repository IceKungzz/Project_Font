import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import thaiBahtText from 'thai-baht-text';

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

  const [data, setData] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    axios
      .get("http://192.168.195.75:5000/v1/product/status/status-one/63", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "x-api-key": "1234567890abcdef",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data);
          setProducts(res.data.data.products)
          console.log(res.data.data);
          
        }
      });
  }, []);

  const num = [1, 2, 3, 4, 5, 6];

  const formatThaiBahtText = (value) => {
    if (isNaN(Number(value)) || value === null || value === undefined) {
      return 'Invalid input';
    }
    return thaiBahtText(Number(value));
  };

  
  

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
            <span className="font-bold">ชื่อผู้ติดต่อ:</span> {data.customer_name}
          </p>
          <p>
            <span className="font-bold">ชื่อร้านค้า:</span> {data.place_name}
          </p>
          <p>
            <span className="font-bold">ที่อยู่:</span> {data.address}
          </p>
          <p>
            <span className="font-bold">โทร:</span> -
          </p>
        </div>

        <div className="col-span-1 print:col-span-1 border-t-2 border-b-2 border-r-2 border-black grid grid-cols-2 grid-rows-4 text-sm print:text-[9px] items-center">
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            เลขที่ :
          </p>{" "}
          <p className="border-b-2 border-black text-center">{data.export_number}</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            วันที่เสนอราคา :
          </p>{" "}
          <p className="border-b-2 border-black text-center">{data.created_at}</p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center">
            ยืนราคาภายใน(วัน) :
          </p>{" "}
          <p className="border-b-2 border-black text-center">{data.date} วัน</p>
          <p className="col-span-1  border-r-2 border-black text-center">
            เงื่อนไขการชำระเงิน :
          </p>{" "}
          <p className=" border-black text-center">เงินสด/โอน</p>
        </div>
      </div>

      {/* Table */}
      <div className="h-[230px] text-sm grid grid-cols-10 grid-rows-11 print:text-[9px]">
        {/* หัวตาราง */}
        <div className=" h-full w-full row-span-11 border-r-2 border-l-2 border-black flex flex-col text-center">
          <span className=" border-b-2 border-t-2 border-black">ลำดับ</span>
          {products.map((product, index) => (
            <span key={index}>{index+1}</span>
          ))}
        </div>
        <div className=" h-full w-full col-span-4 row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="  border-b-2 border-t-2 border-black">รายการ</span>
          {products.map((product, index) => (
            <span key={index}>{product.product_name}</span>
          ))}
        </div>
        <div className=" h-full w-full  row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="  border-b-2 border-t-2 border-black">จำนวน</span>
          {products.map((product, index) => (
            <span key={index}>{product.quantity}  {product.unit}</span>
          ))}
        </div>
        <div className="bg-red-500 h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="bg-green-500  border-b-2 border-t-2 border-black">ค่าเช่า/วัน</span>
          <span>40.00</span>
        </div>
        <div className="bg-red-600 h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="bg-green-500  border-b-2 border-t-2 border-black">จำนวนวัน</span>
          <span>3</span>
        </div>
        <div className="bg-red-700 h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="bg-green-500  border-b-2 border-t-2 border-black">ค่าปรับสินค้า/ชิ้น</span>
          {products.map((product, index) => (
            <span key={index}>{data.guarantee_price}</span>
          ))}
        </div>

        <div className="bg-red-800 h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="bg-green-500  border-b-2 border-t-2 border-black">จำนวนเงินรวม</span>
          <span>1920.00</span>
        </div>
        {/* ข้อมูลในตาราง */}

      </div>
      {/* ส่วนเงื่อนไข */}
      <div className=" grid grid-cols-10 grid-rows-14 h-[350px] text-[9px]">
          {/* เงื่อนไขซ้ายมือ */}
          <div className="col-span-7 row-span-11 grid grid-rows-11 border-2 border-black text-[9px] print:text-[8px] p-1">
              <span className="row-span-1">เงื่อนไขการเช่าสินค้า/โปรดอ่านเงื่อนไขก่อนทำการเช่าสินค้า</span>
              <span className="row-span-1">1.ผู้เช่าจะต้องชำระค่าเช่า เงินประกัน และค่าใช้จ่ายอื่นๆตามที่ตกลงในใบเสนอราคา ก่อนวันรับสินค้า</span>
              <span className="row-span-1">2.ทางร้านจะทำการจัดส่งสินค้าให้หลังจากมีการชำระเงินครบตามจำนวนที่ตกลงกันไว้</span>
              <span className="row-span-1">3.การรับสินค้าผู้เช่าจะต้องเป็นผู้รับภาระในค่าขนส่ง ดดยคิดจากระยะทางส่งตามจริงและไม่สามารถเรียกเก็บค่าใช้จ่ายบใดๆจากผู้ให้เช่าทั้งสิ้น</span>
              <span className="row-span-1">4.หากสินค้าเช่าเกิดความเสียหายหรือสูญหายผู้ให้เช่าจะทำการปรับเงินตามราคาสินค้าที่แจ้งไว้จากผู้เช่า</span>
              <span className="row-span-1">5.ผู้เช่าสามารถเช่าขั้นต่ำได้ 3 วันเท่านั้น-วันส่งสินค้าทางร้านจะไม่คิดค่าเช่า และจะเริ่มคิดวันถัดไป วันรับคืนสินค้าคิดค่าเช่าตามปกติ</span>
              <span className="row-span-1">6.หากผู้เช่าต้องการต่อสัญญา ผู้เช่าต้องแจ้งผู้ให้เช่าทราบล่วงหน้าอย่างน้อย 1-2วัน ก่อนหมดสัญญาเช่า หากไม่แจ้งล่างหน้า </span>
              <span className="row-span-1">ผู้ให้เช่าจะทำการเก็บสินค้ากลับในวันที่ครบกำหนดทันที หากผู้เช่ายังไม่รื้้อของเช่า ผู้ให้เช่าจะทำการรื้อถอนด้วยตนเอง</span>
              <span className="row-span-1">และจะไม่รับผิดชอบต่อความเสียหายใดๆ เพราะถือว่าผู้ให้เช่าผิดสัญญาเช่าต่อผู้ให้เช่า และทำการยึดค่ามัดจำทั้งหมด</span>
              <span className="row-span-1">7.กรณีต่อสัญญาเช่าสินค้า ผู้เช่าต้องชำระค่าต่อสัญญาเช่าภายใน 1-2วันหลังต่อสัญญาเช่า และไม่สามารถนำมาหักเงินประกันได้</span>
              <span className="row-span-1">8.ผู้เช่าต้องเป็นผู้กำเนินการเคลื่อนย้ายสินค้าเองทุกครั้ง หากไม่เคลื่อนย้ายสินค้าเอง ผู้เช่าจะต้องจ่ายค่าบริการเคลื่อนย้ายสินค้าให้แก่ผู้ให้เช่า</span>
          </div>
          {/* row7 */}
          <div className=" border-r-2 col-span-1 row-span-7 border-black"></div>
          <div className=" border-r-2 col-span-1 row-span-7 border-black"></div>
          <div className=" border-r-2 col-span-1 row-span-7 border-black"></div>
          <span className="col-span-2 row-span-1 border-t-2 border-r-2 border-b-2 border-black flex items-center pl-1">รวมเงิน</span>
          <span className="border-t-2 border-b-2 border-r-2 border-black flex items-center justify-center ">2073.60</span>
          <span className="col-span-2 row-span-1  border-r-2 border-b-2 border-black flex items-center pl-1">ส่วนลด</span>
          <span className=" border-b-2 border-r-2 border-black flex items-center justify-center ">-</span>
          <span className="col-span-2 row-span-1  border-r-2 border-b-2 border-black flex items-center pl-1">รวมหลังหักส่วนลด</span>
          <span className=" border-b-2 border-r-2 border-black flex items-center justify-center ">2073.60</span>
          <span className="col-span-2 row-span-1  border-r-2 border-b-2 border-black flex items-center pl-1">ค่าขนส่งสินค้าไป-กลับ</span>
          <span className=" border-b-2 border-r-2 border-black flex items-center justify-center ">{data.shipping_cost}</span>

          <div className=" col-span-7 row-span-2 border-r-2 border-l-2 border-b-2 border-black print:p-1">
            <u>หมายเหตุ:</u> ขนส่งสินค้าโดยรถกะบะไป-กลับ 2 รอบ/หน้างานช่วยขึ้นลง
          </div>
          <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1">ค่าบริการเคลื่อนย้ายสินค้า</span>
          <span className="col-span-1 row-span-1 border-b-2 border-r-2 border-black flex justify-center items-center">{data.shipping_cost}</span>
          <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1">ค่าประกันสินค้า</span>
          <span className="col-span-1 row-span-1 border-b-2 border-r-2 border-black flex justify-center items-center">5000.00</span>

          <div className="col-span-7 row-span-1 p-1 flex justify-center items-center font-bold border-r-2 border-b-2 border-l-2 border-black">
            {formatThaiBahtText(data.total_price_out)}
          </div>
          <span className="col-span-2 row-span-1 border-b-2 border-r-2 border-black flex items-center p-1">รวมยอดเงินที่ต้องชำระ</span>
          <span className="col-span-1 row-span-1 border-r-2 border-b-2 border-black flex justify-center items-center">{data.total_price_out}</span>

      </div>

      <div className="grid grid-cols-10 h-[100px] border-b-2 border-r-2 border-l-2 border-black text-[9px]">
        <div className=" col-span-5 border-r-2 border-black flex flex-col p-5 justify-around items-center">
          <div>
            <b>ผู้อนุมัติ:</b>
            <span>__________________________________________</span>
          </div>
          <div>
            <b>ลงวันที่:</b>
            <span>__________________________________________</span>
          </div>
        </div>

        <div className="col-span-5 flex flex-col p-5 justify-around items-center">
          <div>
              <b>ผู้เสนอ:</b>
              <span>__________________________________________</span>
            </div>
            <div>
              <b>ลงวันที่:</b>
              <span>__________________________________________</span>
            </div>
        </div>

      </div>
      
    <button className='bg-blue-500 w-full p-3 print:hidden mt-3 text-[24px]' onClick={window.print}>PRINT</button>
    </div>
  );
}
