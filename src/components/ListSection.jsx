import ListItem from "../List/ListItem";
import ListItemData from "../List/ListItemData.json";





const ListSection = ({ filter }) => {

    console.log(`from listsection page: ${filter}`);

    const filteredData = ListItemData.filter((item) => {

        if (filter === "All") {
            return true;
        }

        if (filter === "Active") {
            return item.Activity === true;
        }

        if (filter === "Deactive") {
            return item.Activity === false;
        }

    });

    return (
        <div
            className="app-body"
            style={{ height: "100vh", paddingTop: "90px", paddingLeft: "100px", paddingRight: "100px" }}
        >
            {filteredData.map((item) => {
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
