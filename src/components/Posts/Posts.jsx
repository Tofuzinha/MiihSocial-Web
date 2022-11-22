import React from 'react';
import { Container } from './styles';
import { PostData } from '../../Data/PostsData';
import Post from '../Post/Post';

const Posts = () => {
    return(
        <Container>
            {PostData.map((post, id) => {
                return <Post data={post} id={id}/>
            })}
        </Container>
    );
}

export default Posts;