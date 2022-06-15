import { formDataType } from "../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";

export const initialState: formDataType = {
    email: "",
    error: undefined,
    password: "",
    username: ""
}