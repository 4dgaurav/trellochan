import React, { Component } from 'react';
import { 
    StyledHeader, StyledLinkWrapper,
    StyledHomeLink, StyledLogoLink
} from  './Styled';

class Header extends Component {
    render() {
        return (
            <StyledHeader>
                <StyledLinkWrapper>
                    <StyledLogoLink to="/">TRELLOCHAN</StyledLogoLink>
                    <StyledHomeLink to="/">+ ALL BOARDS</StyledHomeLink>
                </StyledLinkWrapper>
            </StyledHeader>
        );
    }
}

export default Header;
