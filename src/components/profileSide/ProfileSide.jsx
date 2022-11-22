import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import { Container } from './styles'; 

const ProfileSide = () => {
    return(
        <Container>
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </Container>
    )
}

export default ProfileSide;