//console.log("Hello Redux");

const redux = require('redux');
const createStore = redux.createStore


// Creating an Action

const BUY_SWEET = 'BUY_SWEET';

function buySweet (){

    return{
        type : BUY_SWEET,
        info : 'First Reducer Application'
    }
}

// Creating an reducer

const intialState = {
    noOfSweets : 20
}

const reducer = (state = intialState , action) =>{
    switch(action.type){
        case BUY_SWEET : return{
            noOfSweets : state.noOfSweets - 1
        }
    }
}

// Create Store for State Management

const store = createStore(reducer);
console.log('initial state' , store.getState());

const unSubscribe =store.subscribe(()=>console.log('Updated State' , store.getState()));

store.dispatch(buySweet());
store.dispatch(buySweet());
store.dispatch(buySweet());

unSubscribe();