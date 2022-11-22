import React from 'react';
import {Container} from './styles';
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/rightSide/RightSide';

const Home = () => {
    return (
        <Container>
           <ProfileSide/>
           <PostSide/>
           <RightSide/>
        
        </Container>
    );
}

export default Home;