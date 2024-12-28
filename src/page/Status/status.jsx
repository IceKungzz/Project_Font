import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';
import { th } from 'date-fns/locale';
import { useNavigate } from "react-router-dom";

const StatusProduct = () => {
  const [status, setStatus] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [error, setError] = useState(null);
  const [branchName, setBranchName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token not found");
        }

        const url = "http://192.168.195.75:5000/v1/product/status/status";

        const response = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          }
        });

        if (response.data.code === 200) {
          setStatus(response.data.data["Status Product"]);
          console.log(response.data.data, "response");

        } else {
          throw new Error(response.data.message);
        }

      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    const fetchBranches = async () => {

      try {

        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token not found");
        }

        const url = "http://192.168.195.75:5000/v1/product/status/showbranch";

        const response = await axios.get(url, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          }
        });

        if (response.data.code === 200) {
          setBranchName(response.data.data.branch);
        } else {
          throw new Error(response.data.message);
        }

      } catch (error) {
        console.error("Error fetching branches:", error);
        setError(error.message);
      }
    };

    fetchBranches();
  }, []);


  const handleSearch = async () => {

    try {

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }

      if (receiptNumber !== "") {

        const url = "http://192.168.195.75:5000/v1/product/status/search-status";

        const response = await axios.get(url, {
          params: { receiptNumber: receiptNumber },
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          }
        });

        if (response.data.code === 200) {
          const filteredStatus = response.data.data
            .filter((item) => (item.export_number.includes(receiptNumber)));
          setStatus(filteredStatus);
        } else {
          throw new Error(response.data.message);
        }

      } else if (transactionDate !== "") {

        const url = "http://192.168.195.75:5000/v1/product/status/date";

        const response = await axios.get(url, {
          params: { date: transactionDate },
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          }
        });

        if (response.data.code === 200) {
          const filteredStatus = response.data.data['Status Product']
            .filter((item) => (item.created_at.includes(transactionDate)));
          setStatus(filteredStatus);

        } else {
          throw new Error(response.data.message);
        }

      } else {
        if (receiptNumber === "" || transactionDate === "") {
          const url = "http://192.168.195.75:5000/v1/product/status/status";

          const response = await axios.get(url,
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
                "x-api-key": "1234567890abcdef",
              }
            });

          if (response.data.code === 200) {
            setStatus(response.data.data["Status Product"]);
          } else {
            throw new Error(response.data.message);
          }
        }
      }

    } catch (error) {
      setError(error.message);
    }
  };

  const openModal = (id) => {

    if (!id) {
      console.error("ID is undefined");
      return;
    }
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM yyyy', { locale: th });
  };

  return (
    <div className="w-full h-[90%] flex overflow-auto no-scrollbar">
      <div className="w-full h-full flex flex-col gap-4">

        {error && <p className="text-red-500">{error}</p>}

        <div className="w-full flex items-start justify-start gap-4">
          <div className="flex items-center gap-2">
            <span className="r-2 font-bold text-xl text-sky-800">สาขา :</span>
            <div
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2 flex items-center"
              style={{ overflow: "visible", color: "black" }}
            >
              {branchName ? branchName : "-"}
            </div>
          </div>
          <div className="flex items-center">
            <span className="pr-2 pl-5 font-bold text-xl text-sky-800">เลขที่ใบเสร็จ :</span>
            <input
              type="text"
              value={receiptNumber || ""}
              onChange={(e) => setReceiptNumber(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
              placeholder="ค้นหาเลขที่ใบเสร็จ"
            />
          </div>
          <div className="flex items-center">
            <span className="pr-2 pl-5 font-bold text-xl text-sky-800">วันที่ทำรายการ :</span>
            <input
              type="date"
              value={transactionDate || ""}
              onChange={(e) => setTransactionDate(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-[120px] bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md">
            ค้นหา
          </button>
        </div>

        <div className="row-span-11 overflow-auto no-scrollbar">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-blue-200 border-l-2  h-14 text-sky-800 text-xl sticky top-0 rounded-lg">
              <tr>
                <th className="px-4 border-l-2  py-2">สาขา</th>
                <th className="px-4 border-l-2  py-2">เลขที่ใบเสร็จ</th>
                <th className="px-4 border-l-2  py-2">วันที่ทำรายการ</th>
                <th className="px-4 border-l-2  py-2">นามลูกค้า/ชื่อบริษัท</th>
                <th className="px-4 border-l-2  py-2">รูปแบบ</th>
                <th className="px-4 border-l-2  py-2">สถานะ</th>
                <th className="px-4 border-l-2  py-2">เพิ่มเติม</th>
              </tr>
            </thead>
            <tbody>
              {status.map((item, index) => (
                <tr key={index} className='  border-2'>
                  <td className="text-center border-l-2 px-4 py-2">{item.branch_name}</td>
                  <td className="text-center border-l-2 px-4 py-2">{item.export_number}</td>
                  <td className="text-center border-l-2 px-4 py-2">{formatDate(item.created_at)}</td>
                  <td className="text-start border-l-2 px-4 py-2">{item.customer_name}</td>
                  <td className="text-center border-l-2 px-4 py-2">
                    {item.type === 'sell' ? 'ขาย' : item.type === 'hire' ? 'เช่า' : item.type === 'both' ? 'ขาย/เช่า' : item.type}
                  </td>
                  <td className="text-center border-l-2 px-4 py-2">{item.status === 'reserve' ? 'จอง' : item.status === 'hire' ? 'เช่า' : item.status === 'late' ? 'เลยกำหนด' : item.status === 'continue' ? 'เช่าต่อ' : item.status}</td>
                  <td className="text-center border-l-2 px-4 py-2">
                    <button
                      onClick={() => openModal(item.id)}
                      className="text-blue-500 w-[100px] bg-[#FFFFFF] h-8 rounded-md border border-[#133E87] items-center justify-between px-2"
                    >
                      ดูข้อมูล<i className="fa-solid fa-angle-right mr-2"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          itemId={selectedProductId}
          status={status}
        />
      </div>
    </div>
  );
};

const Modal = ({ isModalOpen, onClose, itemId, status }) => {
  const [modalProductDetails, setModalProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if (isModalOpen) {

      const fetchData = async () => {

        try {

          setIsLoading(true);
          const token = localStorage.getItem("token");
          if (!token) {
            throw new Error("Token not found");
          }

          const url = `http://192.168.195.75:5000/v1/product/status/status-one/${itemId}`;

          const response = await axios.get(url, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef",
            }
          });

          if (response.data.code === 200) {
            setItemData(response.data.data);
            setModalProductDetails(response.data.data);

          } else {

            throw new Error(response.data.message);
          }
        } catch (error) {
          console.error("Error fetching item data:", error);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [isModalOpen, itemId]);

  if (!isModalOpen) return null;

  const handlePreview = () => {
    navigate("/preorder");
  };

  const currentStatus = status.find((item) => item.id === itemId)?.status;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-4xl shadow-lg relative h-1/2">
        <div className="relative flex items-center justify-center border-b pb-2">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            {currentStatus === 'reserve' ? 'จองสินค้า'
              : currentStatus === 'late' ? 'เลยกำหนดคืนสินค้า'
                : currentStatus === 'hire' ? 'เช่าสินค้า'
                  : currentStatus === 'continue' ? 'เช่าต่อ'
                    : currentStatus}
          </h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-red-500 hover:text-red-600 font-bold text-lg transition duration-300"
          >
            ✕
          </button>
        </div>

        {isLoading ? (
          <p className="mt-6 text-center text-gray-600">กำลังโหลด...</p>
        ) : error ? (
          <p className="mt-6 text-center text-red-500">{error}</p>
        ) : modalProductDetails ? (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <p>
                <strong className="text-gray-700">สาขา:</strong>{" "}
                {modalProductDetails.branch_name}
              </p>
              <p>
                <strong className="text-gray-700">เลขที่ใบเสร็จ:</strong>{" "}
                {modalProductDetails.export_number}
              </p>
              <p>
                <strong className="text-gray-700">นามลูกค้า/ชื่อบริษัท:</strong>{" "}
                {modalProductDetails.customer_name}
              </p>
              <p>
                <strong className="text-gray-700">วันที่สร้าง:</strong>{" "}
                {modalProductDetails.reserve_out}
              </p>
            </div>

            <div className="mt-4 bg-red-300">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                รายการสินค้า
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border shadow-sm">
                  <thead className="bg-blue-300 text-gray-700">
                    <tr>
                      <th className="border p-2">รหัสสินค้า</th>
                      <th className="border p-2">ชื่อสินค้า</th>
                      <th className="border p-2">จำนวน</th>
                      <th className="border p-2">ราคาเช่าต่อวัน</th>
                      <th className="border p-2">จำนวนวัน</th>
                      <th className="border p-2">ค่าปรับ</th>
                      <th className="border p-2">จำนวนรวม</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modalProductDetails.products.map((product) => (
                      <tr
                        key={product.product_id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="border p-2 text-center">
                          {product.code}
                        </td>
                        <td className="border p-2">{product.product_name}</td>
                        <td className="border p-2 text-center">
                          {product.quantity} {product.unit}
                        </td>
                        <td className="border p-2 text-right">
                          {product.price}
                        </td>
                        <td className="border p-2 text-right">
                          {modalProductDetails.date}
                        </td>
                        <td className="border p-2 text-center">
                          {product.price_damage}
                        </td>
                        <td className="border p-2 text-right">
                          {product.amount_price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <input
              type="radio"
              name="vat"
              value="true"
              className="mr-2"
              checked={handlePreview}
              onChange={handlePreview}
            />
            จ่ายเงินแล้ว
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-600">ไม่พบข้อมูลสินค้า</p>
        )}
        <button
          onClick={handlePreview}
          className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          <span className="text-lg">🖨️</span>
          <span> Preview</span>
        </button>
        <button
          onClick={''}
          className="absolute top- left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
        >
          <span className="text-lg">🖨️</span>
          <span> ส่งออกสินค้า</span>
        </button>

      </div>
    </div>
  );
};

export default StatusProduct;
