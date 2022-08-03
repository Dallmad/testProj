import {AxiosResponse} from 'axios'
import {timeZones} from './instance';
import {TimeZonesType} from '../state/time-zone-reducer';

export const timeZonesAPI = {
    getTimeZones() {
        return timeZones.get<AxiosResponse<TimeZonesType>>('')
    },
    getExactTime(timeZone:string) {
        return timeZones.get<string,AxiosResponse<DateType>>(`${timeZone}`)
    }
}

export type DateType = {
    datetime: DateConstructor
}
