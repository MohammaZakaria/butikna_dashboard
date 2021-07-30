import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Http from './../../../config/httpService'
import history from '../../../history';
import { getLastPath } from './../../../helpers/cookies'
import { useAlert } from 'react-alert'
import { routeLinks } from '../../../config/public-variables';


const Content = () => {
    const [formInputs, setFormInputs] = useState({})
    const alert = useAlert()

    useEffect(() => {
        //initialize datatable
        function formValidation() {
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });

            }, false);
        }
        formValidation();
    }, [])

    const handleChange = (e) => {
        const { target } = e
        setFormInputs({ ...formInputs, [target.name]: target.value })
        console.log('formInputs :', formInputs);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (formInputs.name &&
                formInputs.email &&
                formInputs.password) {
                const res = await Http.post('auth/register',
                    formInputs
                )
                // const res = await Http.get(`auth/register/activate/${t}`)
                if (res.data.responseNumber === 201) {
                    alert.show(`${res.data.message}`)
                    history.push(routeLinks.defaultLogin)

                    // await setCookie('access_token', res.data.access_token)
                    // const auth = await authenticate(res.data.access_token)
                    // if (auth) {
                    // await dispatch({ type: SET_TOKEN, payload: res.data.access_token })
                    // }
                }
                // TODO alert if something wrong
            }
        } catch (error) {
            // alert.error(`Oh No! ${error}`)
            console.log(error)
        }

    }

    return (
        <div className="ms-content-wrapper ms-auth">
            <div className="ms-auth-container">
                <div className="ms-auth-col">
                    <div className="ms-auth-bg" />
                </div>
                <div className="ms-auth-col">
                    <div className="ms-auth-form">
                        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                            <h3>Create Account</h3>
                            <p>Please enter personal information to continue</p>
                            <div className="form-row">
                                <div className="col-md-12 ">
                                    <label htmlFor="validationCustom01">First name</label>
                                    <div className="input-group">
                                        <input name="name" value={formInputs.name} onChange={handleChange} type="text" className="form-control" id="validationCustom01" placeholder="First name" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-6 ">
                                    <label htmlFor="validationCustom02">Last name</label>
                                    <div className="input-group">
                                        <input name="lastName" value={formInputs.lastName} onChange={handleChange} type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="Doe" required />
                                        <div className="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 ">
                                    <label htmlFor="validationCustom03">Email Address</label>
                                    <div className="input-group">
                                        <input name="email" value={formInputs.email} onChange={handleChange} type="email" className="form-control" id="validationCustom03" placeholder="Email Address" required />
                                        <div className="invalid-feedback">
                                            Please provide a valid email.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <label htmlFor="validationCustom04">Password</label>
                                    <div className="input-group">
                                        <input name="password" value={formInputs.password} onChange={handleChange} type="password" className="form-control" id="validationCustom04" placeholder="Password" required />
                                        <div className="invalid-feedback">
                                            Please provide a password.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="form-check pl-0">
                                    <label className="ms-checkbox-wrap">
                                        <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                                        <i className="ms-checkbox-check" />
                                    </label>
                                    <span> Agree to terms and conditions </span>
                                </div>
                            </div>
                            <button className="btn btn-primary mt-4 d-block w-100" type="submit">Create Account</button>
                            <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/default-login">Login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div >

    );

}

export default Content;