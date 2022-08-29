import * as React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import {InfiniteSectionWrapper} from "./InfiniteScrollWrapper.styles";
import {useRootStore} from "store/globals/hooks";
import Item from "../Item/Item";
import {observer} from "mobx-react";

type InfiniteScrollWrapperProps = {
    onClick: (id: number)=>void;
}

const InfiniteScrollWrapper: React.FC<InfiniteScrollWrapperProps> = ({onClick}:InfiniteScrollWrapperProps)=>{

    const rootStore = useRootStore();

    const onEndReached = React.useCallback(() => {
        if (!rootStore.isLoading) {
            rootStore.getModals(true);
        }
    }, [rootStore.isLoading]);

    return (
      <InfiniteSectionWrapper>
        <InfiniteScroll
          dataLength={rootStore.modelsList.length}
          next={onEndReached}
          hasMore={rootStore.hasMore}
          loader={null}
        >
          {rootStore.modelsList.map((model, index) => (
            <Item
              key={index}
              price={model.price}
              name={model.description}
              articule={model.article}
              // onClick={() => handleClick(rootStore.modelsList[index].modelID)}
              onClick={() => {
                  console.log(model);
                onClick(model.modelID);
              }}
            />
          ))}
        </InfiniteScroll>
      </InfiniteSectionWrapper>
    );
}

export default observer(InfiniteScrollWrapper);
