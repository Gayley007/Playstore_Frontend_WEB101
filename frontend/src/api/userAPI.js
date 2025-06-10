import axios from 'axios';
import { fetchUser } from './api/userApi';
fetchUser().then(res => console.log(res));
const api = axios.create({ baseURL: '/api' });
export const fetchUser = () => api.get('/user');
export const login = (data) => api.post('/login', data);

