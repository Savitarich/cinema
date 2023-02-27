import React from "react";
import styles from "./SeriesDescription.module.scss";

import { SeriesByIdInfoType } from "@/types";

const SeriesDescription: React.FC<SeriesByIdInfoType> = ({
    first_air_date,
    genres,
    production_countries,
    episode_run_time,
    vote_average,
    overview,
    status,
}) => {
    const {
        root,
        info,
        table,
        firstColumn,
        secondColumn,
        genresList,
        description,
    } = styles;
    console.log(genres);
    return (
        <div className={root}>
            <div className={info}>
                <table className={table}>
                    <tbody>
                        <tr>
                            <td className={firstColumn}>Release date:</td>
                            <td className={secondColumn}>{first_air_date}</td>
                        </tr>
                        {genres.length > 0 && (
                            <tr>
                                <td className={firstColumn}>Genres:</td>
                                <td className={secondColumn}>
                                    <ul className={genresList}>
                                        {genres.map((genre) => (
                                            <li key={genre.id}>
                                                {genre.name};{" "}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td className={firstColumn}>Country creator:</td>
                            <td className={secondColumn}>
                                {production_countries.map((country) => (
                                    <p key={country.name}>{country.name}; </p>
                                ))}
                            </td>
                        </tr>

                        {episode_run_time.length > 0 ? (
                            <tr>
                                <td className={firstColumn}>Runtime:</td>
                                <td className={secondColumn}>
                                    ~{episode_run_time[0]} minutes
                                </td>
                            </tr>
                        ) : null}

                        <tr>
                            <td className={firstColumn}>Status:</td>
                            <td className={secondColumn}>{status}</td>
                        </tr>
                        <tr>
                            <td className={firstColumn}>Grade:</td>
                            <td className={secondColumn}>
                                {Math.floor(vote_average * 10) / 10}/10
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={description}>{overview}</div>
            </div>
        </div>
    );
};

export default SeriesDescription;
