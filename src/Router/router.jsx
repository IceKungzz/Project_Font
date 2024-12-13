import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Login from "../page/Authentication/Login"
import PrivateRoute from "../Components/ComponentPrivateRoute/PrivateRoute"
import { Outbound } from "../page/Outbound/Outbound"
import {Inbound} from "../page/Inbound/Inbound"
import { ReturnItem } from "../page/Returnbound/Returnbound"
import { Home } from "../page/Home/Home"
import Preorder from "../page/Preorder/Preorder"
import { Modal_Outbound } from "../page/Outbound/Modal_Outbound"


const router = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute/>,
        children:[
            {
                path:"", element: <App/>,
                children: [
                    {path:"outbound", element: <Outbound/>},
                    {path:"inbound", element: <Inbound/>},
                    {path:"", element: <Home/>},
                    {path:"returnitem", element: <ReturnItem/>},
                ],
            },
            {path:"preorder", element: <Preorder/>},
        ],
    },
    {path:"/login", element: <Login/>},
    {path:"/modal_outbound", element: <Modal_Outbound/>},
])

export default router







