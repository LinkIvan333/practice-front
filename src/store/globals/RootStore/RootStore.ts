import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { response } from 'express';
import { action, computed, makeObservable, observable } from 'mobx';

import ENDPOINTS from 'config/endpoints';
import {
  ApiModelTypeArray,
  ApiResponse,
  ModelType,
} from 'store/globals/RootStore/types';

class RootStore {
  modelsList: ModelType[] = [];
  isLoading = false;
  currentModal: ModelType | undefined = undefined;
  page = 1;
  hasMore = true;

  endOfList = false;

  constructor() {
    makeObservable(this, {
      modelsList: observable.ref,
      isLoading: observable,
      currentModal: observable.ref,

      getModals: action,
      getCurrentModel: action,
      setModel: action,
      hasMore: observable,

      modelCount: computed,
    });
  }

  get modelCount(): number {
    return this.modelsList.length;
  }

  setModel = (id: number) => {
    this.currentModal = this.modelsList.find((item) => item.modelID === id);
  };

  getModals = async (loadMore = false) => {
    if (this.isLoading || this.endOfList) {
      return;
    }
    //TODO: поменять потом ссылку нахуй
    this.isLoading = true;

    if (loadMore) {
      this.page++;
    }

    const { data }: ApiResponse<ApiModelTypeArray[]> = await axios.get(
      ENDPOINTS.models.url,
      {
        params: {
          perPage: 10,
          page: this.page,
        },
      }
    );

    if (data) {
      if (data.length === 0) {
        this.endOfList = true;
        this.hasMore = false;
        this.isLoading = false;
        return;
      }
      console.log('data', data);
      this.modelsList = [...this.modelsList, ...data];
    }

    console.log('this.modelsList', this.modelsList);

    this.isLoading = false;
  };

  getCurrentModel = async (id: number) => {
    const { data }: ApiResponse<ApiModelTypeArray[]> = await axios.get(
      ENDPOINTS.models.url + `/${id}`
    );

    if (data) {
      this.currentModal = data[0];
    }

    console.log('data', this.currentModal);
  };
}

export default RootStore;
