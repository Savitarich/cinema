import React from "react";
import { NextPage } from "next";
import styles from "./Movies.module.scss";

const Movies: NextPage = () => {
    const { root } = styles;

    return <div className={root}></div>;
};

export default Movies;
