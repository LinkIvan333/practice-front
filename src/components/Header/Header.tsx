import * as React from 'react';
import {
    BelowBlock,
    BelowNavigationItem,
    Cart,
    CatalogLinkWrapper,
    CatalogWrapper,
    Favorite,
    InputWrapper,
    Logo,
    NavigationWrapper,
    Notification,
    Profile,
    Search,
    StyledHeader,
    StyledInput,
    UpperBlock
} from "components/Header/Header.styles";
import {RouteEnum} from "config/routes";
import {useNavigate} from "react-router-dom";
import {Catalog} from "components/Header/components/Catalog";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [showCatalog, setShowCatalog] = React.useState(false);

    return (
        <StyledHeader>
            <UpperBlock>
                <Logo onClick={() => navigate(RouteEnum.main)}/>
                <NavigationWrapper>
                    {/*todo: доделать выпадающий каталог и переходы по страницам*/}
                    <CatalogLinkWrapper onMouseEnter={() => setShowCatalog(true)}
                                        onMouseLeave={() => setShowCatalog(false)}>
                        <BelowNavigationItem to={RouteEnum.catalog}>
                            Каталог</BelowNavigationItem>
                        <CatalogWrapper show={showCatalog}>
                            <Catalog/>
                        </CatalogWrapper>
                    </CatalogLinkWrapper>

                    <BelowNavigationItem to={RouteEnum.payAndDelivery}>Оплата и Доствака</BelowNavigationItem>
                    <BelowNavigationItem to={RouteEnum.about}> О нас</BelowNavigationItem>
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
