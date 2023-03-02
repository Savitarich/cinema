import React from "react";
import { NextPage } from "next";
import styles from "./SeriesSeasonsList.module.scss";
import Link from "next/link";

import { SeriesByIdInfoType } from "@/types";

const SeriesSeasonsList: NextPage<SeriesByIdInfoType> = ({ seasons, id }) => {
    const { root, row, card, cardBox, infoBox, date, episodeCount } = styles;
    console.log(seasons);

    return (
        <>
            <div className={root}>
                <div className={row}>
                    {seasons.map(
                        (season) =>
                            season.air_date && (
                                <>
                                    <Link
                                        href={`/serieses/${id}/season/${season.season_number}`}
                                    >
                                        <div className={card}>
                                            <div
                                                className={cardBox}
                                                style={{
                                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${season.poster_path})`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat:
                                                        "no-repeat",
                                                    backgroundPosition:
                                                        "center center",
                                                }}
                                            >
                                                <div className={infoBox}>
                                                    <p className={date}>
                                                        {season.air_date}
                                                    </p>
                                                    <p className={episodeCount}>
                                                        {season.episode_count}{" "}
                                                        episodes
                                                    </p>
                                                </div>
                                            </div>
                                            <h5>{season.name}</h5>
                                        </div>
                                    </Link>
                                </>
                            )
                    )}
                </div>
            </div>
        </>
    );
};

export default SeriesSeasonsList;
