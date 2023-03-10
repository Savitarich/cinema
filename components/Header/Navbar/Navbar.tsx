import React from "react";
import { NextPage } from "next";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [{ id: 1, title: "Home", path: "/" }];

const Navbar: NextPage = () => {
    const {} = styles;
    return (
        <nav>
            <ul>
                {navigation.map(({ id, title, path }) => (
                    <li key={id}>
                        <Link href={path}>{title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
