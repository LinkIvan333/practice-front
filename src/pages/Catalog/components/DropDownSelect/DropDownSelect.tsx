import * as React from "react";
import {Control, DropDownSelectWrapper, Menu} from './DropDownSelect.styles';
import {Item} from "pages/Catalog/components/DropDownSelect/types";
type DropDownSelectProps = {
    initialValue: number;
    items: Item[];
}

const DropDownSelect: React.FC<DropDownSelectProps> = ({label, children}: DropDownSelectProps) => {
    const [currentValue, setOpen] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false);

    const close = React.useCallback(() => {
        setOpen(false);
    }, []);

    const handleToggle = React.useCallback(() => {
        console.log(isOpen)
        setOpen((prevState => !prevState));
    }, []);


    return(
        <DropDownSelectWrapper onClick={handleToggle} >
            <Control type='button'>{label}</Control>
            {
                isOpen && (
                    <Menu>
                        {children}
                    </Menu>
                )
            }
        </DropDownSelectWrapper>

        )


}

export default DropDownSelect;
