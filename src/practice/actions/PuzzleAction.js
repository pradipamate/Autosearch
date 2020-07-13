
export function initialData() {
 const data = [{name:"pradip",age:"27",gender:"male"},{name:"onkar",age:"26",gender:"male"},{name:"mahavir",age:"27",gender:"male"}];
    return  dispatch =>{
           dispatch({ type:"TEST_RANDOM_DATA", payload:data});
    }
}

export function FetchingRequest(data) {
    return  dispatch =>{
           dispatch({ type:"SOLVE_DATA",payload:data});
    }
}

