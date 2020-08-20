import styled from 'styled-components';

export const SendForm = styled.form`
    display: flex;
    align-items: ;
    justify-content: space-between;
    width: calc(70% + 65px);
    height: 70px;
    position: absolute;
    bottom: 10px;
    left: 170px;
`;

export const SendInput = styled.input`
    width: calc(100% - 65px);
    height: 100%;
    font-size: 1.1rem;
    color: #ECEDF1;
    background: none;
    border: none;
    border-top: 1px solid rgba(236, 237, 241, 0.2);
    padding-left: 5px;
    outline: none;
    &::placeholder {
        color: rgba(236, 237, 241, 0.6);
    }
`;

export const SendBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border: none;
    background-color: #C4C4C4;
    border-radius: 5px;
    cursor: pointer;
    transition-duration: 150ms;
    margin-top: 10px;
    &:hover {
        opacity: 0.8;
    }
`;