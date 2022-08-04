import {AxiosResponse} from 'axios'
import {timeZones} from './instance'
import {TimeZonesType} from '../state/reducers/time-zone'
import {DateType} from '../common/types'

export const timeZonesAPI = {
    getTimeZones() {
        return timeZones.get<AxiosResponse<TimeZonesType>>('')
    },
    getExactTime(timeZone:string) {
        return timeZones.get<string,AxiosResponse<DateType>>(`${timeZone}`)
    }
}
