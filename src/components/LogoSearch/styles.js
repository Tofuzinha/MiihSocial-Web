import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    img{
        object-fit:contain;
        width: auto;
        height: 2.5rem;
    }
`

export const Search = styled.div`
    display: flex;
    background-color: var(--inputColor);
    border-radius: 10px;
    padding: 5px;

    input {
        background-color: transparent;
        border: none;
        outline: none;
    }

`

export const Sicon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(106.23deg, var(--green), var(--darkgreen) 100%);
    border-radius: 5px;
    padding: 5px;
    color: #fff;

    &:hover {
        cursor: pointer;
    }

`