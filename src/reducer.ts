const Reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_SECURITY':
            return {
                ...state,
                selectedSecurity: action.payload,
                industryMarketCap:null,
                relatedCompanies:[]

            };
        case 'ADD_RELATED':
            return {
                ...state,
                relatedCompanies: action.payload,
            };
        case 'SET_AGGREGATE':
            return {
                ...state,
                industryMarketCap: action.payload
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;