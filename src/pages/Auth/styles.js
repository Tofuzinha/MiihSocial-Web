import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    position: relative;

    >div {
        display: flex;
        align-items: center;
        justify-content: center;
    }


`

export const Aleft = styled.div`
    gap: 1rem;

    >img {
        width: auto;
        height: 5rem;
    }

`

export const WebName = styled.div`

    text-align: center;

    >h1 {
        font-size: 3rem;
        background-color: red;
        background-image: var(--buttonBg);
        background-size: 100%;
        background-repeat: repeat;

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;

    }

    >h6 {
        font-size: 0.98rem;
        color: var(--gray);
    }

`

export const Aright = styled.div`
    background: var(--cardColor);
    border-radius: 1rem;
    padding: 2rem; 

`

export const InfoForm = styled.form`
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

export const DetailForm = styled.div`
    >span{
        font-size: 12px;
        color: var(--gray);
    }
` 

export const InfoBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    background: var(--buttonBg);

    height: 2rem;
    width: 6rem;
    padding: 0 20px;
    align-self: flex-end;

    transition: all 100ms ease-out;

    &:hover {
        cursor: pointer;
        color: var(--darkgreen);
        background: transparent;
        border: 2px solid var(--darkgreen);
    }

`