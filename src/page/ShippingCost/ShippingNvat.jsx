import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import thaiBahtText from 'thai-baht-text';
import ExcelJS from 'exceljs';

export default function Quotation() {
  const location = useLocation();
  const { id } = location.state || {};

  const [data, setData] = useState([])
  const [products, setProducts] = useState([])
  const [note, setNote] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [lesseeName, setLesseeName] = useState('');
  const [lessorName, setLessorName] = useState('');
  const [lesseeNameOne, setLesseeNameOne] = useState('');
  const [lessorNameTwo, setLessorNameTwo] = useState('');

  useEffect(() => {
    if (!id) return;

    const token = localStorage.getItem("token");

    axios
      .get(`http://192.168.195.75:5000/v1/product/status/status-one/${id}`, {
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

          const createDate = new Date(res.data.data.reserve_out);
          const expiryDate = new Date(createDate);
          expiryDate.setDate(createDate.getDate() + 7);
          setExpiryDate(expiryDate.toISOString().split("T")[0]);
        }
      });

  }, [id]);

  const num = [1, 2, 3, 4, 5, 6];

  const formatThaiBahtText = (value) => {
    if (isNaN(Number(value)) || value === null || value === undefined) {
      return 'Invalid input';
    }
    return thaiBahtText(Number(value));
  };

  const formatNumber = (value) => {
    if (isNaN(Number(value)) || value === null || value === undefined) {
      return 'Invalid input';
    }
    return Number(value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const exportToExcel = () => {

    const headerData = [
      [""],
      ["", "", "", ""],
      ["", "", "", "", "รับผลิต จำหน่ายเเละให้เช่า"],
      ["", "", "", "", "เเบบคาน , เเบบเสา , เเบบหล่องานถนน , ฟุตติ้ง"],
      ["", "", "", "", "นั่งร้าน , ยูเเจ็ค , เเจ็คเบส , ฉาก , ป๊อปค้ำยัน"],
      ["", "", "", "", "เเบบฐานเสาไฟ เเละเเบบพิเศษสั่งทำทุกชนิด"],
      ["", "", "", "", "095-5862149 , 085-3806974"],
      ["", "", "", "", "สาขา: โคกขาม 081-1571097 / นพวงศ์ 081-1571094 / ชลบุรี 083-1653979"]
    ];

    const productData = products.map((product, index) => ([
      index + 1,
      `${product.name} ${product.size}`,
      `${product.quantity} ${product.unit}`,
      product.price,
      data.date,
      product.price_damage ? product.price_damage : 0,
      (product.quantity * product.price) * data.date
    ]));

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Quotation');

    worksheet.getColumn(1).width = 6;
    worksheet.getColumn(2).width = 4;
    worksheet.getColumn(3).width = 10;
    worksheet.getColumn(4).width = 3;
    worksheet.getColumn(5).width = 7;
    worksheet.getColumn(6).width = 8;
    worksheet.getColumn(7).width = 10;
    worksheet.getColumn(8).width = 7;
    worksheet.getColumn(9).width = 5;
    worksheet.getColumn(10).width = 8;
    worksheet.getColumn(11).width = 7;
    worksheet.getColumn(12).width = 12;
    worksheet.getColumn(13).width = 10;

    worksheet.addRows(headerData);

    worksheet.getRow(1).height = 1.5;
    worksheet.getRow(2).height = 1.5;

    worksheet.getRow(3).height = 29;
    worksheet.getRow(4).height = 18;
    worksheet.getRow(5).height = 18;
    worksheet.getRow(6).height = 18;
    worksheet.getRow(7).height = 18;
    worksheet.getRow(8).height = 18;

    worksheet.getRow(9).height = 10;

    worksheet.getRow(10).height = 6;
    worksheet.getRow(11).height = 6;
    worksheet.getRow(12).height = 6;
    worksheet.getRow(13).height = 6;
    worksheet.getRow(14).height = 6;
    worksheet.getRow(15).height = 6;
    worksheet.getRow(16).height = 6;
    worksheet.getRow(17).height = 6;
    worksheet.getRow(18).height = 6;
    worksheet.getRow(19).height = 7;
    worksheet.getRow(20).height = 7;
    worksheet.getRow(21).height = 7;
    worksheet.getRow(22).height = 5;
    worksheet.getRow(23).height = 7;
    worksheet.getRow(24).height = 6;
    worksheet.getRow(25).height = 6;
    worksheet.getRow(26).height = 7;

    worksheet.getRow(27).height = 5;
    worksheet.getRow(28).height = 5;

    worksheet.getRow(38).height = 15;
    worksheet.getRow(39).height = 15;
    worksheet.getRow(40).height = 15;
    worksheet.getRow(41).height = 15;
    worksheet.getRow(42).height = 15;
    worksheet.getRow(43).height = 15;

    worksheet.getRow(44).height = 18;
    worksheet.getRow(45).height = 18;
    worksheet.getRow(46).height = 18;
    worksheet.getRow(47).height = 18;
    worksheet.getRow(48).height = 18;
    worksheet.getRow(49).height = 18;
    worksheet.getRow(50).height = 18;
    worksheet.getRow(51).height = 18;
    worksheet.getRow(52).height = 18;
    worksheet.getRow(53).height = 18;

    worksheet.getRow(60).height = 11;
    worksheet.getRow(61).height = 11;

    worksheet.getRow(62).height = 10;

    worksheet.getRow(63).height = 25;
    worksheet.getRow(64).height = 25;
    worksheet.getRow(65).height = 12;

    // worksheet.getRow(2).font = { size: 26, bold: true, name: 'Angsana New' };
    worksheet.getRow(3).font = { size: 13, bold: true, name: 'Angsana New' };
    worksheet.getRow(4).font = { size: 13, bold: true, name: 'Angsana New' };
    worksheet.getRow(5).font = { size: 13, bold: true, name: 'Angsana New' };
    worksheet.getRow(6).font = { size: 13, bold: true, name: 'Angsana New' };
    worksheet.getRow(7).font = { size: 13, bold: true, name: 'Angsana New' };
    worksheet.getRow(8).font = { size: 13, bold: true, name: 'Angsana New' };

    worksheet.mergeCells('K5:M8');
    const cell = worksheet.getCell('K5');
    cell.value = "ใบส่งของ";
    cell.alignment = { vertical: 'middle', horizontal: 'center' };
    cell.font = { size: 36, bold: true, name: 'Angsana New' };
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFFF8C42' }
    };
    cell.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' }
    };

    worksheet.mergeCells('E3:J3');
    const customer_Pattarachai = worksheet.getCell('E3');
    customer_Pattarachai.value = 'ร้านภัทรชัย เเบบเหล็ก';
    customer_Pattarachai.font = { size: 28, bold: true, name: 'Angsana New' };
    customer_Pattarachai.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A11:B13');
    const customer_name = worksheet.getCell('A11');
    customer_name.value = '   ชื่อผู้ติดต่อ :';
    customer_name.font = { size: 13, bold: true, name: 'Angsana New' };
    customer_name.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C11:F13');
    const customer_nameValue = worksheet.getCell('C11');
    customer_nameValue.value = `${data.customer_name ? data.customer_name : "-"}`;
    customer_nameValue.font = { size: 13, name: 'Angsana New' };
    customer_nameValue.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A14:B16');
    const company_name = worksheet.getCell('A14');
    company_name.value = '   ชื่อบริษัท :';
    company_name.font = { size: 13, bold: true, name: 'Angsana New' };
    company_name.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C14:J16');
    const company_nameValue = worksheet.getCell('C14');
    company_nameValue.value = `${data.company_name ? data.company_name : "-"}`;
    company_nameValue.font = { size: 13, name: 'Angsana New' };
    company_nameValue.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A17:B19');
    const address = worksheet.getCell('A17');
    address.value = '   ที่อยู่ :';
    address.font = { size: 13, bold: true, name: 'Angsana New' };
    address.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C17:J19');
    const addressValue = worksheet.getCell('C17');
    addressValue.value = `${data.address ? data.address : "-"}`;
    addressValue.font = { size: 13, name: 'Angsana New' };
    addressValue.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A20:B22');
    const space = worksheet.getCell('A20');

    worksheet.mergeCells('C20:J22');
    const placeValue = worksheet.getCell('C20');
    placeValue.value = `หน้างาน - ${data.place_name ? data.place_name : "-"}`;
    placeValue.font = { size: 13, name: 'Angsana New', color: { argb: 'FFFF0000' }, underline: true };
    placeValue.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A23:B25');
    const phone = worksheet.getCell('A23');
    phone.value = '   โทร :';
    phone.font = { size: 13, bold: true, name: 'Angsana New' };
    phone.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C23:E25');
    const phoneValue = worksheet.getCell('C23:E25');
    phoneValue.value = `${data.customer_tel ? data.customer_tel : "-"}`;
    phoneValue.font = { size: 13, name: 'Angsana New' };
    phoneValue.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('K10:K13');
    const taxNumber = worksheet.getCell('K10');
    taxNumber.value = 'เลขที่ :';
    taxNumber.font = { size: 13, bold: true, name: 'Angsana New' };
    taxNumber.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('M10:M13');
    const taxNumberValue = worksheet.getCell('M10');
    taxNumberValue.value = `${data.export_number}`;
    taxNumberValue.font = { size: 13, name: 'Angsana New' };
    taxNumberValue.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('K14:L16');
    const date = worksheet.getCell('K14');
    date.value = '  วันที่ส่งของ :';
    date.font = { size: 13, bold: true, name: 'Angsana New' };
    date.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('M14:M16');
    const dateValue = worksheet.getCell('M14');
    dateValue.value = `${data.actual_out
      ? new Date(data.actual_out).toLocaleDateString('th-TH', {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      })
      : ''}`;
    dateValue.font = { size: 13, name: 'Angsana New' };
    dateValue.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('K17:L19');
    const expDate = worksheet.getCell('K17');
    expDate.value = '  วันที่เริ่มเช่าสินค้า :';
    expDate.font = { size: 13, bold: true, name: 'Angsana New' };
    expDate.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('M17:M19');
    const expDateValue = worksheet.getCell('M17');
    let actualOutDate = data.actual_out ? new Date(data.actual_out) : null;
    if (actualOutDate) {
      actualOutDate.setDate(actualOutDate.getDate() + 1);
      expDateValue.value = actualOutDate.toLocaleDateString('th-TH', {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      });
    } else {
      expDateValue.value = '';
    }
    expDateValue.font = { size: 13, name: 'Angsana New' };
    expDateValue.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('K20:L22');
    const condition = worksheet.getCell('K20');
    condition.value = '  วันที่รับสินค้าคืน :';
    condition.font = { size: 13, bold: true, name: 'Angsana New' };
    condition.alignment = { vertical: 'middle', horizontal: 'left' };
    condition.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCC00' } };

    worksheet.mergeCells('M20:M22');
    const conditionValue = worksheet.getCell('M20');
    let expiryDateValue = expiryDate ? new Date(expiryDate) : null;
    if (expiryDateValue) {
      expiryDateValue.setDate(expiryDateValue.getDate() + 1);

      conditionValue.value = expiryDateValue.toLocaleDateString('th-TH', {
        day: '2-digit',
        month: 'short',
        year: '2-digit'
      });
    } else {
      conditionValue.value = '';
    }
    conditionValue.font = { size: 13, name: 'Angsana New', bold: true };
    conditionValue.alignment = { vertical: 'middle', horizontal: 'center' };
    conditionValue.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCC00' } };

    worksheet.mergeCells('K23:L26');
    const lefPast = worksheet.getCell('K23');
    lefPast.value = '  อ้างอิงสัญญาเช่าเดิม :';
    lefPast.font = { size: 13, bold: true, name: 'Angsana New' };
    lefPast.alignment = { vertical: 'middle', horizontal: 'left' };
    lefPast.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F92D050' } };

    worksheet.mergeCells('M23:M26');
    const lefPastValue = worksheet.getCell('M23');
    lefPastValue.value = '-';
    lefPastValue.font = { size: 13, name: 'Angsana New', bold: true };
    lefPastValue.alignment = { vertical: 'middle', horizontal: 'center' };
    lefPastValue.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'F92D050' } };

    const indexNumber = worksheet.getCell('A29');
    indexNumber.value = 'ลำดับที่';
    indexNumber.font = { size: 14, bold: true, name: 'Angsana New' };
    indexNumber.alignment = { vertical: 'middle', horizontal: 'left' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      const productCell = worksheet.getCell(`A${rowNumber}`);
      productCell.value = `${index + 1}`;
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    worksheet.mergeCells('B29:G29');
    const listName = worksheet.getCell('B29');
    listName.value = 'รายการ';
    listName.font = { size: 14, bold: true, name: 'Angsana New' };
    listName.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`B${rowNumber}:C${rowNumber}`);
      const productCell = worksheet.getCell(`B${rowNumber}`);
      productCell.value = ` ${product.name}`;
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'left' };
    });

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`D${rowNumber}:E${rowNumber}`);
      const productCell = worksheet.getCell(`D${rowNumber}`);
      productCell.value = `${product.size}`;
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'left' };
    });

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`F${rowNumber}`);
      const productCell = worksheet.getCell(`F${rowNumber}`);
      productCell.value = `${product.unit}`;
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'left' };
    });

    worksheet.mergeCells('H29:I29');
    const amout = worksheet.getCell('H29');
    amout.value = 'จำนวน';
    amout.font = { size: 14, bold: true, name: 'Angsana New' };
    amout.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`H${rowNumber}:I${rowNumber}`);
      const productCell = worksheet.getCell(`H${rowNumber}`);
      productCell.value = `${product.quantity}   ${product.unit}`;
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const pricePerDay = worksheet.getCell('J29');
    pricePerDay.value = 'ค่าเช่า / วัน';
    pricePerDay.font = { size: 14, bold: true, name: 'Angsana New' };
    pricePerDay.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`J${rowNumber}`);
      const productCell = worksheet.getCell(`J${rowNumber}`);
      productCell.value = "-";
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const numberDay = worksheet.getCell('K29');
    numberDay.value = 'จำนวนวัน';
    numberDay.font = { size: 14, bold: true, name: 'Angsana New' };
    numberDay.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`K${rowNumber}`);
      const productCell = worksheet.getCell(`K${rowNumber}`);
      productCell.value = `${data.date}`;
      productCell.font = { size: 14, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const priceDamage = worksheet.getCell('L29');
    priceDamage.value = 'ค่าปรับสินค้า / ชิ้น';
    priceDamage.font = { size: 14, bold: true, name: 'Angsana New' };
    priceDamage.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`L${rowNumber}`);
      const productCell = worksheet.getCell(`L${rowNumber}`);
      productCell.value = "-";
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const finalPrice = worksheet.getCell('M29');
    finalPrice.value = 'จำนวนเงินรวม';
    finalPrice.font = { size: 14, bold: true, name: 'Angsana New' };
    finalPrice.alignment = { vertical: 'middle', horizontal: 'center' };

    products.forEach((product, index) => {
      const rowNumber = 30 + index;
      worksheet.mergeCells(`M${rowNumber}`);
      const productCell = worksheet.getCell(`M${rowNumber}`);
      productCell.value = "-";
      productCell.font = { size: 13, name: 'Angsana New' };
      productCell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    const total_Price_Out = products.reduce((sum, product) => {
      return sum + (product.quantity * product.price * data.date);
    }, 0);

    const total_Price_Discount = total_Price_Out + (data.move_price ? data.move_price : 0) + (data.shipping_cost ? data.shipping_cost : 0) - (data.discount ? data.discount : 0);

    const finalTotalPrice = (data.guarantee_price ? data.guarantee_price : 0) + total_Price_Discount;

    worksheet.mergeCells('A60:J61');
    const priceThb = worksheet.getCell('A60');
    priceThb.value = "-";
    priceThb.font = { size: 14, bold: true, name: 'Angsana New' };
    priceThb.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'ddddde' }
    };
    priceThb.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('K60:L61');
    const totalFinalPrice = worksheet.getCell('K60');
    totalFinalPrice.value = ' ยอดรวมที่ต้องชำระ';
    totalFinalPrice.font = { size: 14, bold: true, name: 'Angsana New' };
    totalFinalPrice.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('M60:M61');
    const totalFinalPriceValue = worksheet.getCell('M60');
    totalFinalPriceValue.value = "-";
    totalFinalPriceValue.font = { size: 14, bold: true, name: 'Angsana New' };
    totalFinalPriceValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const guaranteePrice = worksheet.getCell('K59');
    guaranteePrice.value = ' ค่าประกันสินค้า';
    guaranteePrice.font = { size: 13, name: 'Angsana New' };
    guaranteePrice.alignment = { vertical: 'middle', horizontal: 'left' };

    const guaranteePriceValue = worksheet.getCell('M59');
    guaranteePriceValue.value = "-";
    guaranteePriceValue.font = { size: 13, name: 'Angsana New' };
    guaranteePriceValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const totalDiscount = worksheet.getCell('K58');
    totalDiscount.value = ' รวมหลังหักส่วนลด';
    totalDiscount.font = { size: 13, bold: true, name: 'Angsana New' };
    totalDiscount.alignment = { vertical: 'middle', horizontal: 'left' };

    const totalDiscountValue = worksheet.getCell('M58');
    totalDiscountValue.value = "-";
    totalDiscountValue.font = { size: 13, bold: true, name: 'Angsana New' };
    totalDiscountValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const discount = worksheet.getCell('K57');
    discount.value = ' ส่วนลด';
    discount.font = { size: 13, name: 'Angsana New' };
    discount.alignment = { vertical: 'middle', horizontal: 'left' };

    const discountValue = worksheet.getCell('M57');
    discountValue.value = "-";
    discountValue.font = { size: 13, name: 'Angsana New' };
    discountValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const movePrice = worksheet.getCell('K56');
    movePrice.value = ' ค่าบริการเคลื่อนย้ายสินค้า';
    movePrice.font = { size: 13, name: 'Angsana New' };
    movePrice.alignment = { vertical: 'middle', horizontal: 'left' };

    const movePriceValue = worksheet.getCell('M56');
    movePriceValue.value = "-";
    movePriceValue.font = { size: 13, name: 'Angsana New' };
    movePriceValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const shippingCost = worksheet.getCell('K55');
    shippingCost.value = ' ค่าขนส่งสินค้าไป - กลับ';
    shippingCost.font = { size: 13, bold: true, name: 'Angsana New' };
    shippingCost.alignment = { vertical: 'middle', horizontal: 'left' };

    const shippingCostValue = worksheet.getCell('M55');
    shippingCostValue.value = "-";
    shippingCostValue.font = { size: 13, bold: true, name: 'Angsana New' };
    shippingCostValue.alignment = { vertical: 'middle', horizontal: 'center' };

    const totalPrice = products.reduce((sum, product) => {
      return sum + (product.quantity * product.price * data.date);
    }, 0);

    const totalPriceOut = worksheet.getCell('K54');
    totalPriceOut.value = ' รวมเงิน';
    totalPriceOut.font = { size: 13, name: 'Angsana New' };
    totalPriceOut.alignment = { vertical: 'middle', horizontal: 'left' };

    const totalPriceOutValue = worksheet.getCell('M54');
    totalPriceOutValue.value = "-";
    totalPriceOutValue.font = { size: 13, bold: true, name: 'Angsana New' };
    totalPriceOutValue.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells('A57:B57');
    const note = worksheet.getCell('A57');
    note.value = ' หมายเหตุ :';
    note.font = { size: 14, bold: true, name: 'Angsana New', color: { argb: 'FFFF0000' }, underline: true };
    note.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C57:J57');
    worksheet.mergeCells('C58:J58');
    worksheet.mergeCells('C59:J59');

    worksheet.mergeCells('A46:J46');
    const noteif = worksheet.getCell('A46');
    noteif.value = ' เงื่อนไขการเช่าสินค้า/โปรดอ่านเงื่อนไขก่อนทำการเช่า';
    noteif.font = { size: 11, bold: true, name: 'Angsana New', color: { argb: 'FFFF0000' }, underline: true };
    noteif.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A47:J47');
    const note1 = worksheet.getCell('A47');
    note1.value = ' 1. ผู้เช่าต้องชำระค่าเช่า เงินประกัน และค่าใช้จ่ายอื่น ๆ ตามที่ตกลงในใบเสนอราคา ก่อนวันรับสินค้า';
    note1.font = { size: 10, bold: true, name: 'Angsana New' };
    note1.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A48:J48');
    const note2 = worksheet.getCell('A48');
    note2.value = ' 2. ทางร้านจะทำการจัดส่งสินค้าให้หลังจากมีการชำระเงินครบตามจำนวนที่ตกลงกันไว้';
    note2.font = { size: 10, bold: true, name: 'Angsana New' };
    note2.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A49:J49');
    const note3 = worksheet.getCell('A49');
    note3.value = ' 3. การรับสินค้าผู้เช่าจะต้องเป็นผู้รับภาระในค่าขนส่ง โดยคิดจากระยะทางส่งตามจริงและไม่สามารถเรียกเก็บค่าใช้จ่ายใดๆจากผู้ให้เช่าทั้งสิ้น';
    note3.font = { size: 10, bold: true, name: 'Angsana New' };
    note3.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A50:J50');
    const note4 = worksheet.getCell('A50');
    note4.value = ' 4. หากสินค้าเช่าเกิดความเสียหายหรือสูญหายผู้ให้เช่าจะทำการปรับเงินตามราคาสินค้าที่แจ้งไว้จากู้เช่า';
    note4.font = { size: 10, bold: true, name: 'Angsana New' };
    note4.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A51:J51');
    const note5 = worksheet.getCell('A51');
    note5.value = ' 5. ผู้เช่าสามารถเช่าขั้นต่ำ 3 วันเท่านั้น - วันส่งสินค้าทางร้านจะไม่คิดค่าเช่า และจะเริ่มคิดวันถัดไป วันรับคืนสินค้าคิดค่าเช่าตามปกติ';
    note5.font = { size: 10, bold: true, name: 'Angsana New' };
    note5.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A52:J52');
    const note6 = worksheet.getCell('A52');
    note6.value = ' 6. หากผู้เช่าต้องการต่อสัญญา ผู้เช่าต้องแจ้งผู้ให้ทราบล่วงหน้าอย่างน้อย 1-2 วัน ก่อนหมดสัญญาเช่า หากไม่แจ้งล่วงหน้า';
    note6.font = { size: 10, bold: true, name: 'Angsana New' };
    note6.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A53:J53');
    const note8 = worksheet.getCell('A53');
    note8.value = '      ผู้ให้เช่าจะทำการเก็บสินค้ากลับในวันที่ครบกำหนดทันที หากผู้เช่ายังไม่รื้อของเช่า ผู้ให้เช่าจะทำการรื้อถอนด้วยตนเอง';
    note8.font = { size: 10, bold: true, name: 'Angsana New' };
    note8.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A54:J54');
    const note9 = worksheet.getCell('A54');
    note9.value = '      และจะไม่รับผิดชอบต่อความเสียหายใดๆ เพราะถือว่าผู้เช่าผิดสัญญาเช่าต่อผู้ให้เช่า และทำการยึดมัดจำทั้งหมด';
    note9.font = { size: 10, bold: true, name: 'Angsana New' };
    note9.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A55:J55');
    const note10 = worksheet.getCell('A55');
    note10.value = ' 7. กรณีต่อสัญญาเช่าสินค้า ผู้เช่าต้องชำระค่าต่อสัญญาเช่าภายใน 1-2 วันหลังต่อสัญญาเช่า และไม่สามารถนำมาหักเงินประกัน';
    note10.font = { size: 10, bold: true, name: 'Angsana New' };
    note10.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('A56:J56');
    const note11 = worksheet.getCell('A56');
    note11.value = ' 8. ผู้เช่าต้องเป็นผู้ดำเนินการเคลื่อนย้ายสินค้าเองทุกครั้ง หากไม่เคลื่อนย้ายสินค้าเอง ผู้เช่าจะต้องจ่ายค่าบริการเคลื่อนย้ายสินค้าให้แก่ผู้ให้เช่า';
    note11.font = { size: 10, bold: true, name: 'Angsana New', underline: true };
    note11.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C43:F43');
    const payment1 = worksheet.getCell('C43');
    payment1.value = '  ช่องทางชำระเงิน: ธ.ทหารไทยธนชาต (ttb)';
    payment1.font = { size: 12, bold: true, name: 'Angsana New', color: { argb: 'F0070C0' }, underline: true };
    payment1.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C44:G44');
    const payment2 = worksheet.getCell('C44');
    payment2.value = '  เลขที่บัญชี: 192-2-594344 / นางสาวกรวรรณ กองจันทึก';
    payment2.font = { size: 12, bold: true, name: 'Angsana New', color: { argb: 'F0070C0' }, underline: true };
    payment2.alignment = { vertical: 'middle', horizontal: 'left' };

    worksheet.mergeCells('C45:D45');
    const payment3 = worksheet.getCell('C45');
    payment3.value = '  ยอดค่าเช่าเฉลี่ย / วัน :';
    payment3.font = { size: 12, bold: true, name: 'Angsana New' };
    payment3.alignment = { vertical: 'middle', horizontal: 'left' };
    payment3.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCC00' } };

    const average = (totalPrice - (data.discount ? data.discount : 0)) / data.date;

    const payment3Value = worksheet.getCell('E45');
    payment3Value.value = "-";
    payment3Value.font = { size: 12, bold: true, name: 'Angsana New'};
    payment3Value.alignment = { vertical: 'middle', horizontal: 'center' };
    payment3Value.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCC00' } };

    const payment3ValueThb = worksheet.getCell('F45');
    payment3ValueThb.value = '  บาท';
    payment3ValueThb.font = { size: 12, bold: true, name: 'Angsana New' };
    payment3ValueThb.alignment = { vertical: 'middle', horizontal: 'left' };
    payment3ValueThb.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFCC00' } };

    worksheet.mergeCells('A63:B63');
    const nameCustomer = worksheet.getCell('A63');
    nameCustomer.value = 'ลงชื่อ :';
    nameCustomer.font = { size: 13, bold: true, name: 'Angsana New' };
    nameCustomer.alignment = { vertical: 'bottom', horizontal: 'right' };

    const nameCustomer1 = worksheet.getCell('G63');
    nameCustomer1.value = 'ผู้ส่งของ';
    nameCustomer1.font = { size: 13, bold: true, name: 'Angsana New' };
    nameCustomer1.alignment = { vertical: 'bottom', horizontal: 'left' };

    worksheet.mergeCells('H63:I63');
    const namePle = worksheet.getCell('H63');
    namePle.value = 'ลงชื่อ :';
    namePle.font = { size: 13, bold: true, name: 'Angsana New' };
    namePle.alignment = { vertical: 'bottom', horizontal: 'right' };

    const namePle2 = worksheet.getCell('M63');
    namePle2.value = 'ผู้รับของ';
    namePle2.font = { size: 13, bold: true, name: 'Angsana New' };
    namePle2.alignment = { vertical: 'bottom', horizontal: 'left' };

    const namePle1 = worksheet.getCell('J63');
    namePle1.value = '';
    namePle1.font = { size: 13, bold: true, name: 'Angsana New' };
    namePle1.alignment = { vertical: 'bottom', horizontal: 'center' };

    worksheet.mergeCells('H64:M64');
    const namePleRemark = worksheet.getCell('H64');
    namePleRemark.value = '**ได้รับสินค้าตามรายการข้างต้นไว้ถูกต้องเเล้ว**';
    namePleRemark.font = { size: 13, bold: true, name: 'Angsana New', color: { argb: 'FFFF0000' } };
    namePleRemark.alignment = { vertical: 'bottom', horizontal: 'center' };

    worksheet.mergeCells('C63:F63');
    worksheet.mergeCells('J63:L63');
    worksheet.mergeCells('A64:G64');

    const branches = [
      '\u25CB สาขาพระราม 2',
      '\u25CB สาขาเเยกนพวงศ์',
      '\u25CB สาขาชลบุรี'
    ];

    const allBranches = branches.join('   ');
    const branchCell = worksheet.getCell('A64');
    branchCell.value = allBranches;
    branchCell.font = { size: 13, bold: true, name: 'Angsana New' };
    branchCell.alignment = { vertical: 'bottom', horizontal: 'center' };

    for (let col = 1; col <= 13; col++) {

      const cell = worksheet.getCell(10, col);
      const cell_bottom = worksheet.getCell(14, 12);
      const cell_bottom11 = worksheet.getCell(25, 1);
      const cell_bottom1 = worksheet.getCell(26, 1);
      const cell_bottom2 = worksheet.getCell(26, 2);
      const cell_bottom3 = worksheet.getCell(26, 3);
      const cell_bottom4 = worksheet.getCell(26, 4);
      const cell_bottom5 = worksheet.getCell(26, 5);
      const cell_bottom6 = worksheet.getCell(26, 6);
      const cell_bottom7 = worksheet.getCell(26, 7);
      const cell_bottom8 = worksheet.getCell(26, 8);
      const cell_bottom9 = worksheet.getCell(26, 9);
      const cell_bottom10 = worksheet.getCell(26, 10);

      cell.border = {
        top: { style: 'medium' }
      };
      cell_bottom.border = {
        bottom: { style: 'thin' }
      };
      cell_bottom11.border = {
        left: { style: 'medium' }
      };
      cell_bottom1.border = {
        left: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_bottom2.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom3.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom4.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom5.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom6.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom7.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom8.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom9.border = {
        bottom: { style: 'medium' }
      };
      cell_bottom10.border = {
        bottom: { style: 'medium' }
      };
    }

    customer_name.border = {
      left: { style: 'medium' }
    };

    company_name.border = {
      left: { style: 'medium' }
    };

    address.border = {
      left: { style: 'medium' }
    }

    space.border = {
      left: { style: 'medium' }
    }

    phone.border = {
      left: { style: 'medium' }
    }

    date.border = {
      top: { style: 'thin' },
      left: { style: 'medium' },
      bottom: { style: 'thin' }
    };
    dateValue.border = {
      right: { style: 'medium' },
      bottom: { style: 'thin' }
    };

    expDate.border = {
      left: { style: 'medium' },
      bottom: { style: 'thin' }
    };
    expDateValue.border = {
      right: { style: 'medium' },
      bottom: { style: 'thin' }
    };

    condition.border = {
      left: { style: 'medium' },
      bottom: { style: 'medium' }
    };
    conditionValue.border = {
      right: { style: 'medium' },
      bottom: { style: 'medium' }
    };

    taxNumber.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'thin' }
    };
    taxNumberValue.border = {
      top: { style: 'medium' },
      right: { style: 'medium' },
      bottom: { style: 'thin' }
    };

    totalPriceOut.border = {
      top: { style: 'thin' }
    };
    lefPast.border = {
      bottom: { style: 'medium' },
      left: { style: 'medium' },
    };
    lefPastValue.border = {
      bottom: { style: 'medium' },
      right: { style: 'medium' }
    };

    for (let col = 1; col <= 13; col++) {

      const cell = worksheet.getCell(29, col);
      const cell_left = worksheet.getCell(29, 1);
      const cell_left1 = worksheet.getCell(29, 2);
      const cell_left2 = worksheet.getCell(29, 7);
      const cell_left3 = worksheet.getCell(29, 8);
      const cell_left4 = worksheet.getCell(29, 9);
      const cell_left5 = worksheet.getCell(29, 10);
      const cell_left6 = worksheet.getCell(29, 11);
      const cell_left7 = worksheet.getCell(29, 12);
      const cell_left8 = worksheet.getCell(29, 13);

      cell.border = {
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left.border = {
        right: { style: 'thin' },
        left: { style: 'medium' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left1.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left2.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left3.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left4.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left5.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left6.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left7.border = {
        right: { style: 'thin' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      cell_left8.border = {
        right: { style: 'medium' },
        top: { style: 'medium' },
        bottom: { style: 'medium' }
      };
    }

    for (let row = 29; row <= 45; row++) {

      const cell = worksheet.getCell(`B${row}`);
      const cell_b = worksheet.getCell(`B${row}`);
      const cell_h = worksheet.getCell(`H${row}`);
      const cell_j = worksheet.getCell(`J${row}`);
      const cell_k = worksheet.getCell(`K${row}`);
      const cell_l = worksheet.getCell(`L${row}`);
      const cell_m = worksheet.getCell(`M${row}`);

      cell.border = {
        left: { style: 'thin' },
        right: { style: 'thin' }
      };
      cell_b.border = {
        left: { style: 'thin' }
      };
      cell_h.border = {
        left: { style: 'thin' }
      };
      cell_j.border = {
        left: { style: 'thin' }
      };
      cell_k.border = {
        left: { style: 'thin' }
      };
      cell_l.border = {

        right: { style: 'thin' }
      };
      cell_m.border = {
        left: { style: 'thin' }
      };
    }

    for (let row = 29; row <= 55; row++) {
      const cell_a = worksheet.getCell(`A${row}`);
      const cell_m = worksheet.getCell(`M${row}`);
      const cell_l = worksheet.getCell(`L${row}`);
      const cell_k = worksheet.getCell(`K${row}`);
      const cell_j = worksheet.getCell(`J${row}`);
      cell_a.border = {
        left: { style: 'medium' }
      };
      cell_m.border = {
        right: { style: 'medium' },
        left: { style: 'thin' }
      };
      cell_l.border = {
        left: { style: 'thin' }
      };
      cell_k.border = {
        left: { style: 'thin' }
      };
      cell_j.border = {
        left: { style: 'thin' }
      };
    }

    for (let col = 1; col <= 13; col++) {
      const cell = worksheet.getCell(61, col);
      const cell_right = worksheet.getCell(61, 13);
      const cell_left = worksheet.getCell(61, 1);
      const cell_h = worksheet.getCell(61, 8);
      const cell_i = worksheet.getCell(61, 9);
      const cell_k = worksheet.getCell(61, 11);

      const cell_guarantee = worksheet.getCell(59, 11);
      const cell_guarantee2 = worksheet.getCell(59, 12);
      const cell_guaranteeValue = worksheet.getCell(59, 13);

      // const vat = worksheet.getCell(56, 11);
      // const vat2 = worksheet.getCell(56, 12);
      // const vatValue = worksheet.getCell(56, 13);

      const totalDiscount = worksheet.getCell(58, 11);
      const totalDiscount2 = worksheet.getCell(58, 12);
      const totalDiscountValue = worksheet.getCell(58, 13);

      const discount = worksheet.getCell(57, 11);
      const discount2 = worksheet.getCell(57, 12);
      const discountValue = worksheet.getCell(57, 13);

      const movePrice = worksheet.getCell(56, 11);
      const movePrice2 = worksheet.getCell(56, 12);
      const movePriceValue = worksheet.getCell(56, 13);

      const shippingCost = worksheet.getCell(55, 11);
      const shippingCost2 = worksheet.getCell(55, 12);
      const shippingCostValue = worksheet.getCell(55, 13);

      const totalPriceOut = worksheet.getCell(54, 11);
      const totalPriceOut2 = worksheet.getCell(54, 12);
      const totalPriceOutValue = worksheet.getCell(54, 13);

      const note = worksheet.getCell(57, col);
      const note1 = worksheet.getCell(57, 1);
      const note2 = worksheet.getCell(58, 1);
      const note3 = worksheet.getCell(59, 1);

      const spaceLast = worksheet.getCell(62, col);
      const spaceLast1 = worksheet.getCell(62, 1);
      const spaceLast2 = worksheet.getCell(62, 13);

      const spaceName = worksheet.getCell(65, col);
      const spaceName1 = worksheet.getCell(65, 1);
      const spaceName2 = worksheet.getCell(65, 13);
      const spaceName3 = worksheet.getCell(64, 1);
      const spaceName4 = worksheet.getCell(64, 13);
      const spaceName5 = worksheet.getCell(63, 1);
      const spaceName6 = worksheet.getCell(63, 13);

      spaceName.border = {
        bottom: { style: 'medium' }
      };
      spaceName1.border = {
        left: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      spaceName2.border = {
        right: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      spaceName3.border = {
        left: { style: 'medium' }
      };
      spaceName4.border = {
        right: { style: 'medium' }
      };
      spaceName5.border = {
        left: { style: 'medium' }
      };
      spaceName6.border = {
        right: { style: 'medium' }
      };

      spaceLast.border = {
        bottom: { style: 'medium' }
      };
      spaceLast1.border = {
        left: { style: 'medium' },
        bottom: { style: 'medium' }
      };
      spaceLast2.border = {
        right: { style: 'medium' },
        bottom: { style: 'medium' }
      };

      note.border = {
        top: { style: 'thin' }
      };
      note1.border = {
        left: { style: 'medium' },
        top: { style: 'thin' }
      };
      note2.border = {
        left: { style: 'medium' }
      };
      note3.border = {
        left: { style: 'medium' }
      };
      cell.border = {
        bottom: { style: 'medium' }
      };
      cell_right.border = {
        top: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };
      cell_left.border = {
        bottom: { style: 'medium' },
        left: { style: 'medium' }
      };
      cell_h.border = {
        bottom: { style: 'medium' }
      };
      cell_i.border = {
        bottom: { style: 'medium' }
      };
      cell_k.border = {
        top: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'thin' },
        left: { style: 'thin' }
      };

      cell_guarantee.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      cell_guarantee2.border = {
        top: { style: 'thin' }
      };
      cell_guaranteeValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };

      totalDiscount.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      totalDiscount2.border = {
        top: { style: 'thin' }
      };
      totalDiscountValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };

      discount.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      discount2.border = {
        top: { style: 'thin' }
      };
      discountValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };

      movePrice.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      movePrice2.border = {
        top: { style: 'thin' }
      };
      movePriceValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };

      shippingCost.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      shippingCost2.border = {
        top: { style: 'thin' }
      };
      shippingCostValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };

      totalPriceOut.border = {
        top: { style: 'thin' },
        bottom: { style: 'thin' },
        left: { style: 'thin' }
      };
      totalPriceOut2.border = {
        top: { style: 'thin' }
      };
      totalPriceOutValue.border = {
        top: { style: 'thin' },
        right: { style: 'medium' },
        left: { style: 'thin' }
      };
    }

    for (let col = 1; col < 11; col++) {
      const cell = worksheet.getCell(60, col);
      cell.border = {
        top: { style: 'medium' },
        right: { style: 'thin' },
        bottom: { style: 'medium' },
        left: { style: 'medium' }
      };
    }

    for (let col = 1; col < 11; col++) {
      const cell = worksheet.getCell(46, col);
      const cell_1 = worksheet.getCell(46, 1);
      const cell_8 = worksheet.getCell(46, 8);
      const cell_9 = worksheet.getCell(46, 10);

      const cell_44 = worksheet.getCell(46, 2);
      const cell_45 = worksheet.getCell(47, 2);
      const cell_46 = worksheet.getCell(48, 2);
      const cell_47 = worksheet.getCell(49, 2);
      const cell_48 = worksheet.getCell(50, 2);
      const cell_49 = worksheet.getCell(51, 2);
      const cell_50 = worksheet.getCell(52, 2);
      const cell_51 = worksheet.getCell(53, 2);
      const cell_52 = worksheet.getCell(54, 2);
      const cell_53 = worksheet.getCell(55, 2);
      const cell_54 = worksheet.getCell(56, 2);

      cell.border = {
        top: { style: 'thin' }
      };
      cell_1.border = {
        top: { style: 'thin' },
        right: { style: 'thin' },
        left: { style: 'medium' }
      };
      cell_8.border = {
        top: { style: 'thin' },
        left: { style: 'thin' }
      };
      cell_9.border = {
        left: { style: 'thin' },
        top: { style: 'thin' },
      };

      cell_44.border = {
        top: { style: 'thin' },
        left: { style: 'medium' }
      };
      cell_45.border = {
        left: { style: 'medium' }
      };
      cell_46.border = {
        left: { style: 'medium' }
      };
      cell_47.border = {
        left: { style: 'medium' }
      };
      cell_48.border = {
        left: { style: 'medium' }
      };
      cell_49.border = {
        left: { style: 'medium' }
      };
      cell_50.border = {
        left: { style: 'medium' }
      };
      cell_51.border = {
        left: { style: 'medium' }
      };
      cell_52.border = {
        left: { style: 'medium' }
      };
      cell_53.border = {
        left: { style: 'medium' }
      };
      cell_54.border = {
        left: { style: 'medium' }
      };
    }

    for (let col = 10; col < 13; col++) {
      const cell = worksheet.getCell(63, col);
      const cell_62 = worksheet.getCell(64, col);
      cell.border = {
        bottom: { style: 'dotted', color: { argb: 'FF000000' } }
      };
      cell_62.border = {
        bottom: { style: 'dotted', color: { argb: 'FF000000' } }
      };
    }

    for (let col = 3; col < 7; col++) {
      const cell = worksheet.getCell(63, col);
      const cell_62 = worksheet.getCell(64, col);
      cell.border = {
        bottom: { style: 'dotted', color: { argb: 'FF000000' } }
      };
      cell_62.border = {
        bottom: { style: 'dotted', color: { argb: 'FF000000' } }
      };
    }

    for (let row = 63; row < 66; row++) {
      const cell = worksheet.getCell(`G${row}`);
      const cell_62 = worksheet.getCell(`A${64}`);
      const cell_64 = worksheet.getCell(`M${64}`);
      cell.border = {
        right: { style: 'thin' }
      };
      cell_62.border = {
        left: { style: 'medium' },
        right: { style: 'thin' }
      };
      cell_64.border = {
        right: { style: 'medium' }
      };
    }

    for (let col = 1; col < 14; col++) {
      const cell = worksheet.getCell(29, col);
      const cell_1 = worksheet.getCell(30, col);

      const cell_bottom20 = worksheet.getCell(30, 1);
      const cell_bottom21 = worksheet.getCell(30, 8);
      const cell_bottom22 = worksheet.getCell(30, 11);

      cell.border = {
        top: { style: 'medium' },
        right: { style: 'thin' },
        left: { style: 'thin' }
      };

      cell_bottom20.border = {
        top: { style: 'medium' },
        right: { style: 'thin' },
        left: { style: 'medium' }
      };
      cell_bottom21.border = {
        top: { style: 'medium' },
        right: { style: 'thin' },
        left: { style: 'thin' }
      };
      cell_bottom22.border = {
        top: { style: 'medium' },
        right: { style: 'thin' },
        left: { style: 'thin' }
      };

      cell_1.border = {
        top: { style: 'medium' }
      };
    }

    for (let col = 1; col < 8; col++) {

      const cell = worksheet.getCell(65, col);
      const cell_1 = worksheet.getCell(65, 1);
      const cell_7 = worksheet.getCell(65, 7);

      cell.border = {
        bottom: { style: 'medium' },
      };
      cell_1.border = {
        bottom: { style: 'medium' },
        left: { style: 'medium' }
      };
      cell_7.border = {
        bottom: { style: 'medium' },
        right: { style: 'thin' }
      };
    }

    for (let col = 1; col < 13; col++) {

      const cell = worksheet.getCell(30, 13);
      const cell_0 = worksheet.getCell(29, 1);
      const cell_1 = worksheet.getCell(29, 13);
      const cell_2 = worksheet.getCell(10, 1);

      cell.border = {
        left: { style: 'thin' },
        right: { style: 'medium' }
      }
      cell_0.border = {
        top: { style: 'medium' },
        left: { style: 'medium' }
      }
      cell_1.border = {
        top: { style: 'medium' },
        right: { style: 'medium' },
        bottom: { style: 'medium' }
      }
      cell_2.border = {
        top: { style: 'medium' },
        left: { style: 'medium' }
      }
    }

    const imagePath = "img/logoNew.png";
    fetch(imagePath)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const buffer = reader.result;
          const imageId = workbook.addImage({
            buffer: buffer,
            extension: 'png',
          });

          worksheet.addImage(imageId, {
            tl: { col: 0, row: 1 },
            ext: { width: 185, height: 162.5 }
          });

          productData.forEach((row, index) => {
            const rowIndex = index + 100;
            worksheet.getRow(rowIndex).font = { size: 10, name: 'Angsana New' };
          });

          workbook.xlsx.writeBuffer().then((buffer) => {
            const blob = new Blob([buffer], { type: 'application/octet-stream' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ใบเสนอราคา-เลขที่-${data.export_number}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
          }).catch((error) => {
            console.error("Error while generating Excel file:", error);
          });
        };
        reader.readAsArrayBuffer(imageBlob);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  };

  return (
    <div className="w-screen h-auto p-2 mt-10 font-sarabun">
      <div className="grid grid-cols-5 border-b-4 pb-2 print:mb-0 print:p-0">
        <div className="col-span-3 flex">
          <img
            src="img/logo2.png"
            alt="logo"
            className="w-40 h-34 object-contain"
          />
          <div className="text-md print:text-[11.5px] w-full">
            <h1 className="text-lg font-bold whitespace-nowrap font-sarabun">ร้านภัทรชัย เเบบเหล็ก</h1>
            <p className="font-sarabun">รับผลิต จำหน่ายเเละให้เช่า</p>
            <p className="font-sarabun">เเบบคาน , เเบบเสา , เเบบหล่องานถนน , ฟุตติ้ง</p>
            <p className="font-sarabun">นั่งร้าน , ยูเเจ็ค , เเจ็คเบส , ฉาก , ป๊อปค้ำยัน</p>
            <p className="font-sarabun">เเบบฐานเสาไฟ เเละเเบบพิเศษสั่งทำทุกชนิด</p>
            <p className="font-sarabun">095-5862149 , 085-3806974</p>
            <p className="whitespace-nowrap font-sarabun">
              สาขา: โคกขาม 081-1571097 / นพวงศ์ 081-1571094 / ชลบุรี 083-1653979
            </p>
          </div>
        </div>

        <div className="col-span-2 flex justify-end items-center mt-6">
          <div className="border-2 border-black text-center p-2 w-[160px] h-20 flex justify-center items-center">
            <p className="text-sm font-bold whitespace-nowrap font-sarabun">ใบเสนอราคา / ใบเเจ้งหนี้</p>
          </div>
        </div>

      </div>

      {/* Customer Info */}
      <div className="mb-2 grid grid-cols-3">
        <div className="col-span-2 border-2 border-black print:col-span-2 print:text-[12px] text-md p-2 print:p-2 flex flex-col justify-around">
          <p>
            <span className="font-bold font-sarabun">ชื่อผู้ติดต่อ :</span><span className="ml-2 font-sarabun">{" " + data.customer_name}</span>
          </p>
          <p>
            <span className="font-bold font-sarabun">ชื่อบริษัท :</span><span className="ml-[17.5px] font-sarabun">{data.place_name}</span>
          </p>
          <p>
            <span className="font-bold font-sarabun">ที่อยู่ :</span><span className="ml-10 font-sarabun">{data.address}</span>
          </p>
          <p>
            <span className="font-bold "></span>
            <span className="ml-[69px] text-red-500 underline font-sarabun">{'หน้างาน - '}{data.place_name}</span>
          </p>

          <p>
            <span className="font-bold font-sarabun">โทร :</span><span className="ml-11 font-sarabun">099-999-9999</span>
          </p>
          <p>
            <span className="font-bold font-sarabun">เลขประจำตัวผู้เสียภาษีอากร :</span>
            <input
              type="text"
              className="ml-2 font-sarabun"
              placeholder="กรอกเลขประจำตัวผู้เสียภาษี"
            />
          </p>
        </div>

        <div className="col-span-1 print:col-span-1 border-t-2 border-b-2 border-r-2 border-black grid grid-cols-2 grid-rows-4 text-sm print:text-[12px] items-center">
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            เลขที่ :
          </p>
          <p className="border-b-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            {data.export_number}
          </p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            วันที่เสนอราคา :
          </p>
          <p className="border-b-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            {data.reserve_out
              ? new Date(data.reserve_out).toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
              : ''}
          </p>
          <p className="col-span-1 border-b-2 border-r-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            วันที่หมดอายุ :
          </p>
          <p className="border-b-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            {expiryDate
              ? new Date(expiryDate).toLocaleDateString('th-TH', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })
              : ''}
          </p>
          <p className="col-span-1 border-r-2 border-black text-center flex justify-center items-center h-full font-sarabun">
            เงื่อนไขการชำระเงิน :
          </p>
          <p className="border-black text-center flex justify-center items-center h-full font-sarabun">เงินสด/โอน</p>
        </div>

      </div>

      {/* Table */}
      <div className="h-[240px] text-sm grid grid-cols-10 grid-rows-11 print:text-[9px] ">
        {/* หัวตาราง */}
        <div className=" h-full w-full row-span-11 border-r-2 border-l-2 border-black flex flex-col text-center">
          <span className=" border-b-2 border-t-2 border-black font-bold font-sarabun">ลำดับ</span>
          {products.map((product, index) => (
            <span key={index} className="font-sarabun">{index + 1}</span>
          ))}
        </div>
        <div className=" h-full w-full col-span-4 row-span-11 border-r-2 border-black flex flex-col ">
          <span className="  border-b-2 border-t-2 border-black text-center font-bold font-sarabun">รายการ</span>
          {products.map((product, index) => (
            <span key={index} className="ml-2 font-sarabun">{product.name}  <span className='ml-10 font-sarabun'>{product.size}</span></span>
          ))}
        </div>
        <div className=" h-full w-full  row-span-11 border-r-2 border-black flex flex-col text-center ">
          <span className="  border-b-2 border-t-2 border-black font-bold font-sarabun">จำนวน</span>
          {products.map((product, index) => (
            <span key={index} className="font-sarabun">{product.quantity} {product.unit}</span>
          ))}
        </div>
        <div className=" h-full w-full  row-span-11 border-r-2 border-black flex flex-col text-center ">
          <span className="  border-b-2 border-t-2 border-black font-bold font-sarabun">ราคาเช่า/วัน</span>
          {products.map((product, index) => (
            <span key={index} className='mr-2 text-end print:text-[10px] font-sarabun'>{product.price}.00</span>
          ))}
        </div>
        <div className=" h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="  border-b-2 border-t-2 border-black  text-center font-bold font-sarabun">จำนวนวัน</span>
          <span className='print:text-[10px] font-sarabun'>{data.date}</span>
        </div>
        <div className=" h-full w-full row-span-11 border-r-2 border-black flex flex-col text-center">
          <span className="  border-b-2 border-t-2 border-black text-center font-bold font-sarabun">ค่าปรับสินค้า/ชิ้น</span>
          {products.map((product, index) => (
            <span key={index} className='mr-2 text-end print:text-[10px] font-sarabun'>{formatNumber(product.price_damage)}</span>
          ))}
        </div>
        <div className=" h-full w-full row-span-11 border-r-2 border-black flex flex-col ">
          <span className="  border-b-2 border-t-2 border-black text-center font-bold font-sarabun">จำนวนเงินรวม</span>
          {products.map((product, index) => (
            <span className='mr-2 text-end print:text-[10px] font-sarabun'>{formatNumber((product.quantity * product.price) * data.date)}</span>
          ))}
        </div>
        {/* ข้อมูลในตาราง */}

      </div>

      {/* <div className="col-span-3 row-span-3 border-l-2 border-t-2 border-r-2 border-black w-[215px]">
        <span className="underline font-sarabun block print:text-[9px] ml-2">ช่องทางการชำระเงิน :</span>
        <span className="font-sarabun block print:text-[9px] ml-2">ธ.ทหารไทยธนชาต (ttb)</span>
        <span className="font-sarabun block print:text-[9px] ml-2">เลขบัญชี: 125-8-290964 / นางสาวกรวรรณ กองจันทึก</span>
        <span className="font-sarabun block print:text-[9px] text-red-500 ml-2">ยอดค่าเช่าเฉลี่ย / วัน: 10 บาท</span>
      </div> */}

      {/* ส่วนเงื่อนไข */}
      <div className=" grid grid-cols-10 grid-rows-14 h-[300px] text-[9px]">
        {/* เงื่อนไขซ้ายมือ */}
        <div className="col-span-7 row-span-11 grid grid-rows-11 border-2 border-black text-[9px] print:text-[8px] p-1 ">
          <span className="row-span-1 underline font-sarabun">เงื่อนไขการเช่าสินค้า/โปรดอ่านเงื่อนไขก่อนทำการเช่าสินค้า</span>
          <span className="row-span-1 font-sarabun">1.ผู้เช่าจะต้องชำระค่าเช่า เงินประกัน และค่าใช้จ่ายอื่นๆตามที่ตกลงในใบเสนอราคา ก่อนวันรับสินค้า</span>
          <span className="row-span-1 font-sarabun">2.ทางร้านจะทำการจัดส่งสินค้าให้หลังจากมีการชำระเงินครบตามจำนวนที่ตกลงกันไว้</span>
          <span className="row-span-1 font-sarabun">3.การรับสินค้าผู้เช่าจะต้องเป็นผู้รับภาระในค่าขนส่ง โดยคิดจากระยะทางส่งตามจริงและไม่สามารถเรียกเก็บค่าใช้จ่ายใดๆจากผู้ให้เช่าทั้งสิ้น</span>
          <span className="row-span-1 font-sarabun">4.หากสินค้าเช่าเกิดความเสียหายหรือสูญหายผู้ให้เช่าจะทำการปรับเงินตามราคาสินค้าที่แจ้งไว้จากผู้เช่า</span>
          <span className="row-span-1 font-sarabun">5.ผู้เช่าสามารถเช่าขั้นต่ำได้ 3 วันเท่านั้น-วันส่งสินค้าทางร้านจะไม่คิดค่าเช่า และจะเริ่มคิดวันถัดไป วันรับคืนสินค้าคิดค่าเช่าตามปกติ</span>
          <span className="row-span-1 font-sarabun">6.หากผู้เช่าต้องการต่อสัญญา ผู้เช่าต้องแจ้งผู้ให้เช่าทราบล่วงหน้าอย่างน้อย 1-2วัน ก่อนหมดสัญญาเช่า หากไม่แจ้งล่างหน้า </span>
          <span className="row-span-1 font-sarabun">ผู้ให้เช่าจะทำการเก็บสินค้ากลับในวันที่ครบกำหนดทันที หากผู้เช่ายังไม่รื้้อของเช่า ผู้ให้เช่าจะทำการรื้อถอนด้วยตนเอง</span>
          <span className="row-span-1 font-sarabun">และจะไม่รับผิดชอบต่อความเสียหายใดๆ เพราะถือว่าผู้ให้เช่าผิดสัญญาเช่าต่อผู้ให้เช่า และทำการยึดค่ามัดจำทั้งหมด</span>
          <span className="row-span-1 font-sarabun">7.กรณีต่อสัญญาเช่าสินค้า ผู้เช่าต้องชำระค่าต่อสัญญาเช่าภายใน 1-2วันหลังต่อสัญญาเช่า และไม่สามารถนำมาหักเงินประกันได้</span>
          <span className="row-span-1 font-sarabun">8.ผู้เช่าต้องเป็นผู้กำเนินการเคลื่อนย้ายสินค้าเองทุกครั้ง หากไม่เคลื่อนย้ายสินค้าเอง ผู้เช่าจะต้องจ่ายค่าบริการเคลื่อนย้ายสินค้าให้แก่ผู้ให้เช่า</span>
        </div>
        {/* row7 */}

        <div className="border-r-2 col-span-1 row-span-7 border-black"></div>
        <div className="border-r-2 col-span-1 row-span-7 border-black"></div>
        <div className="border-r-2 col-span-1 row-span-7 border-black"></div>
        <span className="col-span-2 row-span-1 border-t-2 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">รวมเงิน</span>
        <span className="border-t-2 border-b-2 border-r-2 border-black flex items-center justify-end print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.total_price_out)}</span>
        <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">ค่าขนส่งสินค้าไป-กลับ</span>
        <span className="border-b-2 border-r-2 border-black flex items-center justify-end print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.shipping_cost)}</span>
        <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">ค่าบริการเคลื่อนย้ายสินค้า</span>
        <span className="border-b-2 border-r-2 border-black flex items-center justify-end print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.move_price)}</span>
        <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">ส่วนลด</span>
        <span className="border-b-2 border-r-2 border-black flex items-center justify-end print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.discount)}</span>

        <div className="col-span-7 row-span-3 border-r-2 border-l-2 border-b-2 border-black print:text-[10px]">
          <u className="font-sarabun text-red-500">หมายเหตุ :</u>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="กรอกหมายเหตุ"
            className="w-2/3 border-none font-sarabun resize-none ml-2 mt-3 text-red-500"
            rows="3"
          />
        </div>

        <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">รวมหลังหักส่วนลด</span>
        <span className="col-span-1 row-span-1 border-b-2 border-r-2 border-black flex justify-end items-center print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.total_discount)}</span>

        <span className="col-span-2 row-span-1 border-r-2 border-b-2 border-black flex items-center pl-1 print:text-[10px] font-sarabun">ค่าประกันสินค้า</span>
        <span className="col-span-1 row-span-1 border-b-2 border-r-2 border-black flex justify-end items-center print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.guarantee_price)}</span>

        <span className="col-span-2 row-span-1 border-b-2 border-r-2 border-black flex items-center p-1 print:text-[10px] font-sarabun">ยอดรวมที่ต้องชำระ</span>
        <span className="col-span-1 row-span-1 border-r-2 border-b-2 border-black flex justify-end items-center print:text-[10px] pr-0.5 font-sarabun">{formatNumber(data.final_price)}</span>

        <div className="col-span-11 row-span-2 flex justify-center items-center font-bold border-r-2 border-b-2 border-l-2 border-black print:text-[12px] font-sarabun">
          {formatThaiBahtText(data.final_price)}
        </div>

      </div>

      <div className="grid grid-cols-10 h-[70px] border-b-2 border-r-2 border-l-2 border-black text-[9px] font-sarabun">

        <div className=" col-span-5 border-r-2 border-black flex flex-col p-4 justify-around h-[60px] items-center h-[70px]">
          <div>
            <p className="font-sarabun w-[300px] ml-6">ลงชื่อ  <input type="text" value={lesseeName} onChange={(e) => setLesseeName(e.target.value)} className="w-4/5 bg-blue-300" />  ผู้เช่า</p>
            <p className="font-sarabun ml-12 mt-[-12px]">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            <p className="font-sarabun w-[300px] ml-12"><input type="text" value={lesseeNameOne} onChange={(e) => setLesseeNameOne(e.target.value)} className="w-4/5 bg-red-300" /></p>
            <p className="font-sarabun ml-12 mt-[-12px]">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
          </div>
        </div>

        <div className=" col-span-5 border-black flex flex-col p-4 justify-around items-center h-[70px]">
          <div>
            <p className="font-sarabun w-[300px] ml-3">ลงชื่อ  <input type="text" value={lessorName} onChange={(e) => setLessorName(e.target.value)} className="w-4/5 bg-blue-300" />  ผู้ให้เช่า</p>
            <p className="font-sarabun ml-9 mt-[-12px]">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
            <p className="font-sarabun w-[300px] ml-9"><input type="text" value={lessorNameTwo} onChange={(e) => setLessorNameTwo(e.target.value)} className="w-4/5 bg-red-300" /></p>
            <p className="font-sarabun ml-9 mt-[-12px]">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</p>
          </div>
        </div>

      </div>

      <div className="flex justify-center mt-4">
        <button className='bg-blue-500 w-1/4 p-2 print:hidden text-[16px] rounded-md shadow-md hover:bg-blue-600 transition duration-200 text-white' onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>
    </div>
  );
}
