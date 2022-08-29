import React from "react";
import {Articule, BottomWrapper, ItemImage, ItemWrapper, Name, Price} from "pages/Catalog/components/Item/Item.styles";

type ItemProps = {
    price: number;
    name: string;
    articule: string;
    image?: string;
    onClick: ()=>void;
}
const Item: React.FC<ItemProps> = ({price, name, articule, image, onClick}: ItemProps) => {
    return (
        <ItemWrapper onClick={onClick}>
            <ItemImage/>
            <Name>
                {name}
            </Name>
            <BottomWrapper>
                <Articule>
                    Арт: {articule}
                </Articule>
                <Price>
                    {price}₽
                </Price>
            </BottomWrapper>
        </ItemWrapper>
    )
}

export default Item;
