import { types } from '../types/types';

//estructura como solicita el datos si esta loging

//const state ={
//    name: 'erika',
//    logged: true
//}

export const authReducer = (state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...action.payload, //retorna acctio. payload
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }
    
        default:
            return state;
    }
}
