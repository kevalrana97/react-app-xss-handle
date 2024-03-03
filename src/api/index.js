import axios from 'axios';
import { errorToast } from 'utils/helper';
import { ERROR_MSG } from 'utils/message';

const BASE_URL = process.env.REACT_APP_API_URL;

const GetApi = (tag) => {
  return axios
    .get(BASE_URL + tag)
    .then((data) => {
      return data;
    })
    .catch(async (error) => {
      if (error.response?.data.code === 500) {
        errorToast(error.response?.data?.message ?? ERROR_MSG);
      }
      return error?.response;
    });
};

const PostApi = (tag, reqBody, isHeader = false) => {
  return axios
    .post(BASE_URL + tag, reqBody, {
      headers: isHeader
        ? {
            'Content-Type': 'application/json',
            accept: 'application/json'
          }
        : {}
    })
    .then((data) => {
      return data;
    })
    .catch(async (error) => {
      if (error.response?.data.code === 500) {
        errorToast(error.response?.data?.message ?? ERROR_MSG);
      }
      return error?.response;
    });
};

const DeleteApi = (tag) => {
  return axios
    .delete(BASE_URL + tag)
    .then((data) => {
      return data;
    })
    .catch(async (error) => {
      if (error.response?.data.code === 500) {
        errorToast(error.response?.data?.message ?? ERROR_MSG);
      }
      return error?.response;
    });
};

const PutApi = (tag, reqBody) => {
  return axios
    .put(BASE_URL + tag, reqBody !== null && reqBody)
    .then((data) => {
      return data;
    })
    .catch(async (error) => {
      if (error.response?.data.code === 500) {
        errorToast(error.response?.data?.message ?? ERROR_MSG);
      }
      return error?.response;
    });
};

export const Api = {
  // User MODULE APIs
  addUser: (reqBody) => PostApi('users', reqBody),
  getUserList: () => GetApi(`users`),
  deleteUser: (id) => DeleteApi(`users/${id}`),
  getUserById: (id) => GetApi(`users/${id}`),
  updateUser: (reqBody, id) => PutApi(`users/${id}`, reqBody)
};
