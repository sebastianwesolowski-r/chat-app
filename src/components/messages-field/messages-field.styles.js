import styled from 'styled-components';

export const MessagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    width: 70%;
    height: 75%;
    position: absolute;
    z-index: 2;
    left: 180px;
    bottom: 110px;
    @media (max-width: 900px) {
        width: 100%;
        height: 70%;
        left: 0;
        bottom: 80px;
        padding: 10px;
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