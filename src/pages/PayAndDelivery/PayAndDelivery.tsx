import * as React from "react";
import {Header} from "components/Header";
import {Footer} from "components/footer";
import {InformationBlock, UpperBlock} from "pages/PayAndDelivery/PayAndDelivery.styles";
import {Title} from "components/Title";

const PayAndDelivery: React.FC = () => {
    return (
        <>
            <Header/>
            <UpperBlock>
                <Title>
                   Оплата
                </Title>
            </UpperBlock>

            <InformationBlock>
                <Title>
                    Доставка
                </Title>
            </InformationBlock>
            <Footer/>
        </>
    );
};

export default React.memo(PayAndDelivery);
