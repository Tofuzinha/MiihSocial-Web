import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

export const NavIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    >img {
        width: 1.5rem;
        height: 1.5rem;
    }

    >svg {
        width: 1.5rem;
        height: 1.5rem;
    }
`

export const ButtonRight = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBg);

    height: 3rem;
    width: 80%;
    padding: 0 20px;
    align-self: center;

    transition: all 100ms ease-out;

    &:hover {
        cursor: pointer;
        color: var(--darkgreen);
        background: transparent;
        border: 2px solid var(--darkgreen);
    }

`