import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Header = () => {
    return(
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar
                    // TODO: Add onlick
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}

            {/* Header Right */}
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    
`;

const HeaderLeft = styled.div`

`;

const HeaderAvatar = styled(Avatar)`
    
`;