import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--cardColor);
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 1rem;

`

export const Trend = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    >span:nth-of-type(1) {
        font-weight: bold;
        font-size: 15px;
    }

    >span:nth-of-type(2) {
        font-size: 12px;
    }
`

