import * as React from "react";
import {
    Address,
    ColumnInfoItem,
    Contacts,
    Email,
    InfoBLock,
    Logo,
    ColumnInfoTitle,
    Phone,
    Socials,
    StyledFooter,
    TgIcon,
    HalfSide,
    RightSide,
    YouTubeIcon,
    WhatsAppIcon
} from "components/footer/Footer.styles";


const Footer: React.FC = () => {
    return (
        <StyledFooter>
                <HalfSide>
                    <Logo/>
                    <Contacts>
                        <Address>улица Пушкина дом Колотушкина</Address>
                        <Phone>+7 777 777 77 77</Phone>
                        <Email>123456789@mail.ru</Email>
                    </Contacts>
                </HalfSide>
            <RightSide>
                <InfoBLock>
                    <ColumnInfoTitle>
                        Каталог
                    </ColumnInfoTitle>
                    <ColumnInfoTitle>
                        Мастерская
                    </ColumnInfoTitle>
                    <ColumnInfoTitle>
                        О нас
                    </ColumnInfoTitle>
                    <ColumnInfoTitle>
                        Оплата и доставка
                    </ColumnInfoTitle>
                </InfoBLock>
                <Socials>
                    <TgIcon/>
                    <WhatsAppIcon/>
                    <YouTubeIcon/>
                </Socials>
            </RightSide>


        </StyledFooter>
    )
}

export default Footer;
