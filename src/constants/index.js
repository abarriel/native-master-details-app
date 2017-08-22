import md5 from 'md5';
import config from '../../config';

export const baseURL = config.baseURL;
export const charactersURL = config.charactersURL;
export const apiPublic = config.apiPublic;
export const getHashMd5 = (time) => md5(`${time}${config.apiPrivate}${config.apiPublic}`);
