import FormInput from "../components/FormInput"
import SubmitInput from "../components/SubmitInput";
import {findAllByDisplayValue} from "@testing-library/react";
import {NavLink} from "react-router-dom";
 function Login()  {
     return<section className={"section"}> <div className={"login-wrapper"}>
        <div className={"container"}>
            <div className={"left-column"}>
                <h1>Login</h1>
            </div>
            <div className={"right-column"}>
                <form action="">
                    <div className={"form-group"}>
                        <FormInput title={"email"} inputType="email"/>
                        <FormInput title={"Password"} inputType="password" showForgotPassword={true}/>
                        <NavLink to={"/Register"} className={"redirection"}>Don't have an account yet?</NavLink>
                        <SubmitInput text={"Login"}/>
                    </div>
                </form>

            </div>
        </div>
     </div>
    </section>

 }

export default Login;