import { createAction } from '../libs/utils'

export const SET_INPUT_FIELD = 'SET_INPUT_FIELD'

export const setInputField = createAction(SET_INPUT_FIELD, 'text')
