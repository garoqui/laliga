export const isEmpty = ( item )=>{
    console.log(!item.trim().length)
    if(!item.trim().length){
        return true
    }
    return false
}