import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hoadon from "./pages/hoadon/Hoadon";
import Home from "./pages/home/Home"
import "./App.scss"
import Hethong from "./pages/hethong/Hethong";
import Thongke from "./pages/thongke/Thongke";
import Baocao from "./pages/baocao/Baocao";
import NguonDL from "./pages/nguondulieu/NguonDL";
import Danhmuc from "./pages/danhmuc/Danhmuc";
import Goihoadon from "./pages/goihoadon/Goihoadon";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index
              element={
                <Home />
              }
            />
          </Route>
          <Route path="hoadon">
            <Route index
              element={
                <Hoadon />
              }
            />
          </Route>
          <Route path="thongke">
            <Route index
              element={
                <Thongke />
              }
            />
          </Route>
          <Route path="baocao">
            <Route index
              element={
                <Baocao />
              }
            />
          </Route>
          <Route path="nguonDL">
            <Route index
              element={
                <NguonDL />
              }
            />
          </Route>
          <Route path="danhmuc">
            <Route index
              element={
                <Danhmuc />
              }
            />
          </Route>
          <Route path="hethong">
            <Route index
              element={
                <Hethong />
              }
            />
          </Route>
          <Route path="goiHD">
            <Route index
              element={
                <Goihoadon />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
