import * as React from 'react';
import {Footer} from "components/footer";
import {Header} from "components/Header";
import {Carousel} from "pages/MainPage/components/Carousel";
import News from "./components/News/News";
import {WorkShop} from "pages/MainPage/components/WorkShop";

const MainPage: React.FC = () => {
  return (
    <>
        <Header/>
        <Carousel/>
        <News/>
        <WorkShop/>
        <Footer/>
    </>
  );
};

export default React.memo(MainPage);
