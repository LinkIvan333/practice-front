import * as React from "react";
import {InformationBlock, UpperBlock} from "./About.styles";
import {Header} from "components/Header";
import {Title} from "components/Title";
import {Footer} from "components/footer";

const About: React.FC = () => {
    return (
        <>
            <Header/>
            <UpperBlock>
                <Title>
                    О нас
                </Title>
            </UpperBlock>

            <InformationBlock>
                <Title>
                    Контакты
                </Title>
            </InformationBlock>
            <Footer/>
        </>
    );
};

export default React.memo(About);
