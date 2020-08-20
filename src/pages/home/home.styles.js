import styled from 'styled-components';

export const Home = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #F3F3F3;
`;

export const BackgroundCaption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: 4rem;
    color: #B4B4B4;
    position: absolute;
    ${props => props.align === "left" ? 'left: 0; padding-right: 150px;' : 'right: 0; padding-left: 150px;'};
    user-select: none;
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 440px;
    height: 440px;
    color: #ECEDF1;
    background-color: #14181B;
    border-radius: 15px;
    padding: 35px 0;
    margin-bottom: 35px;
    position: relative;
    z-index: 1;
`;

export const Header = styled.div`
    width: 100%;
    text-align: center;
    font-size: 33px;
    margin-bottom: 70px;
`;

export const Join = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export const JoinInput = styled.input`
    width: 100%;
    font-size: 1.1rem;
    color: #ECEDF1;
    letter-spacing: 1px;
    background: none;
    border: none;
    border-bottom: 1px solid #ECEDF1;
    padding: 5px 0;
    padding-left: 7px;
    margin-bottom: 50px;
    outline: none;
    &::placeholder {
        color: #C4C4C4;
    }
    &:focus {
        &::placeholder {
            color: #ECEDF1;
            transition-duration: 150ms;
        }
    }
`;

export const EnterBtn = styled.button`
    width: 115px;
    height: 40px;
    font-size: 1.2rem;
    color #14181B;
    background-color: #ECEDF1;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 4px 4px rgba(132, 132, 132, 0.4);
    margin-top: 45px;
    cursor: pointer;
    transition-duration: 250ms;
    outline: none;
    &:hover {
        background-color: #C4C4C4;
        transform: translateY(4px);
        box-shadow: none;
    }
`;