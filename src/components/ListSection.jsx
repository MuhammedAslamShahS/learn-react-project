import React from "react";
import ListItem from "../List/ListItem";
import ListItemData from "../List/ListItemData.json";
const ListSection = () => {
    return (
        <div
            className="app-body"
            style={{ height: "100vh", paddingTop: "60px", paddingLeft: "100px", paddingRight: "100px" }}
        >
            {ListItemData.map((item) => {
                return (
                    <ListItem
                        key={item.id}
                        title={item.title}
                        number={item.number}
                        content={item.content}
                        items={item.items}
                        Activity={item.Activity}
                    />
                );
            })}
        </div>
    );
};

export default ListSection;
