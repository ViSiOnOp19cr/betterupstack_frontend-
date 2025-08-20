import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const Emailform = () =>{
    const [email, setemail] = useState('');
    const {me} = useAuth;

    



}