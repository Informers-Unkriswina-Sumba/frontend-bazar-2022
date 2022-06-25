import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  IKeranjangState,
  keranjangReducer,
} from './Keranjang/KeranjangReducer';
import { pelapakReducer, IPelapakState } from './Pelapak/PelapakReducer';

export interface ICombinedState {
  keranjang: IKeranjangState;
  pelapak: IPelapakState;
}

const appReducer = combineReducers({
  keranjang: keranjangReducer,
  pelapak: pelapakReducer,
});

const middleware = [thunk];

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
