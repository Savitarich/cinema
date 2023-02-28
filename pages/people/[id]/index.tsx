import React from "react";
import { NextPage } from "next";
import styles from "./Person.module.scss";
import { useRouter, NextRouter } from "next/router";

import PeopleBiography from "@/components/PeopleBiography/PeopleBiography";

const Person: NextPage = () => {
    const { root, row } = styles;

    const router: NextRouter = useRouter();
    const { id } = router.query;

    return (
        <div className={root}>
            <div className='container'>
                <div className={row}>
                    {id && <PeopleBiography id={id}></PeopleBiography>}
                </div>
            </div>
        </div>
    );
};

export default Person;
