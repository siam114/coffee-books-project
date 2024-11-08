import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            {/* banner */}
            <Banner/>
            {/* heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Chose your desired coffee category browser through specific coffees that fit in your taste'}/>
            {/* categories tab section */}
            <Categories categories={categories}/>
            {/* dynamic nasted component */}
            <Outlet/>
        </div>
    );
};

export default Home;