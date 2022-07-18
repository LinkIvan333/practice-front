import * as React from 'react';
import {
    BelowBlock, BelowNavigationItem, Cart,
    Favorite,
    InputWrapper,
    Logo, NavigationWrapper, Notification, Profile, Search,
    StyledHeader,
    StyledInput,
    UpperBlock
} from "components/Header/Header.styles";
import {RouteEnum} from "config/routes";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <UpperBlock>
                <Logo/>
                <NavigationWrapper>
                    {/*todo: доделать выпадающий каталог и переходы по страницам*/}
                    <BelowNavigationItem to={RouteEnum.catalog}>Каталог</BelowNavigationItem>
                    <BelowNavigationItem  to={RouteEnum.payAndDelivery}>Оплата и Доствака</BelowNavigationItem>
                    <BelowNavigationItem  to={RouteEnum.about}> О нас</BelowNavigationItem>
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
