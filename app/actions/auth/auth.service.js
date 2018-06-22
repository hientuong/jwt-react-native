import { AsyncStorage } from 'react-native';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import AuthApi from './auth.api';
import { asyncError, gereralError, generalError } from '../error/error.service';
import * as AuthAction from '../auth/auth.action';
import App from '../../../App';
import config from '../../utils/config';

const _saveItem = async (item, selectedValue) => {
  try {
    await AsyncStorage.setItem(item, selectedValue);
  } catch (error) {
    throw error;
  }
};

export const refreshToken = refreshToken => dispatch => {
  return AuthApi.refreshToken(refreshToken)
    .then(response => {
      if (response.success) {
        dispatch(AuthAction.saveAppToken(response.authToken));
        _saveItem('authToken', response.authToken)
          .then(resp => {
            console.log('Refresh finished');
          })
          .catch(error => {
            dispatch(asyncError(error));
          });
      }
    })
    .catch(error => {
      dispatch(generalError(error));
    });
};
