import React from "react";
import { NavLink } from "react-router-dom";

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
                zIndex: 1000,
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
                        gap: "20px",
                    }}
                >
                    <li>
                        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/usage" style={{ color: "white", textDecoration: "none" }}>
                            Usage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter" style={{ color: "white", textDecoration: "none" }}>
                            Counter
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/settings" style={{ color: "white", textDecoration: "none" }}>
                            Settings
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/logout" style={{ color: "white", textDecoration: "none" }}>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;