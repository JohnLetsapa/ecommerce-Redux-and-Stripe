import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; //--> 1
import storage from 'redux-persist/lib/storage'; //--> 2: by default this will use localStorage

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
  //--> 1
  key: 'root', // key is part we want to start with. choosing root means want to persist the whole thing -  the whole store.
  storage, // --> 2 : (shorthand -> cast variable as as the key name)
  blacklist: ['user'], // this represents reducers we dont want to persist. since user comes from Auth(Google), and is persisted by default, we dont want it persisted in local storage as it may create a clash
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
); // only run logger during development...the filter ensures that we pass false as a Middleware either, while in production

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composedEnhancers = composeE(applyMiddleware(...middleWares)); // default before applying composeEnhancer which enables Redux_Dev_tools
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(rootReducer, undefined, composedEnhancers); this is the initial set up before using the Persist library
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store); // this creates the persistor Object... --> need to import PersistGate in index
