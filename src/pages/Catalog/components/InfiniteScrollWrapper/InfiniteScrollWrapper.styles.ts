import styled from "styled-components";
import {DEVICE} from "styles/sizes";

export const InfiniteSectionWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;

  .infinite-scroll-component__outerdiv {
    width: 100%;
    overflow-x: hidden;
  }

  .infinite-scroll-component {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 2fr);

   
    
    grid-gap: 16px;
    overflow: hidden;

    @media ${DEVICE.laptop} {
      grid-template-columns: repeat(3, 4fr);
    }

    @media ${DEVICE.mobileM} {
      grid-template-columns: repeat(2, 6fr);
    }
  }
`;
