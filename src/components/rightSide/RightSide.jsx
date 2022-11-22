import React, { useState } from 'react';
import { Container, NavIcons, ButtonRight } from './styles';
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

const RightSide = () => {

    const [modalOpened, setModalOpened] = useState(false);

    return(
        <Container>
            <NavIcons>
                <img src={Home} atl="" />
                <UilSetting/>
                <img src={Noti} atl="" />
                <img src={Comment} atl="" />
            </NavIcons>

            <TrendCard/>

            <ButtonRight
            onClick={() => setModalOpened(true)} >     
             Share
            </ButtonRight>
            <ShareModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            />

        </Container>
    )
}

export default RightSide;