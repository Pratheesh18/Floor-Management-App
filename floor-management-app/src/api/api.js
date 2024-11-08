import axios from 'axios';


const API = axios.create({baseURL:'http://localhost:5000/api'});

export const fetchTables = () => API.get('/tables');
export const updateTable = (id,data) => API.put(`/tables/${id}`,data);
export const toggleTableStatus = (id) => API.put(`/tables/${id}/toggle-status`);
export const fetchRooms = () => API.get('/rooms');
export const createRoom = (data) => API.post('/rooms',data)