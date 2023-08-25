// store.js
import { createStore } from 'redux';

const initialState = {
  activeTab: 'photos', // Pestaña activa por defecto
  // Otros datos del estado si es necesario
};

// Define el reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TAB':
      return { ...state, activeTab: action.payload };
    // Otros casos de acción si es necesario
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
