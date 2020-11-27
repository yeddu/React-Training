import { ADD_FORM_DATA } from './crudTypes'

export const addFormData = (data) => {
  return {
    type: ADD_FORM_DATA,
    data: data
  }
}