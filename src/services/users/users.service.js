import { URLUSERS } from "../../constants/users.constants";

export const getUsers = async () => {
 
    const resu = await fetch(URLUSERS).then((users) => users).catch( err => console.log(err));
    console.log(resu.status)
    console.log(URLUSERS)
    if(!resu.ok){
        throw Error(resu.status)
    }
    return resu.json()
    
 
};
