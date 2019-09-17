import React from 'react';
import styled from 'styled-components';

import MarcinSrc from './content/marcin.png';

import Header from "./elements/Header";
import ClickMeButton from "./elements/ClickMeButton";
import BoarBackground from "./elements/BoarBackground";
import {Title} from "./elements/Title";

const View = styled.div`
    position: relative;
    overflow: hidden;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.42) 0%, #CBCBCB 100%);
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;
`;
const pageName = 'home';
const HomePage = () => {
    return (
        <View>
            <Header imageSrc={MarcinSrc}>
                <Title>MD Solution</Title>
            </Header>
            <ClickMeButton />
            <BoarBackground />
        </View>
    );
};
export {pageName};
export default HomePage;