import { Route, Routes } from "react-router-dom";
import Main_Home from "./pages/Main_Home";
import Usage from "./pages/Usage";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Header from "./components/Header";
import Counter from "./pages/Counter";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Main_Home />} />
                <Route path="/usage" element={<Usage />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </div>
    );
};

export default App;
