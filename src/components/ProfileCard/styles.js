import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    border-radius: 1.5rem;
    overflow-x: clip;
    background: var(--cardColor);
    
`

export const ProfileImages = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img:nth-of-type(1) {
        width: 100%;
        object-fit: cover;
    }

    img:nth-of-type(2) {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        position: absolute;
        bottom: -3rem;
        box-shadow: var(--profileShadow);
        object-fit: cover;
    }

`

export const ProfileName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    gap: 10px;

    span:nth-of-type(1) {
    font-weight: bold;
    }
`

export const FollowStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    hr {
        width: 85%;
        border: 1px solid var(--hrColor);
    }

`

export const ContainerFollow = styled.div`
    display: flex;
    gap: 1rem;
    width: 80%;
    justify-content: space-around;
    align-items: center;

`

export const Follow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    span:nth-of-type(1) {
        font-weight: bold;
    }
    span:nth-of-type(2) {
        color: var(--gray);
        font-size: 13px;
    }

`

export const VlBox = styled.div`
    height: 150%;
    border-left: 2px solid var(--hrColor);

`

export const NameProfile = styled.span`
    font-weight: bold;
    color: var(--green);
    align-self: center;
    margin-bottom: 1rem;
    cursor: pointer;

`