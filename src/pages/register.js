import FormInput from "../components/FormInput"
import SubmitInput from "../components/SubmitInput";
import {findAllByDisplayValue} from "@testing-library/react";
import {NavLink} from "react-router-dom";
function Register()  {

    return <section className={"section"}> <div className={"login-wrapper"}>
        <div className={"container"}>
            <div className={"left-column"}>
                <h1>Register</h1>
            </div>
            <div className={"right-column"}>
                <form action="">
                    <div className={"form-group"}>
                        <FormInput title={"name"} inputType="text"/>
                        <FormInput title={"lastname"} inputType="text"/>
                        <FormInput title={"email"} inputType="email"/>
                        <FormInput title={"Password"} inputType="password" showForgotPassword={false}/>
                        <NavLink to={"/Login"} className={"redirection"}>Do you already have an account?</NavLink>
                        <SubmitInput text={"register"}/>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </section>


}

export default Register;