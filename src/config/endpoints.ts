export type Method =
    | 'get' | 'GET'
    | 'delete' | 'DELETE'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
    | 'purge' | 'PURGE'
    | 'link' | 'LINK'
    | 'unlink' | 'UNLINK';

export type EndpointType = {
    url: string;
    method?: Method;
};

const getApiUrl = () => 'http://localhost:3000/';

export const ENDPOINTS:Record<string, EndpointType> = {
    models : {
        url: `${getApiUrl()}model`,
        method: 'GET',
    }
}
