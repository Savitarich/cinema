import React, { useState, useEffect } from "react";
import styles from "./PopularSeries.module.scss";
import { NextPage } from "next";
import axios from "axios";
import Link from "next/link";

import { PopularSeriesListType } from "@/types";

const PopularSeries: NextPage = () => {
    const { root, row, mainSeries, rowInfo, series } = styles;

    const [popularSeries, setPopularSeries] = useState<PopularSeriesListType[]>(
        []
    );
    const [isLoadedListSeries, setIsLoadedListSeries] =
        useState<boolean>(false);

    useEffect(() => {
        setIsLoadedListSeries(false);
        axios
            .get(
                "https://api.themoviedb.org/3/tv/popular?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US&page=1"
            )
            .then((res) => {
                const subPopularList: PopularSeriesListType[] = [];
                res.data.results.forEach((elem: PopularSeriesListType) => {
                    if (elem.vote_average >= 7) {
                        subPopularList.push(elem);
                    }
                });
                setPopularSeries(subPopularList.slice(0, 5));
                setIsLoadedListSeries(true);
            });
    }, []);

    return (
        <section className={root}>
            <div className='container'>
                <h2>The most popular series</h2>
                <div className={row}>
                    {isLoadedListSeries ? (
                        <>
                            <div
                                className={mainSeries}
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${popularSeries[0].backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center center",
                                }}
                            >
                                <div className={rowInfo}>
                                    <h3>{popularSeries[0].name}</h3>
                                    <button className='button'>
                                        <Link
                                            href={`/serieses/${popularSeries[0].id}`}
                                        >
                                            more
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            {popularSeries.map((elem, index) =>
                                index > 0 ? (
                                    <div
                                        className={series}
                                        key={index}
                                        style={{
                                            backgroundImage: `url(https://image.tmdb.org/t/p/original${elem.poster_path})`,
                                            backgroundSize: "cover",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center center",
                                        }}
                                    >
                                        <div className={rowInfo}>
                                            <h3>{elem.name}</h3>
                                            <button className='button'>
                                                <Link
                                                    href={`/serieses/${elem.id}`}
                                                >
                                                    more
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PopularSeries;
