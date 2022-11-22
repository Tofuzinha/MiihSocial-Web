import React, { useState, useRef } from 'react';
import { ButtonShare, Container, FileShare, Option, PostOptions, PreviewImage, ShareBox } from './styles';
import ProfileImage from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle }from '@iconscout/react-unicons';
import { UilLocationPoint }from '@iconscout/react-unicons';
import { UilSchedule }from '@iconscout/react-unicons';
import { UilTimes }from '@iconscout/react-unicons';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    }

    return(
        <Container>
            <img src={ProfileImage} alt="" />
            <ShareBox>
                <input type="text" placeholder='What happening' />

                <PostOptions>
                    <Option 
                    style={{color: "var(--photo)"}}
                    onClick={()=>imageRef.current.click()}
                    >
                        <UilScenery/>
                        Photo
                    </Option>
                    <Option style={{color: "var(--video)"}}>
                        <UilPlayCircle/>
                        Video
                    </Option>
                    <Option style={{color: "var(--location)"}}>
                        <UilLocationPoint/>
                        Location
                    </Option>
                    <Option style={{color: "var(--shedule)"}}>
                        <UilSchedule/>
                        Shedule
                    </Option>
                    <ButtonShare>share</ButtonShare>
                    <FileShare>
                        <input 
                        type="file" 
                        name="myImage" 
                        ref={imageRef}
                        onChange={onImageChange}
                        />
                    </FileShare>
                </PostOptions>
                {image && (
                    <PreviewImage>
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} />
                    </PreviewImage>
                )}
            </ShareBox>
            
        </Container>
    );
}

export default PostShare;