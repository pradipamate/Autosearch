const DataFetch = [];

export default (state = DataFetch, action) => {
    switch (action.type) {
        case 'TEST_RANDOM_DATA':
            return {
                ...state,DataFetch:action.payload,
            }
        case 'SOLVE_DATA':
           var initialdata=state.DataFetch;
           console.log("initialdata",initialdata);
           var selected=action.payload;
           console.log("selected",selected)
           
                let succsessData=initialdata.filter(function(obj){
                    for(var key in obj){
                        console.log("obj",obj[key]);
                        if(obj[key].includes(selected)){
                            return obj;
                        }
                    }
                });

            return {
                ...state,DataFetch:succsessData
            }
        default:
            return state;
     }
}