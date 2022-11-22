import react from 'react';
import { Container, ContainerFollow, Follow, FollowStatus, NameProfile, ProfileImages, ProfileName, VlBox } from './styles';
import Cover from '../../img/cover.png';
import Profile from '../../img/profileImg.jpg';

const ProfileCard = () => {

    const ProfilePage = true;

    return(
        <Container>
            <ProfileImages>
                <img src={Cover} alt="" />
                <img src={Profile} alt="" />
            </ProfileImages>
            <ProfileName>
                <span>Midori Kuran</span>
                <span>Nerd/Otaku</span>
            </ProfileName>
            <FollowStatus>
                <hr/>
                <ContainerFollow>
                    <Follow>
                        <span>7,889</span>
                        <span>Followings</span>
                    </Follow>
                    <VlBox></VlBox>
                    <Follow>
                        <span>1</span>
                        <span>Followers</span>
                    </Follow>

                    {ProfilePage && (
                        <>
                            <VlBox>

                            </VlBox>
                            <Follow>
                                <span>3</span>
                                <span>Post</span>
                            </Follow>
                        </>
                    )}

                </ContainerFollow>
                <hr/>
            </FollowStatus>
            {ProfilePage? '' : <NameProfile>My Profile</NameProfile>}
            
        </Container>
    );
}

export default ProfileCard;