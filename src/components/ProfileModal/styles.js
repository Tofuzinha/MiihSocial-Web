import styled from "styled-components";

export const FormModal = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    >h3 {
        font-size: 20px;
    }

    >div {
        display: flex;
        justify-content: center;
        gap: 1rem;
        height: 2rem;
        width: 100%;
    }



`

export const InfoInput = styled.input`
    border: none;
    outline: none;
    background-color: var(--inputColor);
    padding: 20px;
    border-radius: 8px;
    flex: 1;



`

export const BtnUpDate = styled.button`
    display: flex;
    align-self: flex-end;
    justify-content: center;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBg);

    width: 90%;
    height: 2rem;
    margin-top: 6rem;
    align-items: center;
    align-self: center;

    transition: all 100ms ease-out;

    &:hover {
        cursor: pointer;
        color: var(--darkgreen);
        background: transparent;
        border: 2px solid var(--darkgreen);
    }

`