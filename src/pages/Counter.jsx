const Counter = () => {
    return (
        <div
            style={{
                paddingTop: "120px",
                background: "",
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
            }}
        >
            <div
                className="counter-box"
                style={{
                    width: "200px",
                    height: "200px",
                    background: "#71bceb",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px"
                }}
            >
                <h2>0</h2>
                <div style={{display:"flex", gap: "20px"}}>
                    <button style={{ width: "50px", height: "50px" }}>-</button>
                    <button style={{ width: "50px", height: "50px" }}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
