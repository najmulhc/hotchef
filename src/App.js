import Header from "./Components/Header";
import "./App.css";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import User from "./Components/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import Meals from "./Components/Meals";

function App() {
  return (
    <div className="App">
      <Header></Header> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/meals" element={<Meals/>}></Route>
        <Route path="/user" element={<ProtectedRoute><User/></ProtectedRoute>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

