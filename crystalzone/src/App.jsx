import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Service";
import AboutUs from "./pages/Aboutus";
import ContactUs from "./pages/ContactUs";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import AdminRoute from "./routes/AdminRoute";
import adminRoutes from "./AdminPanal/adminRoutes";
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* auth  */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* pages  */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/service" element={< Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products/:category" element={<CategoryProducts />} />
        {/* pyment  */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />

        {/* ADMIN PANEL */}
        <Route path="/admin" element={<AdminRoute> {adminRoutes.element}</AdminRoute>}>
          {adminRoutes.children.map((route) => (<Route key={route.path} path={route.path}
            element={route.element} />
          ))}
        </Route>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
