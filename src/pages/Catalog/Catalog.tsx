import * as React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { Header } from 'components/Header';
import { Footer } from 'components/footer';
import { CatalogWrapper, ItemWrapper, RowWrapper } from 'pages/Catalog/Catalog.styles';
import Item from './components/Item/Item';
import { Filter } from 'pages/Catalog/components/FilterSection';
import { ModalCard } from 'components/ModalCard';
import { useRootStore } from 'store/globals/hooks';
import { observer } from 'mobx-react';
import { Loader } from 'components/Loader';
import styled from 'styled-components';
import {InfiniteScrollWrapper} from "pages/Catalog/components/InfiniteScrollWrapper";

const Catalog: React.FC = () => {
  const [showCard, setShowCard] = React.useState(false);

  const rootStore = useRootStore();

  const handleClick = React.useCallback(
    (id: number) => {
        console.log(id);
      rootStore.getCurrentModel(id).then((r) => {
        setShowCard(true);
        console.log('setShowCard', rootStore.currentModal);
      });
    },
    [rootStore.currentModal]
  );

  const handleClose = React.useCallback(() => {
    setShowCard(false);
  }, []);

  React.useEffect(() => {
    rootStore.getModals();
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <CatalogWrapper>
        {rootStore.isLoading && <Loader />}
          <InfiniteScrollWrapper onClick={handleClick}/>
      </CatalogWrapper>
      <Footer />
      <ModalCard
        show={showCard}
        onClose={handleClose}
        card={rootStore.currentModal}
      />
    </>
  );
};

export default observer(Catalog);
