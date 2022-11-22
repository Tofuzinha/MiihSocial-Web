import React from 'react';
import { Container, Aleft, WebName, Aright, InfoForm, InfoInput, DetailForm, InfoBtn } from './styles';
import Logo from '../../img/logo.png'

const Auth = () => {
    return(
        <Container>
            <Aleft>
                <img src={Logo} atl="" />
                <WebName>
                    <h1>Miih Social</h1>
                    <h6>Explore the world and fame</h6>
                </WebName>
            </Aleft>
            <LogIn/>

        </Container>
    );
}

function LogIn () {
    return(
        <Aright>
            <InfoForm>
                <h3>Log In</h3>

                <div>
                    <InfoInput 
                    type="text"
                    placeholder='Username'
                    name='username'
                    />
                </div>
                <div>
                    <InfoInput 
                    type="text"
                    placeholder='Password'
                    name='password'
                    />
                </div>

                <DetailForm>
                    <span>Don't have an account Sign up.</span>
                </DetailForm>
                <InfoBtn type='submit'>Login</InfoBtn>

            </InfoForm>
        </Aright>
    )
}

function SignUp () {
    return(
        <Aright>
            <InfoForm>
                <h3>Sign up</h3>

                <div>
                    <InfoInput 
                    type="text"
                    placeholder='First Name'
                    name='firstname'
                    />
                    <InfoInput 
                    type="text"
                    placeholder='Last Name'
                    name='lasttname'
                    />
                </div>
                <div>
                    <InfoInput 
                    type="text"
                    placeholder='Username'
                    name='username'
                    />
                </div>
                <div>
                    <InfoInput 
                    type="text"
                    placeholder='Password'
                    name='password'
                    />
                    <InfoInput 
                    type="text"
                    placeholder='Confirm Password'
                    name='confirmpassword'
                    />
                </div>

                <DetailForm>
                    <span>Already have  an account. Login!</span>
                </DetailForm>
                <InfoBtn type='submit'>Sign up</InfoBtn>

            </InfoForm>
        </Aright>
    )
}


export default Auth;