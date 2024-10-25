// import { createStore } from 'redux';
// import userReducer from './userReducer.jsx'; // Path to your reducer

// const Store = createStore(userReducer); // Create Redux store with your reducer

// export default Store;

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import userReducer from './userReducer.jsx'; // Path to your reducer

// Persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted store
  storage, // Storage engine (localStorage in this case)
  whitelist: ['menuData'], // Only persist menuData
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create Redux store with the persisted reducer
const Store = createStore(persistedReducer);

// Create a persistor
const persistor = persistStore(Store);

export { Store, persistor };
