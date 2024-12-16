import React, { useState, useEffect } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Modal_Outbound } from "./Modal_Outbound"
import { Modal_Create_Products } from './Modal_Create_Products';
const MySwal = withReactContent(Swal);


export function Outbound() {
  const [products, setProducts] = useState([])
  //ข้อมูลใน input 
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [workside,setWorkside] = useState('')
  const [sell_date, setSell_date] = useState('')
  const [day_length, setDay_Length] = useState('')
  //const [enddate, setEndDate] = useState('')
  //------------------------------------------------------
  const [items, setItems] = useState([]);
  const [showmodal, setShowmodal] = useState(false)
  const [showmodal_create_product,setShowmodal_create_product] = useState(false)
  const [confirmitem, setConfirmitem] = useState([])

  const menu = [
    { title: 'นามลูกค้า/ชื่อบริษัท:', type: "text",},
    { title: 'ชื่อไซต์งาน:', type: "text" },
    { title: 'ที่อยู่ลูกค้า:', type: "text" },
    { title: 'วันที่เริ่มเช่า-ขาย:', type: "date" },
  ];

  const today = new Date();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('th-TH', options);
  


  const handleConfirm = (items) => {
    // เพิ่ม key 'type' ด้วยค่าเริ่มต้น 'เช่า' ถ้าไม่มีในแต่ละ item
    const updatedItems = items.map(item => ({
      ...item,
      type: item.type || 'เช่า', // กำหนดค่า 'เช่า' ถ้าไม่มี type
    }));
  
    // อัพเดท state
    setConfirmitem(updatedItems);
  
    console.log("Confirmed items: ", updatedItems);
  };
  

  
  const handleDateChange = (dateValue) => {
    const date = new Date(dateValue); // แปลงค่าที่ได้จาก input type="date"
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    const formattedDate = date.toLocaleDateString('th-TH', options); // ฟอร์แมตวันที่เป็นไทย
    setSell_date(formattedDate); // เก็บค่าที่ฟอร์แมตแล้วใน state
  };
  
  const parseThaiDate = (thaiDate) => {
    const thaiMonths = [
      'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
      'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
    ];

    const [day, month, year] = thaiDate.split(' ');
    const monthIndex = thaiMonths.indexOf(month);
    if (monthIndex === -1) return null;

    const fullYear = parseInt(year, 10) + 2500 - 543;
    return `${fullYear}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const calculateEndDate = (thaiStartDate, dayLength) => {
    const isoStartDate = parseThaiDate(thaiStartDate);
    if (!isoStartDate) return "วันที่ไม่ถูกต้อง";

    const start = new Date(isoStartDate);
    if (isNaN(start.getTime())) return "กรอกจำนวนวันที่เช่าก่อน";

    start.setDate(start.getDate() + parseInt(dayLength, 10));
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    return start.toLocaleDateString('th-TH', options);
  };
  
  const closeModal = () =>{setShowmodal(false)}
  const closeModal_Create = () => {setShowmodal_create_product(false)}


const handleModelChange = (index, value) => {
  const updatedConfirmItem = [...confirmitem];
  updatedConfirmItem[index].type = value; 
  setConfirmitem(updatedConfirmItem); 
};


const handleAmountChange = (index, value) => {
  const updatedConfirmItem = [...confirmitem];
  updatedConfirmItem[index].amount = value; 
  setConfirmitem(updatedConfirmItem);
};

  

  return (
    <div className='w-full h-[90%] mt-5'>
      <HelmetProvider>
          <Helmet>
            <title>ส่งออกสินค้า</title>
        </Helmet>
      </HelmetProvider>

      {showmodal ? <Modal_Outbound close={closeModal} confirm={handleConfirm} /> : null}
      {showmodal_create_product ? <Modal_Create_Products close={closeModal_Create} /> : null}
      <div className='w-full h-[100%] grid grid-cols-5 overflow-auto no-scrollbar '>

        <div className="col-span-2 grid grid-rows-6 ">

          <div className='row-span-4 items-center text-base '>

            <div className='grid justify-end items-center grid-cols-4 '>
              <span className="col-span-1 grid justify-end pr-2">
                สาขา:
              </span>
              <select name="branch" id="branch" className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500" >
                <option>ชลบุรี</option>
              </select>
            </div>

            {menu.map((item, index) => (
              <div key={index} className='grid justify-end items-center grid-cols-4 pt-10 '>
                <span className="col-span-1 grid justify-end  pr-2">
                  {item.title}
                </span>
                <input
                  type={item.type}
                  onChange={ item.title === 'นามลูกค้า/ชื่อบริษัท:' ? 
                    (e) => setName(e.target.value) 
                    :  item.title === 'วันที่เริ่มเช่า-ขาย:' ?
                    (e) => handleDateChange(e.target.value) 
                    : item.title === 'ชื่อไซต์งาน:' ?
                    (e) => setWorkside(e.target.value) 
                    : item.title === 'ที่อยู่ลูกค้า:' ?
                    (e) => setAddress(e.target.value)
                    : null
                  }
                  className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500 p-2"
                />
              </div>
            ))}

            <div className='grid justify-end items-center grid-cols-4 pt-10 '>
              <span className="col-span-1 grid justify-end pr-2 ">
                ระยะเวลา:
              </span>
              <input
                type="text"
                className="col-span-2 h-10 rounded-lg border border-gray-500 p-2"
                onChange={(e) => setDay_Length(e.target.value)}
              />
              <span className="col-span-1 pl-5">
                วัน
              </span>
            </div>

            <div className='grid grid-cols-8 pt-10 '>
              <span className='col-span-2 '></span>
              <button className="col-span-3 w-[80%] bg-[#31AB31] h-10 rounded-md text-white hover:bg-[#2a7e2d] transition duration-300"
                onClick={() => setShowmodal(true)}
              >
                <i className="fa-solid fa-plus mr-2"></i>จองสินค้า
              </button>
              <button className="col-span-3 w-[80%] bg-[#909090] h-10 rounded-md text-white hover:bg-[#707070] transition duration-300" 
              onClick={() => setShowmodal_create_product(true)}
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
              <span className='col-span-1 grid justify-end items-center'>{formattedDate}</span>
              <span className='col-span-3 grid justify-start items-center'>นามลูกค้า/ชื่อบริษัท: {name}</span>
              <span className='col-span-1 grid justify-start items-center'>ชื่อไซต์งาน: {workside}</span>
              <span className='col-span-1 grid justify-end items-center'>เริ่มเช่า: {sell_date}</span>
              <span className='col-span-1 grid justify-end items-center'>สิ้นสุดเช่า: {calculateEndDate(sell_date,day_length)}</span>
              <span className='col-span-2 row-span-2 grid grid-cols-7'>
                <span className='col-span-1'>ที่อยู่ลูกค้า:</span>
                <span className='col-span-6'>{address}</span>
              </span>
              <span className='col-span-1 grid justify-end items-center'>ระยะเวลาเช่า: {day_length} วัน</span>
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
  {confirmitem.length > 0 ? (
    confirmitem.map((item, index) => (
      <tr className="border-b-2" key={index}>
        <td className="px-4 py-2">{index + 1}</td>
        <td className="px-4 py-2">{item.name}</td>
        <td className="px-4 py-2">{item.size}</td>
        <td className="px-4 py-2">
          <select
            name="model"
            className="px-4 py-2 text-center"
            value={item.type || ''} 
            onChange={(e) => handleModelChange(index, e.target.value)} 
          >
            <option value="เช่า">เช่า</option>
            <option value="ซื้อ">ซื้อ</option>
          </select>
        </td>
        <td className="px-4 py-2">
          <input
            type="number"
            className="px-2 py-2 text-center"
            value={item.amount || 0} 
            onChange={(e) => handleAmountChange(index, e.target.value)} 
          />
        </td>
        <td className="px-4 py-2">2,000.00</td>
        <td className="px-4 py-2">4,000.00</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7" className="px-4 py-2 text-center">ไม่มีข้อมูล</td>
    </tr>
  )}
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
              <input type='radio' name='vat' className='mr-2'/>  มีภาษีมูลค่าเพิ่ม
              <input type='radio' name='vat' className="ml-3 mr-2" />  ไม่มีภาษีมูลค่าเพิ่ม
            </div>
            <span></span>
            <div className=" row-span-1  items-center justify-center grid grid-cols-2 text-white">
              <span className='col-span-1 flex  justify-end pr-2'>
              <button className=" bg-[#133E87] w-2/6 p-2 rounded-md hover:bg-[#172c4f] transition duration-300" ><i className="fa-solid fa-floppy-disk mr-2"></i>บันทึก</button>
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
