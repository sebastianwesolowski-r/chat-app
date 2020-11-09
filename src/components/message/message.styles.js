import styled, {keyframes} from 'styled-components';

const messageAnimation = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-6px);
    }
    100% {
        transform: translateY(0)
    }
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.displayName === props.messageAuthor ? 'flex-end' : 'flex-start'};
    margin: 12px 0;
    padding: 0 8px;
`;

export const MessageBox = styled.div`
    width: fit-content;
    max-width: 35%;
    height: fit-content;
    font-size: 1rem;
    ${props => props.displayName === props.messageAuthor ? `background-color: ${props.theme.customBlack}; border-radius: 7px 7px 0 7px;` : `background-color: ${props.theme.customPurple}; border-radius: 7px 7px 7px 0;`};
    word-wrap: break-word;
    padding: 12px;
    animation: ${messageAnimation} 220ms ease-in;
`;

export const MessageData = styled.span`
    font-size: 0.7rem;
    color: #494D50;
    margin-top: 5px;
`;