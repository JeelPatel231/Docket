export default interface User{  
    avatar:string,
    collectionId:string,
    collectionName:string,
    created:DateString,
    email:string,
    id:string,
    name:string,
    dob:DateString,
    updated:DateString,
    username:string,
    emailVisibility: boolean,
    verified: boolean,
    expand: any
}

type DateString = string;