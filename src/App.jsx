import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";

function App() {
    const [allBooks, setAllBooks] = useState([]);
    const [myCart, addToCart] = useState([{}]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        async function getData() {
            const res = await axios.get("/getbooks");
            return res;
        }
        getData()
            .then(function (res) {
                setAllBooks(res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }, []);

    return (
        <CartProvider data={{ myCart, addToCart, total, setTotal }}>
            <Router>
                <Navbar />
                <div className="page-container">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home allBooks={allBooks} />}
                        />
                        <Route path="/checkout" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
