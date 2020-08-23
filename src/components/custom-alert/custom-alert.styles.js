import styled, {keyframes} from 'styled-components';

const show = keyframes`
    0% {
        top: -250px;
    }
    100% {
        top: 150px;
    }
`;

export const AlertContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 380px;
    height: 130px;
    font-size: 1.2rem;
    background-color: #ECEDF1;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    animation: ${show} 100ms ease-in;
    top: 150px;
    padding: 10px 0;
    z-index: 3;
    user-select: none;
    p {
        color: #14181B;
        padding: 0;
        margin: 0;
    }
    @media (max-width: 900px) {
        width: 85%;
        p {
            margin-top: 38px;
        }
        svg {
            position: absolute;
            width: 30px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;

export const AlertBtn = styled.button`
    width: 65px;
    height: 30px;
    font-size: 1rem;
    color: #ECEDF1;
    background-color: #14181B;
    outline: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;