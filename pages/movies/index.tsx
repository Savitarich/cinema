import React from "react";
import styles from "./Movie.module.scss";
import { useRouter } from "next/router";

const Movies: React.FC = () => {
    const { root } = styles;

    const router = useRouter();
    const { id } = router.query;
    console.log(id);

    return <div className={root}></div>;
};

export default Movies;
