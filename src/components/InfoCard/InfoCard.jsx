import React, {useState} from 'react';
import { Container, InfoHead, Info, ButtonLogout } from './styles';
import {UilPen} from '@iconscout/react-unicons';
import ProfileModal from '../ProfileModal/ProfileModal';


const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return(
        <Container>
            <InfoHead>
                <h4>Your Info</h4>
                <UilPen width='2rem' height='1.2rem'
                onClick={() => setModalOpened(true)}
                />
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>    
            </InfoHead>

            <Info>
                <span>
                    <b>Status</b>
                </span>
                <span> in Relationship</span>
            </Info>

            <Info>
                <span>
                    <b>Lives in</b>
                </span>
                <span> My Universe</span>
            </Info>

            <Info>
                <span>
                    <b>Works at</b>
                </span>
                <span> PoringProgram inst</span>
            </Info>

            <ButtonLogout>Logout</ButtonLogout>

        </Container>
    )
}

export default InfoCard;