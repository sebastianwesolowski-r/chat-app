import styled from 'styled-components';

export const CustomPopupContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 250px;
    background-color: ${props => props.theme.customWhite};
    border-radius: 2px;
    overflowX: hidden;
    overflowY: auto;
    p {
        font-size: 1rem;
        color: ${props => props.theme.customBlack};
        margin-bottom: 12px;
    }
    &::-webkit-scrollbar-track {
        background: #fff;
        box-shadow: inset 0 0 5px #D3D3D3;
    }
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.customPurple};
    }
`;

export const CustomPopupHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    background-color: ${props => props.theme.customPurple};
    margin-bottom: 5px;
    border-radius: 2px 2px 0 0;
`;