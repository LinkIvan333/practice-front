import * as React from "react";
import {StyledSlider} from "components/Slider/Slider.styles";
import {ResultInput, ResultInputLeft, ResultInputRight, ResultWrapper} from "components/Slider/components.styles";

const Slider: React.FC = ()=>{
    const [value, setValue] = React.useState<number[]>([3000, 10000]);

    function valuetext(value: number) {
        return `${value}руб.`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return    (
        <>
            <ResultWrapper>
                <ResultInputLeft
                    type="text"
                    name="text"
                    id={`bottom-price`}
                    value={value[0]}
                    onChange={(e)=>setValue(prevState => {
                        prevState[0]= Number(e.target.value);
                        return prevState;
                    })}
                />
                <ResultInputRight
                    type="text"
                    name="text"
                    id={`upper-price`}
                    value={value[1]}
                    onChange={(e)=>setValue(prevState => {
                        prevState[1]= Number(e.target.value);
                        return prevState;
                    })}
                />
            </ResultWrapper>
            <StyledSlider
                step={100}
                min={0}
                max={15000}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            >
            </StyledSlider>
        </>

    )
}

export default Slider;
