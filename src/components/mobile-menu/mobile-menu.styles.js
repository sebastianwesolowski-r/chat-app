import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 80px);
    height: 60px;
    background-color: #ECEDF1;
    position: absolute;
    top: 0;
    left: 80px;
    padding: 0 20px;
    svg {
        position: static;
    }
    @media (min-width: 900px) {
        display: none;
    }
`;

export const MobileMenuSettings = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    margin-left: 10px;
    margin-right: 90px;
`;

