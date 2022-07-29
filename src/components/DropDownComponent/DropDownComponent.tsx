import React from "react";
import {DropDownContainer, DropDownItem} from "components/DropDownComponent/DropDownComponent.styles";

type DropDownComponentProps = {
    children?: React.ReactNode;
    label: string;
    withoutDrop?: boolean;
    checked?: boolean;
    onClick?: VoidFunction;

}

const DropDownComponent: React.FC<DropDownComponentProps> = ({children,label, onClick ,withoutDrop = false, checked = false}:DropDownComponentProps)=>{

    const [showDropDown, setShowDropDown] = React.useState(false);

    const toggle = React.useCallback(() => {
        setShowDropDown(false);
    }, []);

    React.useEffect(()=>{
        if (showDropDown){
            document.addEventListener('click', toggle);
        }
        return () => {
            document.removeEventListener('click', toggle);
        };
    },[showDropDown])

    return (
        <DropDownContainer
            checked={checked}
            onClick={(e)=>{
            if (onClick) {
                onClick();
            }
            e.stopPropagation();
            setShowDropDown(true)}}>
            {label}
            {!withoutDrop && showDropDown &&
            <DropDownItem>
                {children}
            </DropDownItem>
            }

        </DropDownContainer>
    )
}

export default DropDownComponent;
