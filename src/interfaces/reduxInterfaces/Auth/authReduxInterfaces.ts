export type getEmailType = {
    email: string
    error: string | undefined
}

export type getPasswordType = {
    password: string,
    error: string | undefined
}

export type getUsernameType = {
    username: string
}

export type formDataType = {
    email: string
    password: string
    username: string
    error: string | undefined
}

export type getFormDataState = { getFormData: formDataType }