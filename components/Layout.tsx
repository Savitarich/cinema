import React from "react";
import { NextPage } from "next";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type TLayoudProps = {
    children: React.ReactNode;
};

const Layout: NextPage<TLayoudProps> = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};

export default Layout;
