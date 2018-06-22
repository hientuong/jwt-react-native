import config from '../../utils/config';
import { handleTokenErrors } from '../error/error.service';
import axios from 'axios';

class AuthApi {
    static login(email, password) {
        return fetch(`${config.url}/api/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: config.configHeaders
        })
            .then(response => response.json())
            .then(handleTokenErrors)
            .catch(error => {
                throw error;
            });
    }
    static register(first, last, email, password) {
        return fetch(`${config.url}/api/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({ first, last, email, password }),
            headers: config.configHeaders
        })
            .then(response => {
                console.log('response: ', response);
                response.json();
            })
            .then(handleTokenErrors)
            .catch(error => {
                console.log('error: ', error);
                throw error;
            });
    }
    static refreshToken(refreshToken) {
        return fetch(`${config.url}/api/auth/refreshToken`, {
            method: 'POST',
            body: JSON.stringify({ refreshToken: refreshToken }),
            headers: config.configHeaders
        })
            .then(response => response.json())
            .then(handleTokenErrors)
            .catch(error => {
                throw error;
            });
    }
    static checkAuthTest(token) {
        return fetch(`${config.url}/api/auth/getAll`, {
            method: 'POST',
            headers: {
                ...config.configHeaders,
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(handleTokenErrors)
            .catch(error => {
                throw error;
            });
    }
}
export default AuthApi;
