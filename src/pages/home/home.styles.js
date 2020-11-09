import styled from 'styled-components';

export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.customWhite};
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    max-width: 700px;
    height: 380px;
    color: ${props => props.theme.customBlack};
    background-color: ${props => props.theme.customWhite};
    border-radius: 2px;
    padding-top: 40px;
    margin-bottom: 35px;
    border: 1px solid rgba(30, 41, 51, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 900px) {
        margin: auto 0;
        width: 90%;
    }
`;

export const Header = styled.div`
    width: 100%;
    text-align: center;
    color: inherit;
    font-size: 1.5rem;
    margin-bottom: 50px;
`;

export const Join = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    @media (max-width: 900px) {
        width: 90%;
    }
`;

export const JoinInput = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    color: ${props => props.theme.customBlack};
    letter-spacing: 1px;
    background: none;
    padding: 5px 0;
    padding-left: 7px;
    margin-bottom: 35px;
    outline: none;
    border: 1px solid ${props => props.theme.customPurple};
    &::placeholder {
        color: inherit;
    }
    &:focus {
        &::placeholder {
            color: ${props => props.theme.customPurple};
            transition-duration: 150ms;
        }
    }
`;

export const JoinInputLabel = styled.label`
    align-self: flex-start;
    display: block;
    font-size: 0.9rem;
    color: ${props => props.theme.customBlack};
    margin-bottom: 6px;
`;

export const EnterBtn = styled.button`
    width: 105px;
    height: 40px;
    font-size: 1rem;
    background-color: ${props => props.theme.customPurple};
    border-radius: 4px;
    border: none;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
    transition-duration: 250ms;
    outline: none;
    margin-top: 5px;
    &:hover {
        background-color: ${props => props.theme.customWhite};
        color: ${props => props.theme.customPurple};
        border: 1px solid ${props => props.theme.customPurple};
        transform: translateY(2px);
        box-shadow: none;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    position: absolute;
    bottom: 25px;
    left: 25px;
    color: ${props => props.theme.customBlack};
    font-size: 1rem;
    a {
        color: inherit;
        text-decoration: none;
    }
    @media (max-width: 900px) {
        width: 80%;
        font-size: 0.8rem;
    }
`;