//console.log('ok')
const redux = require ('redux');
const { legacy_createStore } = require ('redux');

console.log('createstore--->',legacy_createStore)


//1. Action
    /*
        Action are js object which must contain "type" property many payload
        {
            type:"",
            payload:""
        }
    */

//2. ActionCreator
        /*
            ActionCreator are function which returns actions
        */

// Let's define a acation creators

/*let login = ()=>{
    return{
        type:"LOGIN",
        payload:{
            usename:"suryabhan",
            password:"123"
        }
    }
}

let logout = ()=>{
    return{
        type:"LOGOUT"
        
    }
}*/

//3. ReducerFunction

/*
    Accept
    1.Oldstate
    2.Action
    Return new state
*/

 const ADDBYVALUE1 = "ADDBYVALUE1";
 const SUBTRACTBYVALUE1 = " SUBTRACTBYVALUE1"



let AddvalueBy1 = ()=>{
    return{
        type:"ADDBYVALUE1",
        payload:{
            value:1
            
        }
    }
}

let SubtractvalueBy1 = ()=>{
    return{
        type:"SUBTRACTBYVALUE1",
        payload:{
            value:1
            
        }
    }
}

let oldState={
        value:0
}

//Let's define a ReducerFunction    rootReducer
const rootReducer = (state=oldState,action)=>{

    let newState = state;
    switch(action.type){
        case "ADDBYVALUE1":
            return {
                ...newState,
                value: newState.value + action.payload.value
            }
            break;
        case "SUBTRACTBYVALUE1":
            return {
                ...newState,
                    value: newState.value - action.payload.value
            }
        
        default:
    }

   return newState
}



//4. Store Global Object

// Lets create the store object

let storeObject = legacy_createStore(rootReducer);

console.log('storeobject----->',storeObject)

console.log('currentState before dispatch---->',storeObject.getState());

console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));
console.log('currentState---->',storeObject.dispatch(AddvalueBy1()));


console.log('currentState---->',storeObject.dispatch(SubtractvalueBy1()));
console.log('currentState---->',storeObject.dispatch(SubtractvalueBy1()));


console.log('currentState after dispatch---->',storeObject.getState());