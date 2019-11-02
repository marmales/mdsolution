import React, { useContext, useEffect } from 'react';
import styled from "styled-components";
import ScrollDown from './elements/styled/Scroll'
import AboutMe from './elements/AboutMe';
import Services from './elements/Services';
import { pageName as homePageName } from './HomePage';
import ViewContext from "./ViewContext";


const View = styled.div`
    position: relative;
    background-image: #fff;
    
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const pageName = 'main';
const HeaderContents = styled.div `
    z-index: 2;
    position: sticky;
    top: 0;
    width: 100%;
`;
const HeaderSvg = styled.svg `
    z-index: 2;
    position: sticky;
    height: 25vh;
    width: 100%;
    fill: #949494;
`;
const PolygonSvg = styled.polygon `
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
`;
const MainContent = styled.div `
    z-index: 0;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const AboutBlockStyle = styled.div `
    display: block;
    minHeight: 100vh;
`
const EasterEgg = styled.div `
    height: 30vh;
`
function AboutBlock(props) {
    useEffect(() => {
        setTimeout(() => {
            const iam = document.getElementById("easteregg");
            iam.innerText = "HIRABLE"
        }, 15000);
    })
    return (
        <AboutBlockStyle id="about"><EasterEgg id="easteregg"/>{props.children}</AboutBlockStyle>
    );
}
const MainPage = () => {
    const { activeView, scroll } = useContext(ViewContext);
    useEffect(() => {
        if (activeView === pageName) {
            scroll({currentView: homePageName});
        }
    });
    return (
        <View>
            <HeaderContents>
                <HeaderSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <PolygonSvg points="0,0 100,0 100,75 0,100" />
                </HeaderSvg>
            </HeaderContents>
            <MainContent>
                <AboutBlock>
                    <AboutMe />
                    <ScrollDown />
                </AboutBlock>
                <Services />
            </MainContent>
        </View>
    );
};

export { pageName };
export default MainPage;