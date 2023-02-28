import React from "react";
import { NextPage } from "next";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

import Navbar from "./Navbar/Navbar";

const Header: NextPage = () => {
    const { row, logoInner } = styles;

    return (
        <header>
            <div className='container'>
                <div className={row}>
                    <Link
                        className={logoInner}
                        href='/'
                    >
                        <span>
                            CINEMA<strong>TV</strong>
                        </span>
                        <Image
                            src='/images/header/logo.svg'
                            alt='logo'
                            width={50}
                            height={50}
                        ></Image>
                    </Link>
                    <Navbar></Navbar>
                </div>
            </div>
        </header>
    );
};

export default Header;
