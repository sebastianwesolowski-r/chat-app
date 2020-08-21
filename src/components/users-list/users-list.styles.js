import styled from 'styled-components';

export const UsersListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 170px;
    height: 100%;
    padding: 20px 0;
    background-color: #14181B;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    p {
        font-size: 1rem;
        color: #ECEDF1;
        margin-bottom: 20px;
    }
`;

export const ListHeader = styled.div`
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
    text-align: center;
    color: #ECEDF1;
    border-bottom: 1px solid #ECEDF1;
    margin-bottom: 40px;
`;