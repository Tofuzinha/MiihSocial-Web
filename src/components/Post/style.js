import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: var(--cardColor);
    border-radius: 1rem;
    gap: 1rem;

    >img {
        width: 100%;
        max-height: 20rem;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    >span {
        font-size: 12px;
        color: var(--gray);
    }
    
`

export const PostReact = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;

    >img {
        cursor: pointer;
    }
    
`

export const Detail = styled.div`

`