import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type TLayoudProps = {
    children: React.ReactNode;
};

const Layout: React.FC<TLayoudProps> = ({ children }) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    );
};

export default Layout;
