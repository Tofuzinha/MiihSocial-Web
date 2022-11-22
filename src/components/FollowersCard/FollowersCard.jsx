import React from 'react';
import {ButtonFollow, Container, Follower, FollowerBox, FollowerName} from './styles';

import { Followers } from '../../Data/FollowersData';

const FollowersCard = () => {

    return(
        <Container>
            <h3>Who is following you</h3>

            {Followers.map((follower, id)=> {
                return(
                    <Follower key={id}>
                        <FollowerBox>
                            <img src={follower.img} alt="" />
                            <FollowerName>
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </FollowerName>
                        </FollowerBox>
                        <ButtonFollow>Follow</ButtonFollow>

                    </Follower>
                )
            } )}
        </Container>

    );
}

export default FollowersCard;