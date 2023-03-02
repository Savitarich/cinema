import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import styles from "./Series.module.scss";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

import { SeriesByIdInfoType } from "@/types";

import SeriesDescription from "@/components/SeriesDescription/SeriesDescription";
import SeriesSeasonsList from "@/components/SeriesSeasonsList/SeriesSeasonsList";

const Series: NextPage = () => {
    const {
        root,
        innerBackground,
        contentWrapper,
        textWrapper,
        buttonToFavorites,
    } = styles;

    const router = useRouter();
    const { id } = router.query;

    const [seriesInfo, setSeriesInfo] = useState<SeriesByIdInfoType>();

    useEffect(() => {
        if (id) {
            axios
                .get(
                    `https://api.themoviedb.org/3/tv/${id}?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US`
                )
                .then((res) => {
                    setSeriesInfo(res.data);
                });
        }
    }, [id]);

    return (
        <>
            {seriesInfo ? (
                <div className={root}>
                    <div className='container'>
                        <div
                            className={innerBackground}
                            style={
                                seriesInfo.backdrop_path
                                    ? {
                                          backgroundImage: `url(https://image.tmdb.org/t/p/original${seriesInfo.backdrop_path})`,
                                      }
                                    : {
                                          backgroundImage:
                                              "linear-gradient(190deg, #fffc61 0, #ffe557 16.67%, #f6cc4f 33.33%, #e5b148 50%, #d29842 66.67%, #c0823d 83.33%, #af6f39 100%)",
                                      }
                            }
                        >
                            <div className={contentWrapper}>
                                <Image
                                    alt={seriesInfo.name}
                                    src={`https://image.tmdb.org/t/p/original${seriesInfo.poster_path}`}
                                    width={160}
                                    height={260}
                                ></Image>
                                <div className={textWrapper}>
                                    <h3>{seriesInfo.name}</h3>
                                    <p>{seriesInfo.tagline}</p>
                                    <button className={buttonToFavorites}>
                                        Add to favorites
                                        <svg
                                            width={60}
                                            height={60}
                                            version='1.1'
                                            viewBox='0 0 24 24'
                                            xmlns='http://www.w3.org/2000/svg'
                                        >
                                            <style type='text/css'></style>
                                            <g />
                                            <g id='_icons'>
                                                <path d='M14,10h-1V9c0-0.6-0.4-1-1-1s-1,0.4-1,1v1h-1c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v1c0,0.6,0.4,1,1,1s1-0.4,1-1v-1h1   c0.6,0,1-0.4,1-1S14.6,10,14,10z' />
                                                <path d='M19,3h-1H6H5C4.4,3,4,3.4,4,4s0.4,1,1,1v14.1c0,0.7,0.4,1.4,1.1,1.8c0.3,0.2,0.6,0.2,0.9,0.2c0.4,0,0.8-0.1,1.1-0.3   l3.9-2.6l3.9,2.6c0.6,0.4,1.4,0.5,2.1,0.1c0.7-0.3,1.1-1,1.1-1.8V5c0.6,0,1-0.4,1-1S19.6,3,19,3z M17,19.1C17,19.1,17,19.1,17,19.1   l-3.9-2.6c-0.3-0.2-0.7-0.3-1.1-0.3s-0.8,0.1-1.1,0.3L7,19.1V5h10L17,19.1L17,19.1z' />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <SeriesDescription {...seriesInfo}></SeriesDescription>
                        <SeriesSeasonsList {...seriesInfo}></SeriesSeasonsList>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default Series;
