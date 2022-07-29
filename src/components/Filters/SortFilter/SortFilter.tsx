import Select from "react-select";
import * as React from "react";

type SortFilter = {
    options: {
        value: string,
        label: string
    }[]
}

export const colorStyles = {
    control: styles => ({
        ...styles,
        width: '20rem',
        backgroundColor: 'none',
        border: 'none',

        boxShadow: 'none',
        ':focus': {
            outline: 'none',
            border: 'none',

            boxShadow: 'none',
        },
        ':hover': {
            outline: 'none',
            border: 'none',

            boxShadow: 'none',
        },

    }),
    dropdownIndicator: () => {
    },
    indicatorSeparator: () => {
    },
    indicatorsContainer: (styles) => {
        return ({
            ...styles,
            display: 'none'
        })
    },
    menu: (styles)=>{
        return({
            ...styles,
            backgroundColor: 'black'
        })
    },
    option: (styles, {data, isDisabled, isFocused, isSelected}) => {
        return ({
            ...styles,
            backgroundColor: 'none',
            color: isFocused ? 'red' : 'white',
            cursor: isDisabled ? 'not-allowed' : 'default',
        })
    },
    multiValue: (styles) => {
        return {
            ...styles,
            backgroundColor: '#4b9c3c',
        };
    },
    multiValueLabel: (styles) => ({
        ...styles,
        color: 'white',
        fontSize: '16px'
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: 'white',
        ':hover': {
            color: 'white',
        },
    }),
};

const SortFilter: React.FC<SortFilter> = ({options}:SortFilter )=> {
    return  <Select defaultValue={options[0]} options={options} styles={colorStyles} />
}

export default SortFilter;
