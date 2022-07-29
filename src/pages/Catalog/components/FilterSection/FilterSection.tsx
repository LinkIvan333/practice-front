import * as React from "react";
import {
    CategoryPath,
    CategoryTagsWrapper, FilterItemWrapper,
    FilterWrapper,
    GroupFilterWrapper,
    MainFilterWrapper, PriceDropDown,
    ViewButtonGrid,
    ViewButtonLines,
    ViewButtonList,
    ViewButtonsWrapper
} from "pages/Catalog/components/FilterSection/FilterSection.styles";
import {Tag} from "pages/Catalog/components/Tag";
import {SortFilter} from "components/Filters/SortFilter";
import {DropDownComponent} from "components/DropDownComponent";
import {Select} from "components/Select";
import {Slider} from "components/Slider";

const options = [
    {value: 'popularity', label: 'По популярности'},
    {value: 'alphabet', label: 'По алфавиту'},
    {value: 'price', label: 'По цене'}
]

const options1 = [
    {value: '1', label: 'Производитель 1'},
    {value: '2', label: 'Производитель 2'},
    {value: '3', label: 'Производитель 3'}
]

const options2 = [
    {value: '1', label: '33/10'},
    {value: '2', label: '25/17'},
    {value: '3', label: '1/44'}
]


const FilterSection: React.FC = () => {
    const [showPriceFilter, setShowPriceFilter] = React.useState(false);

    const [showNew, setShowNew] = React.useState(false);
    const [showHave, setShowHave] = React.useState(false);
    const [priceOrder, setPriceOrder] = React.useState(false);

    return (
        <FilterWrapper>
            <CategoryPath>
                Каталог - Категория - подКатегория
            </CategoryPath>
            <CategoryTagsWrapper>
                <Tag count={100}>Первая мировая</Tag>
                <Tag count={100}>Вторая мировая</Tag>
                <Tag count={100}>XX век</Tag>
                <Tag count={100}>Новейшие технологии</Tag>
            </CategoryTagsWrapper>
            <GroupFilterWrapper>
                <DropDownComponent
                    label="Цена"
                    withoutDrop
                    checked={showNew}
                    onClick={() => setShowNew((prevState => !prevState))}
                />

                <DropDownComponent label="Производитель">
                    <Select options={options1}/>
                </DropDownComponent>

                <DropDownComponent label="Маштаб">
                    <Select options={options2}/>
                </DropDownComponent>

                <DropDownComponent
                    label="Наличие"
                    withoutDrop
                    checked={showHave}
                    onClick={() => setShowHave((prevState => !prevState))}
                />
                <DropDownComponent
                    label="Новинки"
                    withoutDrop
                    checked={showNew}
                    onClick={() => setShowNew((prevState => !prevState))}
                />

            </GroupFilterWrapper>
        </FilterWrapper>
    )
}

export default FilterSection;
