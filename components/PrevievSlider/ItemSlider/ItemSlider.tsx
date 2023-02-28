import React from "react";
import styles from "./ItemSlider.module.scss";
import Link from "next/link";

type ItemSliderProps = {
    id: number;
    image: string;
    title: string;
    rating: number;
};

const ItemSlider: React.FC<ItemSliderProps> = ({
    image,
    title,
    rating,
    id,
}) => {
    const { root, row, rowInfo, container, subRowInfo } = styles;

    return (
        <div
            className={root}
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className={row}>
                <div className={container}>
                    <div className={rowInfo}>
                        <h3>{title}:</h3>
                        <div className={subRowInfo}>
                            <p>{rating}/10</p>
                            <button className='button'>
                                <Link href={`/movies/${id}`}>more</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemSlider;
