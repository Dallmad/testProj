import {AxiosResponse} from 'axios'
import {getTZ} from './instance';
import {TZType} from '../state/time-zone-reducer';

export const getTimeZoneAPI = {
    getTZ() {
        return getTZ.get<AxiosResponse<ResponseUserType>>('')
    }
}

//types

export type ResponseUserType = {
    tz:TZType
}