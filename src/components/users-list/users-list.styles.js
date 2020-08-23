import styled from 'styled-components';

export const UsersListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 100%;
    padding: 20px 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    overflow-y: auto;
    transition-duration: 150ms;
    p {
        font-size: 1rem;
        color: #ECEDF1;
        margin-bottom: 20px;
    }
    @media (max-width: 900px) {
        height: fit-content;
        top: 60px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ListHeader = styled.div`
    width: 100%;
    height: 40px;
    font-size: 1.2rem;
    text-align: center;
    color: rgba(236, 237, 241, 0.5);;
    border-bottom: 1px solid #ECEDF1;
    margin-bottom: 15px;
`;