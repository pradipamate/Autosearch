const DataFetch = [];

export default (state = DataFetch, action) => {
    switch (action.type) {
        case 'DATA_FETCH':
            return {
                ...state,DataFetch:action.payload,
            }
        case 'SOLVE_DATA':
           var initialdata=state.DataFetch;
           console.log("initialdata",initialdata);
           var selected=action.payload;
           console.log("selected",selected)
                   const newData = initialdata.filter(function(item) {
                    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                    const textData = selected.toUpperCase();
                    return itemData.indexOf(textData) > -1 ;
                    });

            return {
                ...state,DataFetch:newData
            }
        default:
            return state;
     }
}