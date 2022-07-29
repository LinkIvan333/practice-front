import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {ENDPOINTS} from "config/endpoints";
import {action, makeObservable, observable} from "mobx";

type ModelType = {
    modelID: number;
    article: string;
    scale: string;
    weight: number;
    dimensions: string;
    price: number;
    description: string;
    sell?: boolean;
    sellPrice?: number;
    sellStart?: string;
    sellEnd?: string;
}

class RootStore {

    models: ModelType[] = [];
    isLoading= false;
    currentModal: ModelType | undefined = undefined;

    constructor() {
        makeObservable(this, {
            models: observable.ref,
            isLoading: observable,
            currentModal: observable.ref,

            getPictures: action,
            setModel: action,
        })
    }

    // pushModels = (response:) => {
    //     response.forEach((item) => {
    //         this.models.push({
    //             modelID: item.
    //         })
    //     })
    // }

    setModel = (id: number)=>{

        this.currentModal = this.models.find((item)=>item.modelID === id)
    }


    getPictures = async () => {
        //TODO: поменять потом ссылку нахуй
        this.isLoading = true;

        const response = await axios.get(ENDPOINTS.models.url)

        // const response = await  fetch('http://localhost:3000/model', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     }
        // })


        this.models = response.data
        console.log( this.models)
        this.isLoading = false;

    }

}

export default RootStore;
