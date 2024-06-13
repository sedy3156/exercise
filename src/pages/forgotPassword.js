import FormInput from "../components/FormInput"
import SubmitInput from "../components/SubmitInput";
import {findAllByDisplayValue} from "@testing-library/react";
import {NavLink} from "react-router-dom";
 function ForgotPassword()  {
     return<section className={"section"}> <div className={"login-wrapper"}>
        <div className={"container"}>
            <div className={"left-column"}>
                <h2>Reset your</h2>
                <h1>Password</h1>
            </div>
            <div className={"right-column"}>
                <p>If the account exist, we will email you instructions to reset the password.</p>
                <form action="">
                    <div className={"form-group"}>
                        <FormInput title={"email"} inputType="email"/>
                        <NavLink to={"/Login"} className={"redirection"}>Return to login?</NavLink>
                        <SubmitInput text={"Reset password"}/>
                    </div>
                </form>

            </div>
        </div>
     </div>
    </section>

 }

export default ForgotPassword;