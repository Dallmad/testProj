import {GET_TZ} from '../../constants/time-zone'
import {getTimeZones} from '../actions/time-zone'

const initialState = {
    timeZones:['']
}

export const timeZoneReducer = (state: InitialStateType = initialState, action: TZActionsType): InitialStateType => {
    switch (action.type) {
        case GET_TZ:
            return {...state, timeZones: action.timeZones}
        default:
            return state
    }
}

// types
type InitialStateType = typeof initialState
export type TZActionsType = ReturnType<typeof getTimeZones>
export type TimeZonesType = {
   timeZones: string[]
}