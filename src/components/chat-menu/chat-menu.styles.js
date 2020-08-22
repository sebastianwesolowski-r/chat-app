import styled from 'styled-components';

export const MenuPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    height: 100%;
    padding: 40px 0;
    position: absolute;
    left: 0;
    top: 0;
    svg {
        cursor: pointer;
    }
`;

export const MenuSettings = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 250px;
    margin-top: 70px;
`;