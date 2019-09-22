import React from 'react';
import styled from 'styled-components'

import BoarSrc from '../content/boar.png';

const elementWidth = 250;
const boxSize = 400;
const Box = styled.div `
    width: ${elementWidth}px;
    max-width: ${elementWidth}px;
`;
const Triangle = styled.div `
    position: absolute;
    width: ${boxSize}px;
    height: ${boxSize}px;
    margin-right: -${boxSize/2}px;
    margin-top: -${boxSize/2}px;
    top: 0;
    right: 0;
    background-color: #FFF;
    transform: rotate(-45deg);
    box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25);
`;
const Boar = styled.img `
    transform: rotate(45deg) scaleX(-1);
    position: relative;
    padding-top: 170px;
    padding-right: 120px;
    
    width: 75px;
`;

function BoarBackground() {
    return (
        <Box>
            <Triangle>
                <Boar src={BoarSrc}/>
            </Triangle>
        </Box>
    );
}

export default BoarBackground;