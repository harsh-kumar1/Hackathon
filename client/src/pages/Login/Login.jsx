import './Login.css'
import React, { useState } from 'react'

function Login() {
    // add the state members for inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // get the user from AuthContext
    // const { setUser } = useAuth()

    // // get navigate function reference
    // const navigate = useNavigate()

    // click event handler of Login button
    const onLogin = async () => {
        if (email.length == 0) {
            toast.warning('please enter email')
        } else if (password.length == 0) {
            toast.warning('please enter password')
        } else {
            const response = await login(email, password)
            if (response['status'] == 'success') {
                toast.success('login successful')

                // get the token from response and cache it in local storage
                localStorage.setItem('token', response['data']['token'])
                // localStorage.setItem('firstName', response['data']['firstName'])
                // localStorage.setItem('lastName', response['data']['lastName'])

                // set the logged in user information
                setUser({
                    firstName: response['data']['firstName'],
                    lastName: response['data']['lastName'],
                })

                // navigate to the PropertyListing page
                navigate('/home/properties')
            } else {
                toast.error(response['error'])
            }
        }
    }

    return (
        <div className='container mt-5'>
            <h2 className='page-header'>Sign In</h2>

            <div className='login-container mt-5'>
                <div className='mb-3'>
                    <label htmlFor=''>Email Address</label>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        type='email'
                        className='form-control mt-2'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor=''>Password</label>
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        type='password'
                        className='form-control mt-2'
                    />
                </div>

                <div className='mb-3'>
                    {/* <button className='btn btn-link'>Forgot password?</button> */}
                    {/* Don't have an account yet? <Link to='/register'>Register here</Link> */}
                </div>
                <div className='mb-3 '>
                    <button
                        onClick={onLogin}
                        className='btn btn-primary'
                    >
                        Sign In
                    </button>
                </div>
                <div className='donthaveaccount '>
                    Don't have an account?
                    <a href=""> Sign Up</a>
                </div>
            </div>
        </div>
        // <div>
        //     <h1>this is harsh

        //     </h1>
        // </div>
    )
}

export default Login
