import boomSound from "../assets/bomb.wav";
import { useState, useEffect } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    const [bomb, setBomb] = useState(false);

    useEffect(() => {
        // console.log("Inside UseEffect" + value);

        if (value === 0) {
            setBomb(false);
            return; // stop timer
        }
        setBomb(false);

        const id = setTimeout(() => {
            setBomb(true);

            const audio = new Audio(boomSound);
            audio.play();
        }, value * 1000);

        return () => clearTimeout(id); // console.log('cleanup' + value)
    }, [value]);

    return (
        <div
            style={{
                paddingTop: "120px",
                background: "",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                paddingLeft: "calc(50% - 100px)",
                gap: "10px",
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

            <div
                style={{
                    width: "200px",
                    height: "200px",
                    background: "black",
                    color: "white",
                    borderRadius: "8px",
                    textAlign: "center",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                {bomb && value ? (
                    <span style={{ fontSize: "42px" }}>
                        Boom..<span style={{ color: "red" }}>!!!</span>
                    </span>
                ) : (
                    <span>
                        {" "}
                        Adjust Bomb timer <br /> in Counter
                    </span>
                )}
            </div>
        </div>
    );
};

export default Counter;
