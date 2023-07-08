// import { Route, Routes } from "react-router-dom";
// import { Route,Routes } from "react-router-dom";
// import { Route,Routes } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/Sing-in/authentication";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
