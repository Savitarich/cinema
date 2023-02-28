import { url } from "inspector";
import React, { useState, useEffect } from "react";
import styles from "./SeasonEpisodeItem.module.scss";

type SeasonEpisodeInfoType = {
    overview?: string;
    vote_average?: number;
    still_path?: string;
    air_date?: string | null;
    episode_number?: number;
    name?: string;
    runtime?: number;
};

const SeasonEpisodeItem: React.FC<SeasonEpisodeInfoType> = ({
    overview,
    vote_average,
    still_path,
    air_date,
    episode_number,
    name,
    runtime,
}) => {
    const {
        card,
        front,
        back,
        flipped,
        contentTop,
        contentBottom,
        episodeNumber,
        description,
        contentWrapper,
    } = styles;

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`${card} ${isFlipped ? flipped : ""}`}>
            <div
                className={front}
                style={
                    still_path
                        ? {
                              backgroundImage: `url(https://image.tmdb.org/t/p/original${still_path}) `,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center center",
                          }
                        : {
                              backgroundColor: `#bbdefb`,
                          }
                }
            >
                <div className={contentTop}>
                    <h4>{name}</h4>
                    <p>Duration: {runtime} minutes</p>
                    <p>Grade: {vote_average}/10</p>
                    <p>Realise Date: {air_date}</p>
                </div>
                <div className={contentBottom}>
                    <p className={episodeNumber}>
                        Episode: <span>{episode_number}</span>
                    </p>
                    <button
                        className='button'
                        onClick={handleClick}
                    >
                        more
                    </button>
                </div>
            </div>
            <div
                className={back}
                style={{
                    backgroundColor: `#bbdefb`,
                }}
            >
                <div className={contentWrapper}>
                    <div className={contentTop}>
                        <p className={description}>
                            {overview ? overview : <>information is absent</>}
                        </p>
                    </div>
                    <div className={contentBottom}>
                        <button
                            className='button'
                            onClick={handleClick}
                        >
                            back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeasonEpisodeItem;
