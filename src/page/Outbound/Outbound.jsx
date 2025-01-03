import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Modal_Outbound } from "./Modal_Outbound";
import { ModalDiscount } from "./Modal_Discount";
import { Modal_Create_Products } from "./Modal_Create_Products";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fr } from "date-fns/locale";

export function Outbound() {
  const [branch, setBranch] = useState("");
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [workside, setWorkside] = useState("");
  const [sell_date, setSell_date] = useState("");
  const [day_length, setDay_Length] = useState("");
  //------------------------------------------------------
  const [items, setItems] = useState([]);
  const [netPrice, setNetPrice] = useState(0);
  const [showmodal, setShowmodal] = useState(false);
  const [showModalDiscount, setShowModalDiscount] = useState(false);
  const [showmodal_create_product, setShowmodal_create_product] = useState(false);
  const [confirmitem, setConfirmitem] = useState([]);
  const [confirmitem_create, setConfirmItem_Create] = useState([]);
  const [hasVat, setHasVat] = useState(true);
  const [Item_sendto_database, setItem_sendto_database] = useState([]);
  const [validateModalInput, setValidateModalInput] = useState(false)
  const [alldata_default, setAlldata_default] = useState([{}]);
  const [mergetable, setMergetable] = useState([])
  const [formData, setFormData] = useState({});
  const [quantitySum, setQuantitySum] = useState(0);
  const navigate = useNavigate();

  const menu = [
    { title: "นามลูกค้า/ชื่อบริษัท :", type: "text" },
    { title: "ชื่อไซต์งาน :", type: "text" },
    { title: "ที่อยู่ลูกค้า :", type: "text" },
    { title: "วันที่เสนอ :", type: "date" },
  ];

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = today.toLocaleDateString("th-TH", options);

  const handleVatChange = (e) => {
    setHasVat(e.target.value === "true");
  };

  useEffect(() => {

    const totalPrice = confirmitem.reduce(
      (total, item) => total + (item.price * item.amount || 0),
      0
    );

    const vat = hasVat ? totalPrice * 0.07 : 0;
    setNetPrice(totalPrice + vat);

  }, [confirmitem, hasVat]);

  const handleConfirm = (items) => {
    const updatedItems = items.map((item) => ({
      ...item,
      type: item.type || "เช่า",
      price: 0,
    }));
    setConfirmitem(updatedItems);
  };

  const handleConfirmDiscount = (items) => {
    const updatedItems = items.map((item) => ({
      ...item,
      type: item.type || "เช่า",
      price: 0,
    }));
    setConfirmitem(updatedItems);
  };

  const handleConfirmItem_Create = (items) => {
    setConfirmItem_Create(items)
    setMergetable(items.merge)
  };

  const handleDateChange = (dateValue) => {
    const date = new Date(dateValue);
    const options = { day: "numeric", month: "short", year: "2-digit" };
    const formattedDate = date.toLocaleDateString("th-TH", options);
    setSell_date(formattedDate);
  };

  const parseThaiDate = (thaiDate) => {
    const thaiMonths = [
      "ม.ค.",
      "ก.พ.",
      "มี.ค.",
      "เม.ย.",
      "พ.ค.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ];

    const [day, month, year] = thaiDate.split(" ");
    const monthIndex = thaiMonths.indexOf(month);
    if (monthIndex === -1) return null;

    const fullYear = parseInt(year, 10) + 2500 - 543;
    return `${fullYear}-${String(monthIndex + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const calculateEndDate = (thaiStartDate, dayLength) => {
    const isoStartDate = parseThaiDate(thaiStartDate);
    if (!isoStartDate) return "วันที่ไม่ถูกต้อง";

    const start = new Date(isoStartDate);
    if (isNaN(start.getTime())) return "กรอกจำนวนวันที่เช่าก่อน";

    start.setDate(start.getDate() + parseInt(dayLength, 10));
    const options = { day: "numeric", month: "short", year: "2-digit" };
    return start.toLocaleDateString("th-TH", options);
  };

  const closeModal = (data) => {
    setQuantitySum(data);  // รับเป็นตัวเลข
    setShowmodal(false);
  };

  const closeModalDiscount = (data) => {
    if (data) {
      setFormData(data);
    }
    setShowModalDiscount(false);
  };

  const closeModal_Create = () => {
    setShowmodal_create_product(false);
    setValidateModalInput(false)
  };

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

  const handlePriceChange = (index, value) => {
    const updatedConfirmItem = [...confirmitem];
    updatedConfirmItem[index].price = value;
    setConfirmitem(updatedConfirmItem);
  };

  const handlePrice3DChange = (index, value) => {
    const updatedConfirmItem = [...confirmitem];
    updatedConfirmItem[index].price3D = value === '' ? "" : value.toString();
    console.log(value);
    setConfirmitem(updatedConfirmItem);
  };

  const confirm_order = async () => {

    if (
      !name ||
      !workside ||
      !address ||
      !day_length ||
      confirmitem.length === 0 ||
      confirmitem.some((item) => !item.price && !item.price3D)

    ) {

      Swal.fire({
        icon: "warning",
        text: "กรุณากรอกข้อมูลให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });
      return;

    }

    console.log(confirmitem.price);

    const reserve = [
      confirmitem.reduce(
        (acc, item) => {
          acc.code.push(item.code);
          acc.product_id.push(String(item.id));
          acc.size.push(item.size);
          acc.price.push(item.type === 'ขาย' ? item.price : (item.price3D || "").toString());
          acc.quantity.push(String(item.amount));
          acc.type.push(item.type === "เช่า" ? "0" : "1");
          return acc;
        },
        {
          code: [],
          product_id: [],
          price: [],
          quantity: [],
          size: [],
          centimeter: [],
          meter: [],
          type: [],
        }
      )
    ];

    const newOrder = {
      customer_name: name,
      place_name: workside,
      address,
      date: day_length,
      reserve: reserve,
      assemble_status: confirmitem_create.assemble_status || false,
      vat: hasVat ? "vat" : "nvat",
      ...formData,
      proponent_name: "bossinwza007",
      average_price: 0,
    };

    console.log("Sending new order1:", formData);
    console.log("Sending new order:", newOrder);

    const token = localStorage.getItem("token");
    const merge = confirmitem_create.merge

    try {

      axios.post(
        "http://192.168.195.75:5000/v1/product/outbound/reserve",
        newOrder,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          },
        }
      ).then((res) => {
        Swal.fire({
          icon: "success",
          text: "เพิ่มข้อมูลสำเร็จ",
          confirmButton: "ok",
        }).then(() => {
          navigate("/status");
        });
        console.log('send success');

      }).catch((err) => {
        console.log(err);
      });

    } catch (err) {
      console.log(err);
    }

    setItem_sendto_database((predata) => [...predata, newOrder]);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://192.168.195.75:5000/v1/product/outbound/profile", {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "x-api-key": "1234567890abcdef",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setBranch(res.data.data.branch_name);
        }
      });
  }, []);

  const inputs = [name, address, workside, sell_date, day_length];

  useEffect(() => {
    const allInputsValid = inputs.every(input => input.length > 0);
    setValidateModalInput(allInputsValid);
  }, [inputs]);

  const status_modal_create = () => {
    if (validateModalInput) {
      setShowmodal_create_product(true);
      setAlldata_default({ name, address, workside, sell_date, day_length });
    } else {
      Swal.fire({
        icon: "error",
        text: "โปรดกรอกข้อมูลให้ครบ",
        confirmButtonText: 'ตกลง',
        scrollbarPadding: false
      });
      setShowmodal_create_product(false);
    }
  };

  return (
    <div className="w-full h-[90%] mt-5">
      <HelmetProvider>
        <Helmet>
          <title>ส่งออกสินค้า</title>
        </Helmet>
      </HelmetProvider>

      {showmodal ? (
        <Modal_Outbound
          close={closeModal}
          confirm={handleConfirm}
          ititialData={confirmitem || []}
        />
      ) : null}

      {showmodal_create_product && validateModalInput ? (
        <Modal_Create_Products
          close={closeModal_Create}
          createitem={handleConfirmItem_Create}
          datadefault={alldata_default}
        />
      ) : null}

      {showModalDiscount ? (
        <ModalDiscount
          close={closeModalDiscount}
          consfirm={handleConfirmDiscount}
        />
      ) : null}

      <div className="w-full h-[100%] grid grid-cols-5 overflow-auto no-scrollbar overflow-y-hidden">
        <div className="col-span-2 grid grid-rows-6 ">
          <div className="row-span-4 items-center text-base ">
            <div className="grid justify-end items-center grid-cols-4 ">
              <span className="col-span-1 grid justify-end pr-2">สาขา : </span>
              <select
                name="branch"
                id="branch"
                className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500"
              >
                <option>{branch}</option>
              </select>
            </div>

            {menu.map((item, index) => (
              <div
                key={index}
                className="grid justify-end items-center grid-cols-4 pt-10 "
              >
                <span className="col-span-1 grid justify-end  pr-2">
                  {item.title}
                </span>
                <input
                  type={item.type}
                  onChange={
                    item.title === "นามลูกค้า/ชื่อบริษัท :"
                      ? (e) => setName(e.target.value)
                      : item.title === "วันที่เสนอ :"
                        ? (e) => handleDateChange(e.target.value)
                        : item.title === "ชื่อไซต์งาน :"
                          ? (e) => setWorkside(e.target.value)
                          : item.title === "ที่อยู่ลูกค้า :"
                            ? (e) => setAddress(e.target.value)
                            : null
                  }
                  className="col-span-3 w-[80%] h-10 rounded-lg border border-gray-500 p-2"
                />
              </div>
            ))}

            <div className="grid justify-end items-center grid-cols-4 pt-10">
              <span className="col-span-1 grid justify-end pr-2 ">
                ระยะเวลา :
              </span>
              <input
                type="number"
                className="col-span-2 h-10 rounded-lg border border-gray-500 p-2"
                onChange={(e) => setDay_Length(e.target.value)}
              />
              <span className="col-span-1 pl-5">วัน</span>
            </div>

            <div className="flex justify-center space-x-4 pt-10">
              <button
                className="w-[170px] bg-[#31AB31] h-10 rounded-md text-white hover:bg-[#2a7e2d] transition duration-300"
                onClick={() => setShowmodal(true)}
              >
                <i className="fa-solid fa-plus mr-2"></i>จองสินค้า
              </button>
              <button
                className="w-[170px] bg-[#909090] h-10 rounded-md text-white hover:bg-[#707070] transition duration-300"
                onClick={status_modal_create}
              >
                <i className="fa-solid fa-pen mr-2"></i>สร้างสินค้า
              </button>
              <button
                className="w-[170px] bg-blue-500 h-10 rounded-md text-white hover:bg-blue-600 transition duration-300"
                onClick={() => setShowModalDiscount(true)}
              >
                <i className="fa-solid fa-file-invoice mr-2"></i>กรอกข้อมูลเพิ่มเติม
              </button>
            </div>

          </div>
        </div>

        <div className="col-span-3 grid grid-rows-10 h-[755px]">
          <div className="row-span-9 grid grid-rows-4 border border-gray-500 rounded-lg">
            <div className="row-span-1 grid grid-cols-3 grid-rows-6 pl-4 pr-4 pt-3 ">
              <span className="col-span-1 grid justify-start items-center ">
                ห้างหุ้นส่วนจำกัด ภัทรชัย แบบเหล็ก
              </span>
              <span className="col-span-1 row-span-2 grid justify-center items-center text-xl font-bold">
                รายการส่งออกสินค้า
              </span>
              <span className="col-span-1 "></span>
              <span className="col-span-1 grid justify-start items-center">
                สาขา: {branch}
              </span>
              <span className="col-span-1 grid justify-end items-center">
                {formattedDate}
              </span>
              <span className="col-span-3 grid justify-start items-center">
                นามลูกค้า/ชื่อบริษัท: {name}
              </span>
              <span className="col-span-1 grid justify-start items-center">
                ชื่อไซต์งาน: {workside}
              </span>
              <span className="col-span-1 grid justify-end items-center">
                เริ่มเช่า: {sell_date}
              </span>
              <span className="col-span-1 grid justify-end items-center">
                สิ้นสุดเช่า: {calculateEndDate(sell_date, day_length)}
              </span>
              <span className="col-span-2 row-span-2 grid grid-cols-7">
                <span className="col-span-1">ที่อยู่ลูกค้า:</span>
                <span className="col-span-6">{address}</span>
              </span>
              <span className="col-span-1 grid justify-end items-center">
                ระยะเวลาเช่า: {day_length} วัน
              </span>
            </div>

            <div className="row-span-3 grid grid-rows-3 ">
              <div className="row-span-3 no-scrollbar border-b-4 flex justify-center items-start mr-3 ml-3">
                <div className="overflow-y-auto no-scrollbar max-h-80 w-full">
                  <table className="w-full table-auto text-center border-collapse border-t-2 border-white">
                    <thead className="font-bold bg-blue-200 text-sky-800 sticky top-0 border-b-2">
                      <tr>
                        <th className="px-4 py-2 rounded-tl-lg">ลำดับ</th>
                        <th className="px-4 py-2">รายการ</th>
                        <th className="px-4 py-2">ขนาด</th>
                        <th className="px-4 py-2">รูปแบบ</th>
                        <th className="px-4 py-2">จำนวน</th>
                        <th className="px-4 py-2">ราคา</th>
                        <th className="px-4 py-2 rounded-tr-lg">รวม</th>
                      </tr>
                    </thead>
                    <tbody>
                      {confirmitem.length > 0 ? (
                        confirmitem.map((item, index) => (
                          <React.Fragment key={index}>
                            {/* แสดงรายการหลัก */}
                            <tr className="border-b-2">
                              <td className="px-4 py-2">{index + 1}</td>
                              {item.name === "item_merge" ? (
                                <td className="px-4 py-2">
                                  <input
                                    type="text"
                                    className="px-2 py-2 w-[100px] border border-black rounded-md"
                                  />
                                </td>
                              ) : (
                                <td className="px-4 py-2">{item.name}</td>
                              )}
                              <td className="px-4 py-2">
                                {item.name === "item_merge" ? "-" : item.size}
                              </td>
                              <td className="px-4 py-2">
                                <select
                                  name="model"
                                  className="px-4 py-2 text-center"
                                  value={item.type || ""}
                                  onChange={(e) =>
                                    handleModelChange(index, e.target.value)
                                  }
                                >
                                  <option value="เช่า">เช่า</option>
                                  <option value="ขาย">ขาย</option>
                                </select>
                              </td>
                              <td className="px-4 py-2">
                                <input
                                  type="number"
                                  className="px-2 py-2 text-center w-[100px] border border-black rounded-md"
                                  value={item.amount || 0}
                                  required
                                  onChange={(e) =>
                                    handleAmountChange(index, e.target.value)
                                  }
                                />
                              </td>
                              <td className="px-4 py-2">
                                <input
                                  type="text"
                                  className="px-2 py-2 text-center w-[100px] border border-black rounded-md"
                                  required
                                  value={item.type === "ขาย" ? item.price || '' : item.price3D || ''}
                                  onChange={(e) => {
                                    const value = e.target.value.replace(/^0+/, '');

                                    if (item.type === "ขาย") {
                                      handlePriceChange(index, value === '' ? "" : value.toString());

                                    } else if (item.type === "เช่า") {
                                      handlePrice3DChange(index, value === '' ? "" : value.toString());
                                    }
                                  }}
                                  disabled={item.type === "เช่า"}
                                />
                              </td>

                              <td className="px-4 py-2">
                                {item.type === "ขาย"
                                  ? (item.price || 0) * (item.amount || 0)
                                  : (item.price3D || 0) * (item.amount || 0)}
                              </td>
                            </tr>

                            {/* แสดงรายการย่อยสำหรับ item_merge */}
                            {mergetable.length > 0 ? (
                              mergetable.map((item, key) => (
                                <tr key={key}>
                                  <td>{key + 1}</td>
                                  <td>{item.code.map((subitem) => (
                                    <ul key={key}>
                                      <li>{subitem}</li>
                                    </ul>
                                  ))}

                                  </td>
                                  <td>{item.size.map((subitem) => (
                                    <ul key={key}>
                                      <li>{subitem}</li>
                                    </ul>
                                  ))}</td>
                                  <td>เช่า</td>
                                  <td>{item.quantity_assemble}</td>
                                  <td>{item.price}</td>
                                  <td>{Number(item.quantity_assemble) * Number(item.price)}</td>
                                </tr>
                              ))


                            ) : null}
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="px-4 py-2 text-center">
                            ไม่มีข้อมูล
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row-span-1 grid grid-cols-6 grid-rows-3">
              <span className="col-span-3 row-span-3 grid grid-cols-5 p-1">
                <span className="col-span-3 grid justify-end">
                  รวมรายการสินค้าที่ส่งออกทั้งหมด
                </span>
                <span className="col-span-1 grid justify-center">{quantitySum}</span>
                <span className="col-span-1 grid justify-start">รายการ</span>
              </span>
              <span className="col-span-3 row-span-3 grid grid-cols-4 ">
                <span className="col-span-1 "></span>
                <span className="col-span-1 grid justify-end p-1">ราคารวม</span>
                <span className="col-span-1 grid justify-end p-1">
                  {confirmitem
                    .reduce(
                      (total, item) => total + (item.price * item.amount || 0),
                      0
                    )
                    .toFixed(2)}
                </span>
                <span className="col-span-1 grid justify-start p-1">บาท</span>

                <span className="col-span-2 grid justify-end p-1">
                  ภาษีมูลค่าเพิ่ม (7%)
                </span>
                <span className="col-span-1 grid justify-end p-1">
                  {hasVat
                    ? (
                      confirmitem.reduce(
                        (total, item) =>
                          total + (item.price * item.amount || 0),
                        0
                      ) * 0.07
                    ).toFixed(2)
                    : "0.00"}
                </span>
                <span className="col-span-1 grid justify-start p-1">บาท</span>
                <span className="col-span-1"></span>
                <span className="col-span-1 grid justify-end p-1">
                  ราคาสุทธิ
                </span>
                <span className="col-span-1 grid justify-end p-1 underline">
                  {netPrice.toFixed(2)}
                </span>
                <span className="col-span-1 grid justify-start p-1">บาท</span>
              </span>
            </div>
          </div>

          <div className="row-span-1 grid grid-rows-2">
            <div className="row-span-1 flex items-center">
              <input
                type="radio"
                name="vat"
                value="true"
                className="mr-2"
                checked={hasVat}
                onChange={handleVatChange}
              />
              มีภาษีมูลค่าเพิ่ม

              <input
                type="radio"
                name="nvat"
                value="false"
                className="ml-3 mr-2"
                checked={!hasVat}
                onChange={handleVatChange}
              />
              ไม่มีภาษีมูลค่าเพิ่ม

              {/* <input
                type="radio"
                name="ovat"
                value="false"
                className="ml-3 mr-2"
                checked={!hasVat}
                onChange={handleVatChange}
              />
              หัก ณ ที่จ่าย */}
            </div>

            <div className=" row-span-1  items-center justify-center grid grid-cols-2 text-white mt-5">
              <span className="col-span-1 flex  justify-end pr-16">
                <button
                  className=" bg-[#133E87] w-2/6 p-2 rounded-md hover:bg-[#172c4f] transition duration-300"
                  onClick={confirm_order}
                >
                  <i className="fa-solid fa-floppy-disk mr-2"></i>บันทึก
                </button>
              </span>
              <span className="col-span-1 flex  justify-start pl-16">
                <button className="bg-[#A62628] w-2/6 p-2 rounded-md hover:bg-[#762324] transition duration-300">
                  <i className="fa-solid fa-x mr-2"></i>ยกเลิก
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}