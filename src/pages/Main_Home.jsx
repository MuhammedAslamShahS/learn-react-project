import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListSection from "../components/ListSection";
import ControllBar from "../components/ControllBar";

const Main_Home = () => {
    const [filter, setFilter] = useState("All");
    return (
        <div>
            <Header />
            <ControllBar setFilter={setFilter} />
            <ListSection filter={filter} />
            <Footer />
        </div>
    );
};

export default Main_Home;
