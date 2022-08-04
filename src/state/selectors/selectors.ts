import {useSelector} from 'react-redux'
import {AppRootStateType} from '../store'

export const timeZones = useSelector<AppRootStateType, string[]>(state => state.timeZone.timeZones)
export const date = useSelector<AppRootStateType, string>(state => state.notes.date)
export const isLoading = useSelector<AppRootStateType, boolean>(state => state.notes.isLoading)