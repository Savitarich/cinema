import React from "react";
import Link from "next/link";

type PopularPeopleItemProps = {
    id: number;
    name: string;
    profile_path: string;
};

const PopularPeopleSliderItem: React.FC<PopularPeopleItemProps> = ({
    id,
    name,
    profile_path,
}) => {
    console.log(name, profile_path);

    return (
        <div
            className='popular-people__slide-box'
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${profile_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className='popular-people__row-info'>
                <h3>{name}</h3>
                <div className='popular-people__content-bottom'>
                    <button className='button'>
                        <Link href={`/people/${id}`}>more</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularPeopleSliderItem;
