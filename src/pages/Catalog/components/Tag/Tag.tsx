import * as React from "react";

import {CategoryTag, TagCount, TagImage, TagName, TextPart} from "pages/Catalog/components/Tag/Tag.styles";

type TagProps = {
    children: React.ReactNode;
    image?: string;
    count: number;
}

const Tag: React.FC<TagProps> = ({children, image,count}:TagProps)=>{
    return (
        <CategoryTag>
            {/*<TagImage />*/}
            {/*<TextPart>*/}
            {/*    <TagName>*/}
            {/*        {children}*/}
            {/*    </TagName>*/}
            {/*    <TagCount>*/}
            {/*        Кол-во: {count}*/}
            {/*    </TagCount>*/}
            {/*</TextPart>*/}

            {children}
        </CategoryTag>
    )
}

export default Tag;
