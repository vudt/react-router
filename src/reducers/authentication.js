import * as types from '../constants/ActionType';

let defaultState = localStorage.getItem('authentication');
if (defaultState) {
    defaultState = JSON.parse(defaultState);
} else {
    defaultState = { email: null, isLogged: false }
}
console.log(defaultState);
export default (state = defaultState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            let { email, password } = action.payload;
            if (email === 'dangtuanvu1990@gmail.com' && password === '123456') {
                state.email = email;
                state.isLogged = true;
                localStorage.setItem('authentication', JSON.stringify({ email: email, isLogged: true }))
            } else {
                alert("Email or Password is not valid! Please try by EMAIL: vudang@gmail.com and PASSWORD: 123456");
            }
            return { ...state };
        case types.USER_LOGOUT:
            localStorage.removeItem('authentication');
            console.log({ ...state, email: null, isLogged: false });
            return { ...state, email: null, isLogged: false };
        default:
            return state;
    }
}