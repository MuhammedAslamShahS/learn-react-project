import React from "react";
import ListItem from "../List/ListItem";
const ListSection = () => {
    return (
        <div>
            <div className="app-body" style={{ paddingTop: "60px", paddingLeft: "100px", paddingRight: "100px" }}>
                <ListItem
                    title={"title"}
                    number={1}
                    content={"This is description section, to explain about the list."}
                    items={["Item 1", "Item 2", "Item 3", "Item 4"]}
                    Activity={true}
                />
                <ListItem number={2} />
                <ListItem number={3} />
                
            </div>
        </div>
    );
};

export default ListSection;
