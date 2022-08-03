import {Dispatch} from 'redux';
import {getTimeZoneAPI} from '../api/getTZ-api';

const GET_TZ = 'GET_TZ'

const initialState = {
    tz:['']
}

export const timeZoneReducer = (state: InitialStateType = initialState, action: TZActionsType): InitialStateType => {
    switch (action.type) {
        case GET_TZ:
            return {...state, tz: action.tz}
        default:
            return state
    }
}
// actions
export const getTZ = (tz: string[]) => ({type: GET_TZ, tz} as const)

// thunks
export const getTZTC = () => async (dispatch: Dispatch) => {
    try {
        //dispatch(loading(true))
        let response = await getTimeZoneAPI.getTZ()
            dispatch(getTZ(response.data as any))
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
    ReturnType<typeof getTZ>

export type TZType = {
   tz: string[]
}