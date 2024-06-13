import {NavLink} from "react-router-dom";

const FormInput = ({title, inputType, showForgotPassword}) => {
    return(
        <div className={"input-group"}>
            <label className={"label"}>{title}</label>
        <input className={"input"} type={inputType}/>
            {inputType === "password" && showForgotPassword &&(
                <NavLink to={"/forgot_password"} className="forgot-password">Forgot?</NavLink>
            )}
    </div>)
};
export default FormInput;