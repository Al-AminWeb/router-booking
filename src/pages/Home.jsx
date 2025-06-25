import React from 'react';
import Hero from "../components/Hero.jsx";

import LawyerContainer from "./LawyerContainer.jsx";
import {useLoaderData} from "react-router";
import AnimatedCard from "../components/AnimatedCard.jsx";

const Home = () => {
const data = useLoaderData()

    return (
        <div>
            <Hero></Hero>
            <LawyerContainer lawyers={data}></LawyerContainer>
            <AnimatedCard/>
        </div>
    );
};

export default Home;
