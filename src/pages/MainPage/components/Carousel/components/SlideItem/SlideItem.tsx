import * as React from "react";
import {
    InfoWrapper,
    SlideItemImage,
    SlideItemText,
    SlideItemTitle,
    SlideWrapper
} from "pages/MainPage/components/Carousel/components/SlideItem/SlideItem.styles";

type SlideItem = {
    title: string;
    children: React.ReactNode;
    image: string;
}

const SlideItem: React.FC<SlideItem> = ({title , image , children}:SlideItem)=> {
    return(
       <SlideWrapper src={image}>
           <InfoWrapper>
               <SlideItemTitle>
                   {title}
               </SlideItemTitle>
               <SlideItemText>
                   {children}
               </SlideItemText>
           </InfoWrapper>
       </SlideWrapper>
    )
}

export default SlideItem;
