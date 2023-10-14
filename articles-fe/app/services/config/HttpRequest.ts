import { API_URL } from './constants';
import localStorageService from '../localStorageService';

import axiosRequest from './axios';

const baseURL: string = API_URL;

const getHeader = <T>(header: T): object => {
  const defaultHeaders: Header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: '',
  };
  const token = localStorageService.get('token') as string;

  if (token) defaultHeaders['Authorization'] = token;
  if (header) return Object.assign({}, defaultHeaders, header);

  return defaultHeaders;
};

const request = <T>({
  method,
  url,
  params,
  data,
  header,
}: RequestPayload): Promise<T> => {
  return axiosRequest({
    baseURL: baseURL,
    method: method,
    url: url,
    params: params,
    data: data,
    headers: getHeader(header),
  });
};

const httpRequest = {
  request,
};

export default httpRequest;

interface RequestPayload {
  url: string;
  method: 'post' | 'get' | 'put' | 'delete';
  params?: object;
  header?: object;
  data?: object;
}

export interface Header {
  'Content-Type': string;
  'Access-Control-Allow-Origin': string;
  Authorization: string;
}

export const fetcher = (url: string) => httpRequest.request({
  url,
  method: 'get',
})
