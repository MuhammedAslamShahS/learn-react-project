import React from "react";

const ControllBar = ({ setFilter }) => {
    const handleChange = (e) => {
        const value = (e.target.value); // All / Active / Deactive
        console.log(value); // console output
        setFilter(value); // parent state update
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "30px",
                background: "rgba(16, 116, 178, 0.67)",
                color: "#fff",
                paddingLeft: "100px",
                paddingRight: "100px",
                fontSize: "20px",
                position: "fixed",
                top: "60px",
                left: 0,
                right: 0,
                zIndex: 1000,
            }}
        >
            <li style={{ listStyle: "none" }}>
                <select onChange={handleChange}>
                    <option value="All">All</option>
                    <option value="Active">Active</option>
                    <option value="Deactive">Deactive</option>
                </select>
            </li>
        </div>
    );
};

export default ControllBar;
