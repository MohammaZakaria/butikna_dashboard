import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { SET_TOKEN, SET_USER } from '../../../config/types';
import { useDispatch, useSelector } from 'react-redux';
import Http from './../../../config/httpService'
import { useCookies } from 'react-cookie'
import { authenticate, getLastPath } from './../../../helpers/cookies'
import { useAlert } from 'react-alert'

const Content = () => {
    const [cookies, setCookie] = useCookies()
    const [formInputs, setFormInputs] = useState({ email: '', password: '' })
    const history = useHistory()
    const dispatch = useDispatch()
    const alert = useAlert()
    useEffect(() => {
        //initialize datatable
        function formValidation() {
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                Array.prototype.filter.call(forms, function (form) {
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

    const [handleShow1, setHandleShow1] = useState(false)

    const handleShow = () => {
        setHandleShow1(true);
    }
    const handleCloseModal = () => {
        setHandleShow1(false);
    }

    // const fetchUser = async (token) => {
    //     try {
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` }
    //         };
    //         const user = await Http.get(`auth/user`, config)
    //         if (user.status === 200) {
    //             return user.data
    //         }
    //     } catch (error) {
    //         console.log('fetchUser login: ', error.response.data.message);
    //         console.log('fetchUser login: ', error.response);
    //     }
    // }

    const t = 'C1wstjfAOMIkrHpFXffFRqEDM6981upevfoQJA8osi9n7wYqsNUgJ187sSjJ'

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formInputs.email && formInputs.password) {
                // const res = await Http.post('auth/register', { name: 'Developer', email: 'zak.dev@butikna.se', password: '123456' })
                // const res = await Http.get(`auth/register/activate/${t}`)
                const res = await Http.post(`auth/login`, formInputs)
                if (res.status === 200) {
                    // await setCookie('access_token', res.data.access_token)
                    const auth = await authenticate(res?.data?.access_token)
                    if (auth) {
                        await dispatch({ type: SET_TOKEN, payload: res.data.access_token })
                        history.push(getLastPath())
                    }
                }
                // TODO alert if something wrong
            }
        } catch (error) {
            alert.error(`Oh No! ${error.response?.data?.message}`)
        }
    }

    const handleChange = (e) => {
        const { target } = e
        setFormInputs({ ...formInputs, [target.name]: target.value })
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
                            <h3>Login to Account</h3>
                            <p>Please enter your email and password to continue</p>
                            <div className="mb-3">
                                <label htmlFor="validationCustom08">Email Address</label>
                                <div className="input-group">
                                    <input name="email" type="email" value={formInputs.email} onChange={handleChange} className="form-control" id="validationCustom08" placeholder="Email Address" required />
                                    <div className="invalid-feedback">Please provide a valid email.</div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="validationCustom09">Password</label>
                                <div className="input-group">
                                    <input type="password" name="password" value={formInputs.password} onChange={handleChange} className="form-control" id="validationCustom09" placeholder="Password" required />
                                    <div className="invalid-feedback">Please provide a password.</div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="ms-checkbox-wrap">
                                    <input className="form-check-input" type="checkbox" defaultValue /> <i className="ms-checkbox-check" />
                                </label> <span> Remember Password </span>
                                <label className="d-block mt-3"><p className="btn-link" onClick={handleShow}>Forgot Password?</p>
                                </label>
                            </div>
                            <button className="btn btn-primary mt-4 d-block w-100" type="submit">Sign In</button>
                            <p className="mb-0 mt-3 text-center">Don't have an account? <Link className="btn-link" to="/default-register">Create Account</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <Modal className="modal-min" show={handleShow1} onHide={handleCloseModal} aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body className="text-center">
                    <button type="button" className="close" onClick={handleCloseModal}><span aria-hidden="true">×</span></button>
                    <i className="flaticon-secure-shield d-block" />
                    <h1>Forgot Password?</h1>
                    <p>Enter your email to recover your password</p>
                    <form>
                        <div className="ms-form-group has-icon">
                            <input type="text" placeholder="Email Address" className="form-control" name="forgot-password" /> <i class="material-icons">email</i>
                        </div>
                        <button type="submit" className="btn btn-primary shadow-none">Reset Password</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>

    );
}


export default Content;