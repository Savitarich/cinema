import React, { useEffect, useState } from "react";
import styles from "./Season.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

import { SeasonType } from "@/types";

import SeasonEpisodesList from "@/components/SeasonEpisodesList/SeasonEpisodesList";

const Season: React.FC = () => {
    const {} = styles;

    const router = useRouter();
    const { season_number, id } = router.query;

    const [seasonInfo, setSeasonInfo] = useState<SeasonType>();
    console.log(seasonInfo);

    useEffect(() => {
        if (id && season_number) {
            axios
                .get(
                    `https://api.themoviedb.org/3/tv/${id}/season/${season_number}?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US`
                )
                .then((res) => {
                    setSeasonInfo(res.data);
                });
        }
    }, [id, season_number]);
    return (
        <>
            <div className='container'>
                {seasonInfo && (
                    <SeasonEpisodesList
                        episodes={seasonInfo.episodes}
                    ></SeasonEpisodesList>
                )}
            </div>
        </>
    );
};

export default Season;
