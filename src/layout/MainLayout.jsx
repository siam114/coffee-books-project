import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className="h-16">
            <Navbar/>
            </div>
            <div className="min-h-[calc(100vh-232px)] py-10 container mx-auto">
                {/* Dynamic section */}
                <Outlet/>
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;