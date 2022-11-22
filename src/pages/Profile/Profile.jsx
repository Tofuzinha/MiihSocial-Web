import React from 'react';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';
import { Container, ProfileCenter } from './styles';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/rightSide/RightSide';

const Profile = () => {
    return(
        <Container>
            <ProfileLeft/>

            <ProfileCenter>
                <ProfileCard/>
                <PostSide/>
            </ProfileCenter>

            <RightSide/>

        </Container>
    )
}

export default Profile;