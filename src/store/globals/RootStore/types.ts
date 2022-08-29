export type ApiResponse<T> = {
    data?: T;
    status: number;
    statusText: string;
    error?: unknown;
    errorData?: unknown;
};

export type ApiModelTypeArray = {
    modelID: number;
    name: string;
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

export type ModelType = {
    modelID: number;
    name: string;
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
};
