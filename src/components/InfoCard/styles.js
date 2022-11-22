import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: var(--cardColor);
    padding: 1rem;
    border-radius: 1rem;
    margin: 2rem 0;

`

export const InfoHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    >svg:hover {
        cursor: pointer;
    }

`

export const Info = styled.div`
    font-size: 13px;


`

export const ButtonLogout = styled.button`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBg);

    width: 7rem;
    height: 2rem;
    margin-top: 6rem;
    align-items: center;

    transition: all 100ms ease-out;

    &:hover {
        cursor: pointer;
        color: var(--darkgreen);
        background: transparent;
        border: 2px solid var(--darkgreen);
    }

`