import{combineReducers, configureStore} from '@reduxjs/toolkit';
import  userReducer  from './user/userSlice'
import { persistReducer , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const  rootReducer=combineReducers({user:userReducer})

const presistConfig={
    key:'root',
    Storage,
    version:1,
}
const persistedReducer= persistedReducer(presistConfig,rootReducer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    })
})

export const persistor = persistStore(store);