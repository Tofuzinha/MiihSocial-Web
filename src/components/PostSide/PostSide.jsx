import React from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import { Container } from './styles';

const PostSide = () => {
    return(
        <Container>
            <PostShare/>
            <Posts/>
        </Container>
    );
}

export default PostSide;