import react from 'react';
import reactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducer/index.reducer';
import RouterData from './router/index'
import './styles/index.scss'

const store = createStore(rootReducers);
store.subscribe(()=>{ console.log("store>>>>",store.getState() )});

reactDOM.render(
    <Provider store={store}>
        <RouterData />
    </Provider>, document.getElementById('root'));
