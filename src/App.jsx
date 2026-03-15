import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListItem from "./List/ListItem";

const App = () => {
    return (
        <div>
            <Header />
            <div className="app-body" style={{ paddingTop: "60px", paddingLeft: "100px", paddingRight: "100px" }}>
                <ListItem
                    title={"title"}
                    number={1}
                    content={"This is description section, to explain about the list."}
                    items={["Item 1", "Item 2", "Item 3", "Item 4"]}
                />
                <ListItem number={2} />
                <ListItem number={3} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
