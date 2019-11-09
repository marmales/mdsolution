import React from 'react';
import styled from 'styled-components';

import Header from "./elements/Header";
import ClickMeButton from "./elements/ClickMeButton";
import BoarBackground from "./elements/BoarBackground";
import {Title} from "./elements/styled/Title";

const View = styled.div`
    position: relative;
    overflow-x: hidden;
    background-image: linear-gradient(360deg, rgba(0, 0, 0, 0.42) 0%, #CBCBCB 100%);
    height: 100vh;

    display: flex;
    flex-direction: row;
`;
const pageName = 'home';
const HomePage = () => {
    return (
        <View>
            <Header imageSrc={null}>
                <Title>{"MD\u00A0Solution"}</Title>
            </Header>
            <ClickMeButton />
            <BoarBackground />
        </View>
    );
};
export {pageName};
export default HomePage;