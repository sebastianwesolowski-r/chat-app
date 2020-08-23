import styled from 'styled-components';

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 70%;
    height: 75%;
    position: absolute;
    left: 170px;
    bottom: 120px;
    @media (max-width: 900px) {
        position: static;
        width: 90%;
    }
`;

export const Messages = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #22252A;
    }

    &::-webkit-scrollbar-thumb {
        background: #ECEDF1;
    }
`;