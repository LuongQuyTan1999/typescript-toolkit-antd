import { AxiosResponse } from 'axios';
import { postData } from 'utils/fetch-api';
import { LoginInterfaceComponent } from 'data/types'

const API_URL = process.env.REACT_APP_API_URL

const login = (userLoginInfor: LoginInterfaceComponent): Promise<AxiosResponse> => {
  return postData(`${API_URL}/login`, userLoginInfor);
};


const authService = {
  login,
};

export default authService;