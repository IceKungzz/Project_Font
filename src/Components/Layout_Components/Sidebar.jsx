import { useState } from "react"; 
import { NavLink } from "react-router-dom";
import React from "react";

export default function Sidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex items-center justify-center h-1/6 mt-3">
        <img src="img/logo.png" alt="image" width={150} />
      </div>

      <div className="flex flex-col justify-between h-full w-full mt-4">
        <div className="flex flex-col items-end h-5/6">
          <div className=" h-1/6 w-full flex items-center justify-center p-4">
            <div className="bg-[#CBDCEB] h-full flex justify-around items-center gap-2 w-full rounded-md p-6">
              <div className="hidden xl:block w-10 h-10 rounded-full overflow-hidden">
                <img
                  src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZO80itzS42aLeUYNffMhzh75BcRd0d.jpg"
                  alt="profile"
                  className="w-10 h-10 object-cover hidden xl:block"
                />
              </div>

              <div className="text-sm text-black flex flex-col items-center">
                <span className="hidden md:block md:text-sm text-center text-[#133E87] font-bold">
                  เมทนี สนธิกัน
                </span>
                <span className="hidden text-[#608BC1] text-lg xl:block">
                  user
                </span>
              </div>
            </div>
          </div>

          {/* รายการเมนู */}
          {isSidebarOpen && (
            <>
              <NavLink
                to="/home"
                onClick={toggleSidebar}
                className={({ isActive }) =>
                  `sidebar-menu
                        ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-house-chimney w-10 mr-2"></i>
                <span>หน้าแรก</span>
              </NavLink>

              <NavLink
                to="/inbound"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-file w-10 mr-2"></i>
                <span>นำเข้าสินค้า</span>
              </NavLink>

              <NavLink
                to="/outbound"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-file-import w-10 mr-2"></i>{" "}
                <span>ส่งออกสินค้า</span>
              </NavLink>

              <NavLink
                to="/returnitem"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-list-check w-10 mr-2"></i>
                <span>สถานะสินค้า</span>
              </NavLink>

              <NavLink
                to="/c"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-recycle w-10 mr-2"></i>
                <span>คืนสินค้า</span>
              </NavLink>

              <NavLink
                to="/d"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-store w-10 mr-2"></i>
                <span>สินค้าคงคลัง</span>
              </NavLink>

              <NavLink
                to="/e"
                className={({ isActive }) =>
                  `sidebar-menu
                         ${isActive ? "activeclass" : ""}`
                }
              >
                <i className="fa-solid fa-clipboard-list w-10 mr-2"></i>
                <span>รายการทั้งหมด</span>
              </NavLink>
            </>
          )}
          {/* รายการเมนู */}
        </div>

        <div className="text-xl text-[#608BC1]  h-1/6 w-full flex items-center justify-center">
          <div className="bg-[#133E87] w-3/4 p-1 text-md cursor-pointer 2xl:p-3 rounded-md 2xl:text-lg text-center">
            <span>
              <i className="fa-solid fa-right-from-bracket mt-2 mr-2"></i> ออกจากระบบ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

//หน้าจอต่ำกว่า 1280 ต้องเปลี่ยนตรง sidebar แล้ว
