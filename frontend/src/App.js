// Components
import Header from "./Components/Header";

// Pages
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import NotFound from "./Pages/NotFound";

// React Router
import { Route, Routes, Navigate } from "react-router-dom";
import Notification from "./Components/Notification";

const App = () => {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listing" element={<Listing />} />

                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/*" element={<Navigate to="/not-found" replace={true} />} />
                </Routes>
            </main>

            <Notification />
        </>
    );
};

export default App;
