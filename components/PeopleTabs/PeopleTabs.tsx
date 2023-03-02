import React, { useState } from "react";
import { NextPage } from "next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "./PeopleTabs.module.scss";

import PeopleTabMovies from "./PeopleTabMovies/PeopleTabMovies";
import PeopleTabSeries from "./PeopleTabSeries/PeopleTabSeries";

const PeopleTabs: NextPage = () => {
    const {} = styles;

    const [tabIndex, setTabIndex] = useState<number>(0);

    return (
        <>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
            >
                <TabList className='people-tabs__buttons'>
                    <Tab>Movies</Tab>
                    <Tab>Serieses</Tab>
                </TabList>

                <div className='.people-tabs__panels'>
                    <TabPanel>
                        <PeopleTabMovies></PeopleTabMovies>
                    </TabPanel>
                    <TabPanel>
                        <PeopleTabSeries></PeopleTabSeries>
                    </TabPanel>
                </div>
            </Tabs>
        </>
    );
};

export default PeopleTabs;
