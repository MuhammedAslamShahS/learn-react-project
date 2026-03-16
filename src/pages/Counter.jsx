import { useState, useEffect } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    useEffect(()=>{
      console.log("Inside UseEffect" + value);

      return(()=>{
        console.log('cleanup' + value)
      })
    },[value]);

    return (
        <div
            style={{
                paddingTop: "120px",
                background: "",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
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
                    gap: "20px",
                }}
            >
                <h2>{value}</h2>
                <div style={{ display: "flex", gap: "20px" }}>
                    <button
                        onClick={() => {
                            setValue(value - 1);
                        }}
                        style={{ width: "50px", height: "50px" }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => {
                            setValue(value + 1);
                        }}
                        style={{ width: "50px", height: "50px" }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
