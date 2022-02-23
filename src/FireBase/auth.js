
import { GoogleAuthProvider, signInWithPopup} from "@firebase/auth";
import {auth} from "./fireBase-Config"
import { FacebookAuthProvider } from "firebase/auth";

// email login





// google signin


export const Google = () => {

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
};

// FaceBook Authenticatiom

export const Facebook = () => {
  
    const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

}

