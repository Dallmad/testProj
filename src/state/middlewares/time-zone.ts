import {timeZonesAPI} from '../../api/timeZones-api'
import {getTimeZones} from '../actions/time-zone'
import {TypedDispatch} from '../store'

export const getTimeZonesTC = () => async (dispatch: TypedDispatch) => {
    try {
        let response = await timeZonesAPI.getTimeZones()
        dispatch(getTimeZones(response.data as any))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error', error)
        }
    }
}