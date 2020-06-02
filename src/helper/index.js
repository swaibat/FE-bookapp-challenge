import jwt from 'jsonwebtoken';

export const tokenData = () => jwt.decode(localStorage.getItem('bookapp_token'));

export const token = localStorage.getItem('bookapp_token');
