import * as React from "react";

import {
    CatalogWrapper,
} from "components/Header/components/Catalog/Catalog.styles";
import Category from "../Category/Category";
import {CATEGORIES} from "components/Header/components/Catalog/config";

const Catalog: React.FC = () => {

    return (
        <CatalogWrapper>{
            CATEGORIES.map((category)=>(
                <Category title={category.title} items={category.items}/>
            ))
        }

        </CatalogWrapper>
    )
}

export default Catalog;
