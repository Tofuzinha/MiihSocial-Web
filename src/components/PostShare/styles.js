import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    gap: 1rem;
    background-color: var(--cardColor);
    padding: 1rem;
    border-radius: 1rem;

    &>img{
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        object-fit: cover;
    }
`

export const ShareBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 1rem;

    input {
        background-color: var(--inputColor);
        border-radius: 10px;
        padding: 10px;
        font-size: 17px;
        border: none;
        outline: none;
    }


`

export const PostOptions = styled.div`
    display: flex;
    justify-content: space-around;

`

export const Option = styled.div`
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    &:hover{
        cursor: pointer;
    }

`

export const ButtonShare = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: 2px solid ;
    border-radius: 0.5rem;
    background: var(--buttonBg);
    
    height: 2rem;
    padding: 0 20px;

    transition: all 100ms ease-out;

    &:hover {
        cursor: pointer;
        color: var(--darkgreen);
        background: transparent;
        border: 2px solid var(--darkgreen);
    }

`

export const FileShare = styled.div`
    display: none;

`

export const PreviewImage = styled.div`
    position: relative;

    &>svg {
        position: absolute;
        right: 1rem;
        top: 0.5rem;
        cursor: pointer;
    }

    &>img {
        width: 100%;
        max-height: 20rem;
        object-fit: cover;
        border-radius: 0.5rem;
    }

`