import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const accountInitialState = {
  balance: 100,
  username: 'Jacob',
};

const localeInitialState = {
  lang: 'en',
};

const accountReducer = (state = accountInitialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case 'account/withdraw':
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};

const localeReducer = (state = localeInitialState, action) => {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    account: accountReducer,
    locale: localeReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};

export const changeLang = newLang => {
  return {
    type: 'locale/changeLang',
    payload: newLang,
  };
};
