import styled from 'styled-components';

export const MenuPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    height: 100%;
    padding: 40px 0;
    background-color: ${props => props.theme.customBlack};
    position: absolute;
    left: 0;
    top: 0;
    svg {
        cursor: pointer;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const MenuSettings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    margin-top: 90px;
    p {
        align-self: flex-start;
        font-size: 0.9rem;
        margin: 0;
        margin-left: 20px;
    }
`;

export const MenuOption = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    height: 45px;
    padding: 0 20px;
    background-color: ${props => props.theme.customPurple};
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    transition-duration: 150ms;
    &:hover {
        opacity: 0.8;
    }
    @media (max-width: 900px) {
        width: 130px;
        height: 39px;
        svg {
            transform: scale(0.85);
        }
    }
`;