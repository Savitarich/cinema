import React from "react";
import { NextPage } from "next";
import styles from "./MovieDescription.module.scss";

import { getMovieByIdType } from "@/types";

const MovieDescription: NextPage<getMovieByIdType> = ({
    release_date,
    budget,
    genres,
    overview,
    production_countries,
    revenue,
    runtime,
    status,
    vote_average,
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
    return (
        <div className={root}>
            <div className={info}>
                <table className={table}>
                    <tbody>
                        <tr>
                            <td className={firstColumn}>Release date:</td>
                            <td className={secondColumn}>{release_date}</td>
                        </tr>
                        <tr>
                            <td className={firstColumn}>Genres:</td>
                            <td className={secondColumn}>
                                <ul className={genresList}>
                                    {genres.map((genre) => (
                                        <li key={genre.id}>{genre.name}; </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                        {budget ? (
                            <tr>
                                <td className={firstColumn}>Budget:</td>
                                <td className={secondColumn}>{budget}$</td>
                            </tr>
                        ) : null}
                        <tr>
                            <td className={firstColumn}>Country creator:</td>
                            <td className={secondColumn}>
                                {production_countries.map((country) => (
                                    <p key={country.name}>{country.name}; </p>
                                ))}
                            </td>
                        </tr>
                        {revenue ? (
                            <tr>
                                <td className={firstColumn}>Revenue:</td>
                                <td className={secondColumn}>{revenue}$</td>
                            </tr>
                        ) : null}

                        <tr>
                            <td className={firstColumn}>Runtime:</td>
                            <td className={secondColumn}>{runtime} minutes</td>
                        </tr>
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

export default MovieDescription;
