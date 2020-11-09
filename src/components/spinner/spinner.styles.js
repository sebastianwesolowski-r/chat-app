import styled from 'styled-components';

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: rgba(23, 23, 26, 0.4);
    div {
        display: inline-block;
        width: 85px;
        height: 85px;
        border: 1px solid #5965DB;
        border-radius: 50%;
        border-top-color: #000000;
        animation: spin 1s ease-in-out infinite;
        -webkit-animation: spin 1s ease-in-out infinite;
        @keyframes spin {
            to {
            -webkit-transform: rotate(360deg);
            }
        }
        @-webkit-keyframes spin {
            to {
            -webkit-transform: rotate(360deg);
            }
        }
    }
`;