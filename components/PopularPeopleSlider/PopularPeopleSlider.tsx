import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

import { PopularPeopleType } from "@/types";

import PopularPeopleSliderItem from "./PopularPeopleSliderItem/PopularPeopleSliderItem";

const PopularPeopleSlider: React.FC = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 621,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "100px",
                },
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px",
                },
            },
            {
                breakpoint: 341,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    const [popularPeopleList, setPopularPeopleList] =
        useState<PopularPeopleType>([]);
    const [isLoadedPeopleList, setIsLoadedPeopleList] =
        useState<boolean>(false);

    useEffect(() => {
        setIsLoadedPeopleList(false);
        axios
            .get(
                "https://api.themoviedb.org/3/person/popular?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US&page=1"
            )
            .then((res) => {
                setPopularPeopleList(res.data.results.slice(0, 15));
                setIsLoadedPeopleList(true);
            });
    }, []);

    return (
        <div className='popular-people__slider'>
            <Slider {...settings}>
                {!isLoadedPeopleList ? (
                    <></>
                ) : (
                    popularPeopleList.map((elem) => (
                        <PopularPeopleSliderItem
                            key={elem.id}
                            id={elem.id}
                            name={elem.name}
                            profile_path={elem.profile_path}
                        ></PopularPeopleSliderItem>
                    ))
                )}
            </Slider>
        </div>
    );
};

export default PopularPeopleSlider;
