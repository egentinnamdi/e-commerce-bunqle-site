import "./App.css";
import ElementProductDetail from "./08_Product_Detail/ElementProductDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SecondPage from "./secondPage/SecondPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<ElementProductDetail />} />
        <Route path="/product" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
