import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-leftside">
                <img src={Logo} alt="" />
                <div className="webName">
                    <h1>VK media</h1>
                    <h4>Lets explore the world</h4>
                </div>
            </div>
            {/*<SignUp />*/}
            <LogIn />
        </div>
    )
}

function LogIn() {
    return (
        <div className="a-rightSide">
            <form className="infoForm authForm">
                <h2>Log In</h2>
                <div>
                    <input type="text" placeholder='firstName' name="firstName" className='infoInput' />

                </div>
                <div>
                    <input type="password" placeholder='password' name="password" className='infoInput' />

                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Don't have an account SignUp</span>
                    <button className='button infoButton'>Login</button>
                </div>
            </form>

        </div>
    )
}



function SignUp() {
    return (
        <div className="a-rightSide">
            <form className="infoForm authForm">
                <h2>Sign Up</h2>
                <div>
                    <input type="text" placeholder='firstName' name="firstName" className='infoInput' />
                    <input type="text" placeholder='lastName' name="lastName" className='infoInput' />

                </div>
                <div>
                    <input type="text" placeholder='userName' name="username" className='infoInput' />
                </div>
                <div>
                    <input type="password" placeholder='password' name="password" className='infoInput' />
                    <input type="password" placeholder='ConfirmPassword' name="password" className='infoInput' />

                </div>
                <div>
                    <span style={{ fontSize: '12px' }}>Already have a account , login</span>
                </div>
                <button className='button infoButton' typeof='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default Auth