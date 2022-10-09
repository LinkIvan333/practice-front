import * as React from 'react';

import {
  InfoWrapper,
  SlideItemImage,
  SlideItemText,
  SlideItemTitle,
  SlideWrapper,
} from './SlideItem.styles';

type SlideItemProps = {
  title: string;
  children: React.ReactNode;
  image: string;
};

const SlideItem: React.FC<SlideItemProps> = ({
  title,
  image,
  children,
}: SlideItemProps) => {
  return (
    <SlideWrapper src={image}>
      <InfoWrapper>
        <SlideItemTitle>{title}</SlideItemTitle>
        <SlideItemText>{children}</SlideItemText>
      </InfoWrapper>
    </SlideWrapper>
  );
};

export default SlideItem;
