import styled from 'styled-components';

export const SendForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(70% + 70px);
    height: 60px;
    position: absolute;
    bottom: 20px;
    left: 180px;
    overflow: hidden;
    @media (max-width: 900px) {
        width: 100%;
        margin-top: 10px;
        left: 0;
        bottom: 10px;
        margin: 0 auto;
        padding: 0 10px;
    }
`;

export const SendContainer = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 70px);
    height: 100%;
    background-color: ${props => props.theme.customWhite};
    border: 1px solid ${props => props.theme.customBlack};
    padding-left: 15px;
`

export const SendInput = styled.input`
    width: 90%;
    height: 100%;
    font-size: 1.1rem;
    color: ${props => props.theme.customBlack};
    background: none;
    border: none;
    outline: none;
    &::placeholder {
        color: inherit;
    }
`;

export const SendIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10%;
    height: 100%;
    padding: 0 22px;
    svg {
        cursor: pointer;
        transition-duration: 100ms;
        &:hover {
            opacity: 0.75;
        }
    }
`;

export const SendBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    background-color: ${props => props.theme.customPurple};
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 100ms;
    padding-top: 2px;
    outline: none;
    &:hover {
        opacity: 0.85;
    }
`;

export const EmojiPicker = styled.span`
    position: absolute;
    z-index: 4;
    bottom: 90px;
    right: 20%;
`;