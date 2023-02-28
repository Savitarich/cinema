import React from "react";
import { NextPage } from "next";
import styles from "./PopularPeople.module.scss";

import PopularPeopleSlider from "../PopularPeopleSlider/PopularPeopleSlider";

const PopularPeople: NextPage = () => {
    const { root, container } = styles;
    return (
        <>
            <div className={root}>
                <div className={container}>
                    <h2>The most popular actors</h2>
                    <PopularPeopleSlider></PopularPeopleSlider>
                </div>
            </div>
        </>
    );
};

export default PopularPeople;
