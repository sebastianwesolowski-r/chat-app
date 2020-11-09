import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 230px;
    background-color: ${props => props.theme.customBlack};
    position: absolute;
    z-index: 3;
    top: 70px;;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 20px 0;
    @media (min-width: 900px) {
        display: none;
    }
`;

export const MobileMenuHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.9rem;
    margin-bottom: 25px;
`;

export const MobileMenuSettings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 155px;
`;

