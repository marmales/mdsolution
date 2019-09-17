import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

import ViewContext from "./ViewContext";
import {pageName as homePageName} from './HomePage';

import SeriousMarcin from './content/aaron.png';
import Header from "./elements/Header";
import BoarBackground from "./elements/BoarBackground";
import Content from "./elements/Content";
import NavbarArea from "./elements/NavbarArea";

const View = styled.div`
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.42) 0%, #CBCBCB 100%);
    height: 100vh;
    
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;
const pageName = 'main';
const isCurrentView = activeView => {
    return activeView === pageName;
};

const MainPage = () => {
    const { activeView, scroll } = useContext(ViewContext);
    useEffect(() => {
        if (activeView === pageName) {
            scroll({currentView: homePageName});
        }
    });
    return (
        <ScrollIntoViewIfNeeded active={isCurrentView(activeView)} options={{behavior: 'smooth', scrollMode: 'always'}}>
            <View>
                <Header imageSrc={SeriousMarcin}>
                    <NavbarArea/>
                </Header>
                <Content />
                <BoarBackground />
            </View>
        </ScrollIntoViewIfNeeded>
    );
};

export { pageName };
export default MainPage;