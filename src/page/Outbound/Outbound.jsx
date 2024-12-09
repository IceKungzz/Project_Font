import React from "react";
import {formatDate} from '../../Components/Layout_Components/Datetimeshow'

export function Outbound(props) {
  return (
    <div className="w-full h-[90%] flex">
        <div className="w-full h-full grid grid-cols-5">
            <div className="col-span-2 w-full h-full grid grid-rows-4">
              <div className="w-full h-full row-span-3 grid grid-rows-7">

                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">สาขา:</span>
                  <select name="" id="" className="col-span-2 xl:col-span-3 h-2/4 rounded-md border border-gray-500">
                    <option value="" >ชลบุรี</option>
                  </select>
                </div>

                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">นามลูกค้า/ชื่อบริษัท:</span>
                  <input type='text' className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"/>
                </div>


                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">ชื่อไซต์งาน:</span>
                  <input type='text' className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"/>
                </div>


                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">ที่อยู่ลูกค้า:</span>
                  <input type='text' className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"/>
                </div>


                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-2 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">วันที่เริ่มเช่า-ขาย:</span>
                  <input type='date' className="col-span-2 xl:col-span-3 h-2/4 rounded-md p-2 border border-gray-500"/>
                </div>


                <div className="row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <span className="col-span-1 xl:col-span-1 text-[16px] xl:text-[20px]  text-end">ระยะเวลา:</span>
                  <input type='text' className="col-span-2 xl:col-span-2 h-2/4 rounded-md p-2 border border-gray-500"/>
                  <span className="col-span-1 xl:col-span-1 text-[16px] xl:text-[20px]">วัน</span>
                </div>


                <div className=" row-span1 w-full grid grid-cols-4 justify-center items-center gap-2 p-2">
                  <div className=" col-span-1 "></div>
                  <div className=" col-span-3 h-full flex justify-around items-center gap-2">
                    <button className="w-2/4 bg-green-800 h-3/4 rounded-md">เพิ่มสินค้า</button>
                    <button className="w-2/4 bg-gray-500 h-3/4 rounded-md">สร้างสินค้า</button>
                  </div>
                </div>


              </div>

              <div className="row-span-1 flex justify-start items-end p-5">
                <button className="bg-gray-400 w-1/4 p-2 rounded-md">จองสินค้า</button>
              </div>

            </div>


            <div className="bg-green-300 col-span-3">
              right
            </div>
        </div>
    </div>
  );
}
