import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
            </LoginInnerContainer>
        </LoginContainer>
    );
}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    

    > img {
        object-fit:contain;
        height: 100px;
        margin-bottom: 40px;
    }
`;