import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import styles from "./PeopleTabMovies.module.scss";

import { PeopleWorkType } from "@/types";

const PeopleTabMovies: NextPage = () => {
    const { row, innerBackground, infoTop, infoBot } = styles;

    const router: NextRouter = useRouter();
    const { id } = router.query;

    const [moviesList, setMoviesList] = useState<PeopleWorkType[]>([]);
    const [isLoadedMoviesList, setIsLoadedMoviesList] =
        useState<boolean>(false);

    useEffect(() => {
        if (id) {
            setIsLoadedMoviesList(false);
            axios
                .get(
                    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US`
                )
                .then((res) => {
                    const temporaryArr: PeopleWorkType[] = [];
                    res.data.cast.forEach((item: PeopleWorkType) => {
                        temporaryArr.push({
                            id: item.id,
                            character: item.character,
                            poster_path: item.poster_path,
                            title: item.title,
                        });
                    });

                    setMoviesList(temporaryArr);
                    setIsLoadedMoviesList(true);
                });
        }
    }, [id]);
    return (
        <>
            <div className={row}>
                {isLoadedMoviesList &&
                    moviesList.map((movie) => (
                        <div key={movie.id}>
                            <div
                                className={innerBackground}
                                style={
                                    movie.poster_path
                                        ? {
                                              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                                          }
                                        : {
                                              backgroundImage:
                                                  "linear-gradient(90deg, #ffef5c 0, #ecee54 12.5%, #d2ec4d 25%, #b6e949 37.5%, #96e548 50%, #71e14a 62.5%, #3ddc51 75%, #00d85b 87.5%, #00d568 100%)",
                                          }
                                }
                            >
                                <div className={infoTop}>
                                    <h4>{movie.title}</h4>
                                </div>
                                <div className={infoBot}>
                                    <p>{movie.character}</p>
                                    <Link
                                        href={`/movies/${movie.id}`}
                                        className='button'
                                    >
                                        more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default PeopleTabMovies;
