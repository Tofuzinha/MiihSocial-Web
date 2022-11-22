import React from 'react';
import { Container } from './styles';
import LogoSearch from '../LogoSearch/LogoSearch';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';

const ProfileLeft = () => {
    return(
        <Container>
            <LogoSearch/>
            <InfoCard/>
            <FollowersCard/>
        </Container>
    )
}

export default ProfileLeft;