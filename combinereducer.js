const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers

// create the action

const BUY_MILK = 'BUY_MILK'
const BUY_BREAD = 'BUY_BREAD'

function buyMilk (){

    return{
        type : BUY_MILK,
        info : 'This Is An Milk Reducer'
    }
}

function buyBread (){

    return{
        type : BUY_BREAD,
        info : 'This Is An Bread Reducer'
    }
}

// create the reducer

const initaialState = {
    noOfMilk : 40 ,
    noOfBread : 25
}

const milkReducer = (state = initaialState , action)=>{

    switch(action.type){

        case BUY_MILK : return {
            ...state,
            noOfMilk : state.noOfMilk - 2
        }

       default : return state
    }
}

const breadReducer = (state = initaialState , action)=>{

    switch(action.type){

        case BUY_BREAD : return {
            ...state,
            noOfBread : state.noOfBread - 2
        }

       default : return state
    }
}

// create root reducer

const rootReducer = combineReducers({

    milk : milkReducer,
    bread : breadReducer
})

// create the store

const store = createStore(rootReducer);
console.log('initial state' , store.getState());

const unSubscribe =store.subscribe(()=>console.log('Updated State' , store.getState()));

store.dispatch(buyMilk());
store.dispatch(buyBread());
store.dispatch(buyMilk());
store.dispatch(buyBread());
store.dispatch(buyMilk());

unSubscribe();