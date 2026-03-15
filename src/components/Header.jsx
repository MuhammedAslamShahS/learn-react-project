import React from "react";

const Header = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "60px",
                background: "rgba(16, 116, 178, 0.67)",
                color: "#fff",
                paddingLeft: "100px",
                paddingRight: "100px",
                fontSize: "20px",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
        >
            <div className="left" style={{ fontSize: "26px" }}>
                Aslam Shah
            </div>

            <div className="right">
                <ul
                    style={{
                        display: "flex",
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        gap: "20px"
                    }}
                >
                    <li>Home</li>
                    <li>Usage</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;