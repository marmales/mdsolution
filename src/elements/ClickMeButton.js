import React, { useContext, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { pageName as mainPageName } from "../MainPage";
import ViewContext from "../ViewContext";

const btnHeight = 80;
const LondrinaSolid = 'Londrina Solid';
const LondrinaShadow = 'Londrina Shadow';
const Box = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    font-family: '${LondrinaSolid}', cursive;
    flex: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.span`
    font-size: 60px;
    text-align: center;
    margin-bottom: 40px;
    color: #FFF;
    @media (max-width: 800px) {
        margin-top: 25vh;
    }
`;
const SolidTitle = styled(Title)`
    font-family: '${LondrinaSolid}', cursive;
`;
const ShadowTitle = styled(Title)`
    font-family: '${LondrinaShadow}', cursive;
`;
const ButtonNavigation = styled.a`
    text-decoration: none;
`
const Button = styled.div`
    font-size: 40px;
    color: #FFF;
    text-align: center;
    vertical-align: middle;
    position: relative;
    line-height: ${btnHeight}px;
	height: ${btnHeight}px;
	width: 300px;
	cursor: pointer;
    transition: all 0.5s;
	&::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        background-color: rgba(255,255,255,0.1);
        transition: all 0.3s;
    }
    &:hover::before {
        opacity: 0 ;
        transform: scale(0.5,0.5);
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        border: 1px solid rgba(255,255,255,0.9);
        transform: scale(1.2,1.2);
    }
    &:hover::after {
        opacity: 1;
        transform: scale(1,1);
    }
`;

function ClickMeButton() {
    const { scroll } = useContext(ViewContext);
    const btnRef = useRef(null);
    const [fontFamily, setFontFamily] = useState(LondrinaShadow);
    const handleMouseOver = () => setFontFamily(LondrinaSolid);
    const handleMouseOut = () => setFontFamily(LondrinaShadow);
    useEffect(() => {
        const btnRefcurrent = btnRef.current;
        btnRefcurrent.addEventListener('mouseover', handleMouseOver);
        btnRefcurrent.addEventListener('mouseout', handleMouseOut);
        return () => {
            btnRefcurrent.removeEventListener('mouseover', handleMouseOut);
            btnRefcurrent.removeEventListener('mouseout', handleMouseOut);
        };
    });
    const onScrollClick = () => {
        scroll({ currentView: mainPageName });
    };
    const FontComponent = fontFamily === LondrinaShadow ? ShadowTitle : SolidTitle;
    return (
        <Box>
            <FontComponent>{"Fullstack .NET\u00A0Developer"}</FontComponent>
            <ButtonNavigation href={"#about"}>
                <Button ref={btnRef} onClick={onScrollClick}>
                    <span>Get to know me!</span>
                </Button>
            </ButtonNavigation>
        </Box>
    );
}

export default ClickMeButton;
