import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import styles from "./PreviewSlider.module.scss";
import axios from "axios";

import Slider from "react-slick";

import { PopularMovieListType } from "@/types";

import ItemSlider from "./ItemSlider/ItemSlider";

const PreviewSlider: NextPage = () => {
    const { root, rowSlider, container } = styles;

    const settingsForSlider = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
    };

    const [popularMovieList, setPopularMovieList] =
        useState<PopularMovieListType>([]);
    const [isLoadedMovieList, setIsLoadedMovieList] = useState<boolean>(false);

    useEffect(() => {
        setIsLoadedMovieList(false);
        axios
            .get(
                "https://api.themoviedb.org/3/movie/popular?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en_US&page=1&region=us"
            )
            .then((res) => {
                setPopularMovieList(res.data.results.slice(0, 5));
                setIsLoadedMovieList(true);
            });
    }, []);

    return (
        <section className={root}>
            <div className={container}>
                <div className={rowSlider}>
                    <Slider {...settingsForSlider}>
                        {!isLoadedMovieList ? (
                            <></>
                        ) : (
                            popularMovieList.map((elem) => (
                                <ItemSlider
                                    key={elem.id}
                                    id={elem.id}
                                    image={elem.backdrop_path}
                                    title={elem.title}
                                    rating={elem.vote_average}
                                ></ItemSlider>
                            ))
                        )}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PreviewSlider;
