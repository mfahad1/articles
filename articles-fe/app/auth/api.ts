import * as jwt from 'jsonwebtoken';

import localStorageService from '../services/localStorageService';
import httpRequest from '../services/config/HttpRequest';

export type User = {
  email?: string;
  name?: string;
  password: string;
}

export async function login(data: User): Promise<any> {
  const { accessToken } = await httpRequest.request<{ accessToken: string }>({
    url: '/auth/login',
    method: 'post',
    data,
  });

  const decoded = jwt.decode(accessToken, { json: true });

  localStorageService.set('token', accessToken);

  return {
    ...decoded,
  }
}

export async function register(data: User): Promise<any> {
  return httpRequest.request({
    url: '/auth/register',
    method: 'post',
    data,
  });
}