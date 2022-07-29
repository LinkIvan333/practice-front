import React from "react";
import {
    CatalogCategory,
    CatalogCategoryItem,
    CatalogCategoryItemWrapper,
    CatalogCategoryTitle
} from "./Category.styles";
type CategoryProps = {
    title: string;
    items: string[];
}


const Category: React.FC<CategoryProps> = ({title , items}:CategoryProps)=> {
    const [showCategory, setShowCategory] = React.useState(false);

    return (
        <CatalogCategory>
            <CatalogCategoryTitle show={showCategory} onClick={()=> setShowCategory((prevState => !prevState))}>
                {title}
            </CatalogCategoryTitle>
            <CatalogCategoryItemWrapper show={showCategory}>
                {items.map((item)=>(
                    <CatalogCategoryItem>
                        {item}
                    </CatalogCategoryItem>
                ))}
            </CatalogCategoryItemWrapper>
        </CatalogCategory>
    )
}

export default Category;
