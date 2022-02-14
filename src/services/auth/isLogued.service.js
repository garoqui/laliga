import store from "../../store"

//checking token in general state
export const isLogued = ()=>{
    store.subscribe(()=>{
        const token = store.getState().token[0]
        if(token.length) return true
    })
    return false
}