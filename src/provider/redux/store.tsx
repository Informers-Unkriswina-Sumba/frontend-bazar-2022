import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  IKeranjangState,
  keranjangReducer,
} from './Keranjang/KeranjangReducer';

export interface ICombinedState {
  keranjang: IKeranjangState;
}

const appReducer = combineReducers({
  keranjang: keranjangReducer,
});

const middleware = [thunk];

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
