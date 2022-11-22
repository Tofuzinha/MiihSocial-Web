import React from 'react';
import { Container, PostReact, Detail } from './style';
import Comment from '../../img/comment.png';    
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const Post = ({data}) => {
    return(
        <Container>
            <img src={data.img} atl="" />

            <PostReact>
                <img src={data.liked?Heart: NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </PostReact>
            <span>{data.likes} likes</span>

            <Detail>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>
            </Detail>
        </Container>
    )
}

export default Post;