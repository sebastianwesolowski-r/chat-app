import styled from 'styled-components';

export const Chat = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #08090B;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ChatHeader = styled.div`
    width: 70%;
    height: 60px;
    font-size: 1.4rem;
    color: rgba(236, 237, 241, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(236, 237, 241, 0.8);
    padding: 15px;
    position: absolute;
    top: 0;
    left: 170px;
    span {
        color: #ECEDF1;
    }
    svg {
        display: none;
    }
    @media (max-width: 900px) {
        width: 90%;
        position: static;
        border-bottom: ${props => props.mobileMenu ? 'none' : '1px solid rgba(236, 237, 241, 0.8);'};
        svg {
            display: block;
            position: absolute;
            left: 30px;
            top: 18px;
            z-index: 3;
        }
    }
`;