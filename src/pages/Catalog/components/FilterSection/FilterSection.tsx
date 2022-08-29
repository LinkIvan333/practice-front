import * as React from 'react';
import {
  CategoryPath,
  CategoryTagsWrapper, Cross,
  FilterItemWrapper,
  FilterWrapper,
  GroupFilterWrapper,
  MainFilterWrapper,
  PriceDropDown,
  ViewButtonGrid,
  ViewButtonLines,
  ViewButtonList,
  ViewButtonsWrapper,
} from 'pages/Catalog/components/FilterSection/FilterSection.styles';
import { Tag } from 'pages/Catalog/components/Tag';
import { SortFilter } from 'components/Filters/SortFilter';
import { DropDownComponent } from 'components/DropDownComponent';
import { Select } from 'components/Select';
import { Slider } from 'components/Slider';
import Button from '../../../../components/Button/Button';
import {Multiselect} from "multiselect-react-dropdown";

const options = [
  { value: 'popularity', label: 'По популярности' },
  { value: 'alphabet', label: 'По алфавиту' },
  { value: 'price', label: 'По цене' },
];

const options1 = [
  { value: '1', label: 'Производитель 1' },
  { value: '2', label: 'Производитель 2' },
  { value: '3', label: 'Производитель 3' },
];

const options2 = [
  { value: '1', label: '33/10' },
  { value: '2', label: '25/17' },
  { value: '3', label: '1/44' },
];

const FilterSection: React.FC = () => {
  const [showPriceFilter, setShowPriceFilter] = React.useState(false);

  const [showNew, setShowNew] = React.useState(false);
  const [showPrice, setShowPrice] = React.useState(false);
  const [showHave, setShowHave] = React.useState(false);
  const [priceOrder, setPriceOrder] = React.useState(false);

  return (
    <FilterWrapper>
      <CategoryPath>Каталог - Категория - подКатегория</CategoryPath>
      <CategoryTagsWrapper>
        <Tag count={100}>Первая мировая</Tag>
        <Tag count={100}>Вторая мировая</Tag>
        <Tag count={100}>XX век</Tag>
        <Tag count={100}>Новейшие технологии</Tag>
      </CategoryTagsWrapper>
      <GroupFilterWrapper>

        <Button
            onClick={() => setShowPrice( true)}
            onCrossClick={() => setShowPrice( false)}
            isActive={showPrice}
        >
          Цена
        </Button>

        <DropDownComponent label="Производитель">
          {/*<Select options={options1} />*/}
          <Multiselect
              isObject={false}
              onKeyPressFn={function noRefCheck(){}}
              onRemove={function noRefCheck(){}}
              onSearch={function noRefCheck(){}}
              onSelect={function noRefCheck(){}}
              placeholder="Производитель"
              options={[
                'Option 1',
                'Option 2',
                'Option 3',
                'Option 4',
                'Option 5'
              ]}
              hideSelectedList
              showCheckbox
              style={{
                chips: {
                  background: 'red'
                },
                multiselectContainer: {
                  color: 'black',
                },
                searchBox: {
                  border: 'none',
                  'border-radius': '0px',
                  'border-bottom': '1px solid white',

                }
              }}
          />
        </DropDownComponent>

        <DropDownComponent label="Маштаб">
          <Select options={options2} />
        </DropDownComponent>

        <Button
          onClick={() => setShowHave( true)}
          onCrossClick={() => setShowHave( false)}
          isActive={showHave}
        >
          Наличие
        </Button>

        <Button
          onClick={() => setShowNew( true)}
          onCrossClick={() => setShowNew( false)}
          isActive={showNew}
        >
          Новинки
        </Button>
      </GroupFilterWrapper>
    </FilterWrapper>
  );
};

export default FilterSection;
