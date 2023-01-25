import React from 'react';
import useTitle from '../../../Shared File/useTitle/useTitle';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <FoodItems></FoodItems>
            <WhyChooseUs></WhyChooseUs>  
        </div>
    );
};

export default Home;