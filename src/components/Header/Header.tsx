import * as React from 'react';
import {
    BelowBlock, BelowNavigationItem, BelowNavigationWrapper, Cart,
    Favorite,
    InputWrapper,
    Logo, NavigationWrapper, Notification, Profile, Search,
    StyledHeader,
    StyledInput,
    UpperBlock
} from "components/Header/Header.styles";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <UpperBlock>
                <Logo/>
                <NavigationWrapper>
                    {/*todo: доделать выпадающий каталог и переходы по страницам*/}
                    <BelowNavigationItem>Каталог</BelowNavigationItem>
                    <BelowNavigationItem>Оплата и Доствака</BelowNavigationItem>
                    <BelowNavigationItem> О нас</BelowNavigationItem>
                </NavigationWrapper>
                <InputWrapper>
                    <Search/>
                    <StyledInput/>
                </InputWrapper>
                <NavigationWrapper>
                    <Notification/>
                    <Favorite/>
                    <Cart/>
                    <Profile/>
                </NavigationWrapper>



            </UpperBlock>
            <BelowBlock>

            </BelowBlock>
        </StyledHeader>
    )
}

export default Header;
