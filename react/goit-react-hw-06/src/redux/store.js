import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux'; // Import combineReducers
import {contactsReducer} from "./contactsSlice.js";
import {filtersReducer} from "./filtersSlice.js";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers into a single rootReducer
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export {store, persistor};