// for practice
// axios client

import axios from 'axios';

const baseUrl = import.meta.env.VITE_SERVER_URI;

export const contactsClient = axios.create({ baseUrl: baseUrl });
