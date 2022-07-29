import * as React from "react";
import {Header} from "components/Header";
import {Footer} from "components/footer";
import {CatalogGrid, CatalogWrapper} from "pages/Catalog/Catalog.styles";
import Item from "./components/Item/Item";
import {Filter} from "pages/Catalog/components/FilterSection";
import {ModalCard} from "components/ModalCard";
import {useRootStore} from "store/globals/hooks";
import {observer} from "mobx-react";
import { ThreeDots } from  'react-loader-spinner'
import {Loader} from "components/Loader";

const Catalog: React.FC = () => {
    const [showCard, setShowCard] = React.useState(false);

    const rootStore = useRootStore();

    const handleClick = React.useCallback((id: number)=>{
        console.log('id',id)
        rootStore.setModel(id);
        setShowCard(true);
        console.log(rootStore.currentModal)

    }, [rootStore.currentModal])

    const handleClose = React.useCallback(()=>{
        setShowCard(false);
    }, [])

    React.useEffect(()=>{
        rootStore.getPictures();
    }, [])

    return (
        <>
            <Header/>
            <Filter/>
            <CatalogWrapper>
                {
                    rootStore.isLoading ? <Loader />: (
                        <CatalogGrid>
                            {rootStore.models.map((item)=>(
                                <Item name={item.description} articule={item.article} price={item.price} onClick={()=>handleClick(item.modelID)}/>
                            ))}
                        </CatalogGrid>
                    )
                }
            </CatalogWrapper>
            <Footer/>
            <ModalCard
                scale={rootStore.currentModal?.scale}
                articule={rootStore.currentModal?.article}
                show={showCard}
                title={rootStore.currentModal?.description}
                onClose={handleClose}
                weight={rootStore.currentModal?.weight}
                dimensions={rootStore.currentModal?.dimensions}
                price={rootStore.currentModal?.price}
                sell={rootStore.currentModal?.sell}
            />
        </>
    );
};

export default observer(Catalog);
