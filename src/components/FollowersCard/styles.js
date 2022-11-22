import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    border-radius: 0.7rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 13px;

`

export const Follower = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        width: 3.2rem;
        height: 3.2rem;
        object-fit: cover;
        border-radius: 50%;
    }

`

export const FollowerBox = styled.div`
    display: flex;
    gap: 10px;


`

export const FollowerName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span:nth-of-type(1){
        font-weight: bold;
    }


`

export const ButtonFollow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border: none;
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