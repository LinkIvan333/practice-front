import { alpha, styled } from '@mui/material/styles';
import Slider, { SliderProps } from '@mui/material/Slider';

export const StyledSlider = styled(Slider)<SliderProps>(({ theme }) => ({
    // width: 100,
    color: theme.palette.error.main,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.error.main, 0.16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.error.main, 0.16)}`,
        },
    },
}));
