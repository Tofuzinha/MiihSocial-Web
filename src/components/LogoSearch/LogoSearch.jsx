import React from 'react';
import { Container, Search, Sicon } from './styles';
import Logo from '../../img/logo.png';
import {UilSearch} from '@iconscout/react-unicons';

const LogoSearch = () => {
    return(
        <Container>
            <img src={Logo} />
            <Search>
                <input type="text" placeholder='#Explore' />
                <Sicon>
                    <UilSearch/>
                </Sicon>
            </Search>
        </Container>
    )
}

export default LogoSearch;