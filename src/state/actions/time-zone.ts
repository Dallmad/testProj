import {GET_TZ} from '../../constants/time-zone'

export const getTimeZones = (timeZones: string[]) => ({type: GET_TZ, timeZones} as const)