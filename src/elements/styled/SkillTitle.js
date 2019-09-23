import styled from 'styled-components';

export default styled.h3 `
    cursor: pointer;
    display: inline-block;
    position: relative;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        transition: width 0s ease, background .5s ease;
    }
    &::after {
        content: '';
        display: block;
        right: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        background: #49494a;
        transition: width .5s ease;
    }
    &:hover::before {
        width: 100%;
        background: #49494a;
        transition: width .5s ease;
    }
    &:hover::after {
        width: 100%;
        background: transparent;
        transition: all 0s ease;
    }
`;