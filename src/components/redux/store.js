import { createStore } from 'redux';
import produce from 'immer';
const State = {
// objects
}
const reducer = produce(
    (state, action) => {
        switch (action.type) {
            case 'TEST-FUNCTION':
                {

                    break;
                }
        }
    }, State)
const store = createStore(
    reducer);
window.store = store;
export default store;