const Validate=(email,password)=>{

    const isemailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const ispasswordvalid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if(!isemailvalid)
    return "*Email is not valid";

    if(!ispasswordvalid)
    return "*Password is not valid";

    return null;
}
export default Validate;