import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/user" element={<AddUser></AddUser>}></Route>

      </Routes>
    </>
  );
}

export default App;
