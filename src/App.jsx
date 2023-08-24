import { Route, Router } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import ProductList from "./services/ProductList";

function App() {

    return (
    <>
      <NavBar />
      <Router>
      <Route path="/" element={ProductList}></Route>
      <Route path="/Login" element={<Login />}></Route>
      </Router>
      </>
    );
  };

export default App