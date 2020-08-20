import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.displayName === props.messageAuthor ? 'flex-end' : 'flex-start'};
    margin: 12px 0;
`;

export const MessageBox = styled.div`
    width: fit-content;
    max-width: 35%;
    height: fit-content;
    font-size: 1rem;
    ${props => props.displayName === props.messageAuthor ? 'background-color: #ECEDF1; color: #14181B;' : 'background-color: #14181B; color: #C4C4C4;'};
    word-wrap: break-word;
    padding: 12px;
    border-radius: 5px 5px 0 5px;
`;

export const MessageData = styled.span`
    font-size: 0.7rem;
    color: #C4C4C4;
    margin-top: 5px;
`;