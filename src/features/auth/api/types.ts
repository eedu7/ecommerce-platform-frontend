/** Data sent in the Register User API request */
export type RegisterUserAPIRequestData = {
    username: string;
    email: string;
    password: string;
};

/** Data sent in the Login User API request */
export type LoginUserAPIRequestData = {
    email: string;
    password: string;
};

/** Data received from the Register User API response */
export type RegisterUserAPIResponseData = {
    message: string;
};

/** Data received from the Login User API response */
export type LoginUserAPIResponseData = {
    access_token: string;
    refresh_token: string;
};