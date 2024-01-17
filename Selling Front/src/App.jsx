import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import AddPage from "./pages/Add/AddPage";
import Basket from "./pages/Basket/Basket";
import DetailPage from "./pages/Detail/DetailPage";
import Wishlist from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
