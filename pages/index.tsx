import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

import PreviewSlider from "@/components/PrevievSlider/PreviewSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta
                    name='description'
                    content='cinema'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link
                    rel='icon'
                    href='/images/logo.svg'
                />
            </Head>
            <main>
                <PreviewSlider></PreviewSlider>
            </main>
        </>
    );
}
