import React from "react";
import styles from "./SeasonEpisodesList.module.scss";

import { SeasonType } from "@/types";

import SeasonEpisodeItem from "../SeasonEpisodeItem/SeasonEpisodeItem";

const SeasonEpisodesList: React.FC<SeasonType> = ({ episodes }) => {
    const { root, row } = styles;
    return (
        <>
            <div className={root}>
                <div className={row}>
                    {episodes &&
                        episodes.map((episode, index) => (
                            <SeasonEpisodeItem
                                key={index}
                                overview={episode.overview}
                                vote_average={episode.vote_average}
                                still_path={episode.still_path}
                                air_date={episode.air_date}
                                episode_number={episode.episode_number}
                                name={episode.name}
                                runtime={episode.runtime}
                            ></SeasonEpisodeItem>
                        ))}
                </div>
            </div>
        </>
    );
};

export default SeasonEpisodesList;
