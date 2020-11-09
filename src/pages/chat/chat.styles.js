import styled from 'styled-components';

export const Chat = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.customWhite};
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
    }
`;

export const ChatHeader = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 65px;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 180px;
    svg {
        display: none;
    }
    @media (max-width: 900px) {
        width: 100%;
        height: 45px;
        position: static;
        padding-left: 60px;
        svg {
            display: block;
            position: absolute;
            left: 20px;
            top: 28px;
            z-index: 3;
        }
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-start;
    width: fit-content;
    height: 100%;
    font-size: 1rem;
    color: ${props => props.theme.customBlack};
    margin-right: auto;
    span {
        color: ${props => props.theme.customPurple};
        padding-left: 3px;
    }
    @media (max-width: 900px) {
        flex: 1;
        font-size: 0.9rem;
        margin-left: 10px;
        padding-bottom: 1.5px;
    }
`;

export const ChatroomInfo = styled.div`
    display: flex;
    flex: 1.5;
    width: fit-content;
    font-size: 1.5rem;
    color: ${props => props.theme.customPurple};
    margin: 0 auto;
    span {
        color: ${props => props.theme.customBlack};
        padding-left: 10px;
    }
    @media (max-width: 900px) {
        flex: 1;
        font-size: 1.1rem;
        margin: 0;
        margin-left: 5px;
        margin-right: auto;
        span {
            padding-left: 5px;
        }
    }
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(23, 23, 26, 0.4);
    backdrop-filter: blur(2px);
`;