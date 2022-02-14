import store from "../../store"

//checking token in general state
export const isLogued = ()=>{
    console.log("heyyyyyyy")
    store.subscribe(()=>{
        const token = store.getState().token[0]
        console.log(token)
        if(token.length) return true
    })
    return false
}