import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

import ViewContext from "./ViewContext";
import AboutMe from './elements/AboutMe';
import Services from './elements/Services';
import {pageName as homePageName} from './HomePage';

const View = styled.div`
    position: relative;
    background-image: #fff;
    overflow:hidden;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const pageName = 'main';
const isCurrentView = activeView => {
    return activeView === pageName;
};
const MainHeader = styled.div `
    position: relative;
    background-color: #949494;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    top: -15vh;
    height: 35vh;
    transform: skewY(2.5deg);

`;
const MainContent = styled.div `
    position: relative;
    top: -5vh;
    height:60vh;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
const Separator = styled.div `
    background-color: #49494a;
    width: 1px;
    height: 60%;

`;
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
                <MainHeader />
                <MainContent>
                    <AboutMe />
                    <Separator/>
                    <Services>Moje usługi</Services>
                </MainContent>
            </View>
        </ScrollIntoViewIfNeeded>
    );
};

export { pageName };
export default MainPage;