// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/rootReducer";
// const store = configureStore({ reducer: rootReducer });

// const rootReducer = {
//   photos: photoReducer,
//   user: userReducer,
// };

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { createStore } from 'redux';

const initialState = {
    auth: { isLogin: false }
}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, auth: { isLogin: true } };
        case 'LOGOUT':
            return { ...state, auth: { isLogin: false } }
        default:
            return state;
    }
}
);

export default store;
