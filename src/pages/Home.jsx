import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner/>
            {/* heading */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Chose your desired coffee category browser through specific coffees that fit in your taste'}/>
            {/* categories tab section */}
            {/* dynamic nasted component */}
        </div>
    );
};

export default Home;