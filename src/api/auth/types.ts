export type RegisterUserAPIRequestData = {
    username: string; email: string; password: string;
}

export type LoginUserAPIRequestData = {
    email: string; password: string;
}

export type RegisterUserAPIResponseData = {
    message: string;
}

export type LoginUserAPIResponseData = {
    access_token: string; refresh_token: string;
}



