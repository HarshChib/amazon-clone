export const initialState={
    basket:[],
    user:null,
    map:new Map()
}
export const getBasketTotal = (basket) => {
    let total=0;
    basket.map(({price})=>{
      total+=price;
    })
    return total;
  }

const reducer=(state,action)=>{
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':{
            
            return {
                ...state,
                basket:[...state.basket,action.item]
            }}
        case 'REMOVE_FROM_BASKET':{
            const index=state.basket.findIndex(({id})=>id===action.id)
            let newBasket=[...state.basket]
            if(index>=0){
                newBasket.splice(index,1)
            }
            else{
                console.warn(`No such item with ID:${action.id}`)
            }
            return {
                ...state,
                basket:newBasket
            }
        }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
            
           
        default:
            return state;
    }
}

export default reducer;