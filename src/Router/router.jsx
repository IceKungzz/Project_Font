import { createBrowserRouter } from "react-router-dom"
import Delivery from "../Components/Delivery"
import App from "../App"
import { Profile } from "../Components/Profile"
import Login from "../page/Authentication/Login"
import PrivateRoute from "../Components/ComponentPrivateRoute/PrivateRoute"
import Sidebar from "../Components/Layout_Components/Sidebar"


const router = createBrowserRouter([
    {
        path:"/",
        element:<PrivateRoute/>,
        children:[
            {
                path:"", element: <App/>,
                children: [
                    {path:"profile", element: <Profile/>},
                    {path:"delivery", element: <Delivery/>}
                ],
            },
        ],
    },
    {path:"/login", element: <Login/>},
    {path:"/sidebar", element: <Sidebar/>},
])

export default router







