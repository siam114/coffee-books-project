import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            <div className="min-h-[calc(100vh-232px)]">
                {/* Dynamic section */}
            </div>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;