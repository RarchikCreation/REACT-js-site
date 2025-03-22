import Header from "./components/Header"
import Footer from "./components/Footer";
import React from "react";

const App = () => {
    return (
        <div>
            <Header />
            <main style={{ textAlign: "center", fontSize: "24px" }}>Test</main>
            <Footer />
        </div>
    );
};

export default App;