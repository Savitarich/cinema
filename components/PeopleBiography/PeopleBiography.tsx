import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import axios from "axios";
import styles from "./PeopleBiography.module.scss";

type PeopleBiographyProps = {
    id: string | string[];
};

const PeopleBiography: NextPage<PeopleBiographyProps> = ({ id }) => {
    const { row, imgInner, infoInner } = styles;

    const [personInfo, setPersonInfo] = useState<{
        biography: string;
        profile_path: string;
        name: string;
    }>();

    useEffect(() => {
        if (id) {
            axios
                .get(
                    `https://api.themoviedb.org/3/person/${id}?api_key=f892af6cb83721e20fe476f9a8ef9f3e&language=en-US`
                )
                .then((res) => {
                    const temporaryObj: {
                        biography: string;
                        profile_path: string;
                        name: string;
                    } = { biography: "", profile_path: "", name: "" };
                    temporaryObj.biography = res.data.biography;
                    temporaryObj.name = res.data.name;
                    temporaryObj.profile_path = res.data.profile_path;

                    setPersonInfo(temporaryObj);
                });
        }
    }, [id]);

    return (
        <>
            {personInfo && (
                <div className={row}>
                    <div className={imgInner}>
                        <Image
                            alt={personInfo.name}
                            src={`https://image.tmdb.org/t/p/original${personInfo.profile_path}`}
                            width={260}
                            height={400}
                        ></Image>
                    </div>
                    <div className={infoInner}>
                        <h3>{personInfo.name}</h3>
                        <p>{personInfo.biography}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PeopleBiography;
