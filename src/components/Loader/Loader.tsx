import {ThreeDots} from "react-loader-spinner";
import * as React from "react";
import {LoaderContainer} from "components/Loader/Loader.styles";

const Loader:React.FC = ()=> {
    return (
        <LoaderContainer>
            <ThreeDots color="red" height={80} width={80} />
        </LoaderContainer>

    )
}

export default React.memo(Loader);
