import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { da, th } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import Item from "antd/es/list/Item";

const StatusProduct = () => {
  const [status, setStatus] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [transactionDate, setTransactionDate] = useState("");
  const [error, setError] = useState(null);
  const [branchName, setBranchName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [reserveId, setReserveId] = useState(0);

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
          },
        });

        if (response.data.code === 200) {
          setStatus(response.data.data["Status Product"]);
        } else {
          throw new Error(response.data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
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
          },
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
        const url =
          "http://192.168.195.75:5000/v1/product/status/search-status";

        const response = await axios.get(url, {
          params: { receiptNumber: receiptNumber },
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          },
        });

        if (response.data.code === 200) {
          const filteredStatus = response.data.data.filter((item) =>
            item.export_number.includes(receiptNumber)
          );
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
          },
        });

        if (response.data.code === 200) {
          const filteredStatus = response.data.data["Status Product"].filter(
            (item) => item.created_at.includes(transactionDate)
          );
          setStatus(filteredStatus);
        } else {
          throw new Error(response.data.message);
        }
      } else {
        if (receiptNumber === "" || transactionDate === "") {
          const url = "http://192.168.195.75:5000/v1/product/status/status";

          const response = await axios.get(url, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef",
            },
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

  const openModal = (id, reserve_id) => {
    if (!id) {
      console.error("ID is undefined");
      return;
    }
    setSelectedProductId(id);
    setIsModalOpen(true);
    setReserveId(reserve_id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "d MMMM yyyy", { locale: th });
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
            <span className="pr-2 pl-5 font-bold text-xl text-sky-800">
              เลขที่ใบเสร็จ :
            </span>
            <input
              type="text"
              value={receiptNumber || ""}
              onChange={(e) => setReceiptNumber(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
              placeholder="ค้นหาเลขที่ใบเสร็จ"
            />
          </div>
          <div className="flex items-center">
            <span className="pr-2 pl-5 font-bold text-xl text-sky-800">
              วันที่ทำรายการ :
            </span>
            <input
              type="date"
              value={transactionDate || ""}
              onChange={(e) => setTransactionDate(e.target.value)}
              className="h-10 w-[220px] rounded-md border border-gray-500 p-2"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-[120px] bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
          >
            ค้นหา
          </button>
        </div>

        {status.length === 0 ? (
          <p className="text-center text-2xl mt-10">ไม่พบรายการสินค้า</p>
        ) : (
          <div className="row-span-11 overflow-auto no-scrollbar">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-blue-200 border-l-2  h-14 text-sky-800 text-xl sticky top-0 rounded-lg">
                <tr>
                  <th className="px-4 border-l-2  py-2 rounded-tl-lg border-white">
                    สาขา
                  </th>
                  <th className="px-4 border-l-2  py-2">เลขที่ใบเสร็จ</th>
                  <th className="px-4 border-l-2  py-2">วันที่ทำรายการ</th>
                  <th className="px-4 border-l-2  py-2">
                    นามลูกค้า/ชื่อบริษัท
                  </th>
                  <th className="px-4 border-l-2  py-2">รูปแบบ</th>
                  <th className="px-4 border-l-2  py-2">สถานะ</th>
                  <th className="px-4 border-l-2  py-2 rounded-tr-lg">
                    เพิ่มเติม
                  </th>
                </tr>
              </thead>
              <tbody>
                {status.map((item, index) => (
                  <tr key={index} className="  border-2">
                    <td className="text-center border-l-2 px-4 py-2">
                      {item.branch_name}
                    </td>
                    <td className="text-center border-l-2 px-4 py-2">
                      {item.export_number}
                    </td>
                    <td className="text-center border-l-2 px-4 py-2">
                      {formatDate(item.created_at)}
                    </td>
                    <td className="text-start border-l-2 px-4 py-2">
                      {item.customer_name}
                    </td>
                    <td className="text-center border-l-2 px-4 py-2 ">
                      {item.type === "sell"
                        ? "ขาย"
                        : item.type === "hire"
                        ? "เช่า"
                        : item.type === "both"
                        ? "ขาย/เช่า"
                        : item.type}
                    </td>
                    <td className="text-center border-l-2 px-4 py-2">
                      {item.status === "reserve"
                        ? "จอง"
                        : item.status === "hire"
                        ? "กำลังเช่า"
                        : item.status === "late"
                        ? "เลยกำหนด"
                        : item.status === "continue"
                        ? "เช่าต่อ"
                        : item.status === "return"
                        ? "ส่งคืนเเล้ว"
                        : item.status}
                    </td>
                    <td className="text-center border-l-2 px-4 py-2">
                      <button
                        onClick={() => openModal(item.id, item.reserve_id)}
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
        )}
        <Modal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          itemId={selectedProductId}
          reserveId={reserveId}
          status={status}
        />
      </div>
    </div>
  );
};

const Modal = ({ isModalOpen, onClose, itemId, status, reserveId }) => {
  const [modalProductDetails, setModalProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const [vatPaid, setVatPaid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [payMent, setPayment] = useState(0);
  const [vat, setVat] = useState(false);
  const [lesseeName, setLesseeName] = useState("");
  const [lessorName, setLessorName] = useState("");
  const [lesseeNameOne, setLesseeNameOne] = useState("");
  const [lessorNameTwo, setLessorNameTwo] = useState("");

  const formatDateModal = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd MMM yy", { locale: th });
  };

  useEffect(() => {
    if (isModalOpen) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const token = localStorage.getItem("token");
          if (!token) throw new Error("Token not found");

          const url = `http://192.168.195.75:5000/v1/product/status/status-one/${itemId}`;

          const response = await axios.get(url, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
              "x-api-key": "1234567890abcdef",
            },
          });

          if (response.data.code === 200) {
            setModalProductDetails(response.data.data);

            if (response.data.data.vat === "vat") {
              setVat(true);
            } else if (response.data.data.vat === "nvat") {
              setVat(false);
            }
          } else {
            throw new Error(response.data.message);
          }
        } catch (error) {
          console.error("Error fetching item data:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [isModalOpen, itemId]);

  if (!isModalOpen) return null;

  const handleExportClick = async () => {
    if (!modalProductDetails || !modalProductDetails.products) {
      console.error("ไม่พบข้อมูลสินค้า");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const url = `http://192.168.195.75:5000/v1/product/outbound/reserve/${reserveId}`;
      const response = await axios.get(url, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          "x-api-key": "1234567890abcdef",
        },
      });

      if (response.data.code === 200) {
        const productData = response.data.data;
        const dataProduct = response.data.data.product;
        const assemble = response.data.data.product.assemble_product;

        let assemble_status = false;

        if (Array.isArray(assemble) && assemble.length > 0) {
          assemble_status = true;
        }

        const newOutbound = {
          customer_name: productData?.customer_name || "",
          place_name: productData?.place_name || "",
          address: productData?.address || "",
          date: productData?.date || "",
          vat: productData?.vat || "",
          total_price: productData?.total_price_out?.toString() || "0",
          reserve_id: reserveId || "",
          payment: payMent || 0,
          assemble_status: assemble_status,
          outbound: [
            {
              code: dataProduct?.code || [],
              product_id: dataProduct?.product_id || [],
              price: dataProduct?.price || [],
              quantity: dataProduct?.quantity || [],
              type: dataProduct?.type || [],
              size: dataProduct?.size || [],
              meter: dataProduct?.meter || [],
              centimeter: dataProduct?.centimeter || [],
            },
          ],
        };

        const outboundUrl = `http://192.168.195.75:5000/v1/product/outbound/outbound`;
        const outboundResponse = await axios.post(outboundUrl, newOutbound, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
            "x-api-key": "1234567890abcdef",
          },
        });

        if (outboundResponse.data.code === 201) {
          Swal.fire({
            icon: "success",
            title: "สำเร็จ",
            text: "ส่งออกสินค้าเรียบร้อย!",
          });
          onClose();
        } else {
          throw new Error(outboundResponse.data.message);
        }
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error exporting data:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: error.message,
      });
    }
  };

  const handleShowAlert = () => {
    setShowAlert(true);
    setPayment(1);
  };

  const handlePreview = (id) => {
    if (vat === true) {
      navigate("/preorder", { state: { id } });
    } else if (vat === false) {
      navigate("/preorder-nvat", { state: { id } });
    }
  };

  const currentStatus = status.find((item) => item.id === itemId)?.status;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-4xl shadow-lg relative">
        <div className="relative flex items-center justify-center border-b pb-2">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            {currentStatus === "reserve"
              ? "จองสินค้า"
              : currentStatus === "late"
              ? "เลยกำหนดคืนสินค้า"
              : currentStatus === "hire"
              ? "ใบส่งของ"
              : currentStatus === "continue"
              ? "เช่าต่อ"
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
          <p className="mt-6 text-center text-gray-600">กำลังโหล</p>
        ) : error ? (
          <p className="mt-6 text-center text-red-500">{error}</p>
        ) : modalProductDetails ? (
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-3 gap-4 bg-blue-50">
              <p>
                <strong className="text-gray-700 "> </strong>{" "}
              </p>

              {currentStatus === "hire" && <p></p>}
              <p>
                <strong className="text-gray-700 bg-blue-50 absolute right-0 top-0 mt-20 -translate-x-7 ">
                  เลขที่ : {modalProductDetails.export_number}
                </strong>
                <strong className="text-gray-700 "> </strong>{" "}
              </p>
     
              




  
  



              <img src="/img/qr.nn.jpg" alt="ln" className="w-24 cover    " />
              <p>
                <strong className="text-gray-700 absolute right-0 -translate-x-32">
                  Po:{" "}
                </strong>{" "}
                <h1
                  className="text-center text-2xl translate-y"
                  style={{ textAlign: "center" }}
                >
                  ภัทรชัย แบบเหล็ก
                </h1>
                <h1
                  className="text-center text-ellipsis text-ellipsis translate-"
                  style={{ textAlign: "center" }}
                >
                  ผลิต-จำหน่าย-ให้เช่า เเบบเหล็ก นั่งร้าน
                  <h1
                    className="text-center -translate-x-10 "
                    style={{ textAlign: "center", whiteSpace: "nowrap" }}
                  >
                    <i className="fa-solid fa-phone"></i> 085-3806974 ,
                    095-5862149 <i className="fa-brands fa-facebook"></i>{" "}
                    ภัทรชัย แบบเหล็ก
                  </h1>
                  <h1 className="bg-slate-100 flex items-center justify-center space-x-2 text-center -translate-x-0">
                    <i class="fa-regular fa-circle -translate-x-1"></i> โรงงาน
                    <i class="fa-regular fa-circle -translate-x-1"></i> โคกขาม
                    <i class="fa-regular fa-circle -translate-x-1"></i> นพวงศ์
                    <i class="fa-regular fa-circle -translate-x-1 "></i> ชลบุรี
                  </h1>
                </h1>
              </p>
            </div>
            <div class="mx-auto p-0 w-full bg-blue-200 border border-black rounded-lg shadow-lg">
              <p class="text-center text-black">ใบส่งของ</p>
            </div>
            <div class="flex items-center space-x-4">
              <p>
                <strong className="text-gray-700">วันที่ : </strong>{" "}
                {formatDateModal(modalProductDetails.reserve_out)}
              </p>
              <strong className="text-gray-700"> จำนวนวันที่เช่า :</strong>{" "}
              {modalProductDetails.date +
                " วัน " +
                formatDateModal(modalProductDetails.reserve_out) +
                " - " +
                formatDateModal(
                  new Date(
                    new Date(modalProductDetails.reserve_out).getTime() +
                      modalProductDetails.date * 24 * 60 * 60 * 1000
                  )
                )}
            </div> 
            <div class="flex items-center space-x-4">
              <p>
                <strong className="text-gray-700"> นามลูกค้า : </strong>
                {modalProductDetails.customer_name}
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <p>
                <strong className="text-gray-700"> ที่อยู่ : </strong>
                {modalProductDetails.address}
              </p>
            </div>
            <div className="mt-4 ">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                รายการสินค้า
              </h3>
              <div class="relative">
  <div class="absolute inset-0 bg-[url('https://example.com/path-to-your-image.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
  <div class="relative z-10">
    
    <h1>
    <div className="              ">
                <table className="w-full border-collapse border shadow-sm ">
                  <thead className="bg-blue-300 text-gray-700 ">
                    <tr>
                      <th className="border p-2">จำนวน</th>
                      <th className="border p-2">ชื่อสินค้า</th>
                      <th className="border p-2">ขนาด</th>
                    </tr>
                  </thead>
                  <tbody className="overflow-y-auto max-h-64">
                    {modalProductDetails.products.map((product) => (
                      <tr
                        key={product.product_id}
                        className="hover:bg-gray-50 transition duration-200"
                      >
                        <td className="border p-2 text-center">
                          {product.quantity} {product.unit}
                        </td>
                        <td className="border p-2 text-center">
                          {product.name}
                        </td>
                        <td className="border p-2 text-center">
                          {product.size}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
    </h1>
  </div>
</div>


              
              
              {currentStatus === "hire" && (
                <div className="grid grid-cols-10 h-[70px] border-b-2 border-r-2 border-l-2 border-gray text-[9px] font-sarabun">
                  <div className=" col-span-5 flex flex-col p-4 justify-around h-[60px] items-center h-[70px]">
                    <p className="font-sarabun text-[11px] w-[400px] ml-14">
                      ลงชื่อ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ผู้ส่งของ
                    </p>
                  </div>

                  <div className=" col-span-5 flex flex-col p-4 justify-around h-[60px] items-center h-[70px] ">
                    <p className="font-sarabun text-[11px] w-[400px] ml-10 pt-">
                      ลงชื่อ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ผู้รับของ
                      
                    </p>
                    <div className=" col-span-5 flex flex-col p-4 justify-around h-[60px] items-center h-[70px] -ml-40 scroll-pt-96">
                    <p className="font-sarabun text-[11px] w-[400px] ml-96 text-rose-800">
                     **ได้รับสินค้าตามรายการข้างต้นไว้ถูกต้องเเล้ว**
                      
                    </p>

                  </div>
                  </div>
                  
                </div>
              )}
            
            

                  </div>
            {currentStatus === "reserve" && (
              <div className="mt-4">
                <input
                  type="radio"
                  name="payment"
                  value="true"
                  className="mr-2"
                  checked={showAlert}
                  onChange={handleShowAlert}
                />
                <label htmlFor="vat" className="text-gray-700">
                  จ่ายเงินแล้ว
                </label>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-6 text-center text-gray-600">ไม่พบข้อมูลสินค้า</p>
        )}

        {currentStatus === "reserve" && (
          <div className="mt-4 flex justify-around">
            <button
              onClick={() => handlePreview(itemId)}
              className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <span className="fa-solid fa-print"></span>
              <span> ดูใบเสนอราคา</span>
            </button>

            <button
              onClick={handleExportClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
            >
              <span className="fa-solid fa-file-export"></span>
              <span> ส่งออกสินค้า</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusProduct;
