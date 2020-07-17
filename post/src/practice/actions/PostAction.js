
// export function initialData() {
//  const data = axios.gethttps://jsonplaceholder.typicode.com/posts;
//     return  dispatch =>{
//            dispatch({ type:"TEST_RANDOM_DATA", payload:data});
//     }
// }

export function initialData() {
    return dispatch => {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then((result) => {
                dispatch(datafetchsuccessfully(result))
            })
            .catch((err) => {
                console.error('err', err);
            });
     }
 }

 

export const datafetchsuccessfully = (data) => ({
    type: "DATA_FETCH",
    payload: data
})

export function FetchingRequest(data) {
    return  dispatch =>{
           dispatch({ type:"SOLVE_DATA",payload:data});
    }
}