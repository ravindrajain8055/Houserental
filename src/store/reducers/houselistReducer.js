const initState = {
    list:[
        {id:'1',rent:'5000',info:'mumbai',details:'yo',add:'mmm'},
        {id:'2',rent:'5000',info:'mumbai',details:'yo',add:'mm'}
    ],
}

const houselistReducer = (state = initState , action) =>{
    switch (action.type) {
        case 'CREATE_LIST':
            console.log('created list', action.flat);
            return state;
        case 'CREATE_LIST_ERROR':
            console.log('create list error',action.err);
            return state;
        default:
            return state;
        
    }
}
export default houselistReducer;