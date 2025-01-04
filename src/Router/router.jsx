import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../page/Authentication/Login";
import PrivateRoute from "../Components/ComponentPrivateRoute/PrivateRoute";
import { Outbound } from "../page/Outbound/Outbound";
import { Inbound } from "../page/Inbound/Inbound";
import { ReturnItem } from "../page/Returnbound/Returnbound";
import { Home } from "../page/Home/Home";
import Preorder from "../page/Preorder/Preorder";
import PreOutbound from "../page/Preoutbound/PreOutbound";
import { Modal_Outbound } from "../page/Outbound/Modal_Outbound";
import { Modal_Create_Products } from "../page/Outbound/Modal_Create_Products";
import StatusProduct from "../page/status/status";
import { StockItem } from "../page/Stock/stock";
import { ListItems } from "../page/allptc/listProduct"; // แก้ชื่อ Component ให้ถูกต้อง

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <App />,
        children: [
          { path: "outbound", element: <Outbound /> },
          { path: "inbound", element: <Inbound /> },
          { path: "/", element: <Home /> },
          { path: "returnitem", element: <ReturnItem /> },
          { path: "status", element: <StatusProduct /> },
          { path: "stock", element: <StockItem /> },
          { path: "allptc", element: <ListItems /> }, // เรียกใช้งาน Component ที่ import มา
        ],
      },
      { path: "preorder", element: <Preorder /> },
      { path: "preoutbound", element: <PreOutbound /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/modal_outbound", element: <Modal_Outbound /> },
  { path: "/modal_create_products", element: <Modal_Create_Products /> },
]);

export default router;
