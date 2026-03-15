import React from "react";

const ListItem = ({ title, number, content, items = [], Activity }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "120px",
                background: " rgba(152, 202, 234, 0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                marginTop: "10px",
                paddingLeft: "10px",
                gap: "8px",
                border: "2px solid #c6cbcd",
            }}
        >
            <div>
                <h3 style={{color:"rgba(3, 32, 49, 0.67)"}}>
                    {title} {number}
                </h3>
            </div>

            <p style={{color:"rgba(3, 32, 49, 0.67)"}}>{content}</p>
            <ul style={{ display: "flex", gap: "15px", padding: 0, listStyle: "none" }}>
                {items.map((item, index) => (
                    <li key={index} style={Activity ?{ width: "70px",textAlign:"center" , background: " rgba(16, 116, 178, 0.67)", color: "white", borderRadius: "5px"} :{ width: "70px",textAlign:"center" , background: " rgba(178, 16, 16, 0.67)", color: "white", borderRadius: "5px"} }>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListItem;
