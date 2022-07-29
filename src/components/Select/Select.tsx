import * as React from "react";
import {SelectItem, SelectItemInner, SelectWrapper, DropDownItemName} from "components/Select/Select.styles";

type SelectProps = {
    options: {
        label: string;
        value: string;
    }[]
}

const Select: React.FC<SelectProps> = ({options}:SelectProps)=> {

    const [checkedState, setCheckedState] = React.useState(
        new Array(options.length).fill(false)
    );

    const handleOnChange = (position: number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const total = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum.push(options[index].value);
                }
                return sum;
            },
            []
        );

        console.log(total);
    };


    return(
        <SelectWrapper>
            {options.map((item, index)=>(
                <SelectItem key={index}>
                    <SelectItemInner>
                        <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={item.label}
                            value={item.label}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                        />
                        <DropDownItemName>{item.label}</DropDownItemName>
                    </SelectItemInner>
                </SelectItem>
            ))}
        </SelectWrapper>
    )
}

export default Select;
