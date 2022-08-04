import {timeZonesAPI} from '../api/timeZones-api';
import {TypedDispatch} from './store';

const GET_TZ = 'GET_TZ'

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

// actions
export const getTimeZones = (timeZones: string[]) => ({type: GET_TZ, timeZones} as const)

// thunks
export const getTimeZonesTC = () => async (dispatch: TypedDispatch) => {
    try {
        //dispatch(loading(true))
        let response = await timeZonesAPI.getTimeZones()
            dispatch(getTimeZones(response.data as any))
    } catch (error) {
        if (error instanceof Error) {
            console.log('error',error)
            //handleServerNetworkError(error.message, dispatch)
        }
    } finally {
        //dispatch(loading(false))
    }
}

// types
type InitialStateType = typeof initialState

export type TZActionsType =
    ReturnType<typeof getTimeZones>

export type TimeZonesType = {
   timeZones: string[]
}