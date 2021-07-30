import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Http from '../../../../config/httpService';
import axios from 'axios'
import Breadcrumb from '../Breadcrumb';
import { getAccessToken } from '../../../../helpers/cookies';
// import { Dropdown } from 'react-bootstrap';

const CategoryForm = () => {
    const { id } = useParams()
    const locations = useLocation({})
    const [formInputs, setFormInputs] = useState({})
    const [submitType, setSubmitType] = useState('add')

    const image = useRef()
    const cover = useRef()

    const handleChange = (e) => {
        const { target } = e
        setFormInputs({ ...formInputs, [target.name]: target.value })
    }
    const handleFile = (e) => {
        const { target } = e
        setFormInputs({ ...formInputs, [target.name]: target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // var formData = new FormData();

        // // files.map((file, index) => {
        // formData.append(`media_image_id`, formInputs.media_image_id);
        // formData.append(`media_cover_id`, formInputs.media_cover_id);
        // // });

        // formData.append('name', formInputs.name);
        // formData.append('description', formInputs.description);
        // formData.append('color_hex', formInputs.color_hex);

        // fetch('https://app.halalzz.tk/api/main_categories', {
        //     'content-type': undefined,
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then(response => response.json())
        //     .then(success => {
        //         console.log('success :', success);
        //         // Do something with the successful response
        //     })
        //     .catch(error => console.log(error)
        //     );

        try {
            switch (locations.pathname) {
                case 'mani-categories/add':
                    setFormInputs({ ...formInputs, formType: 'add' })
                    break;
                default:
                    setFormInputs({ ...formInputs, formType: 'add' })
                    break;
            }
            setFormInputs({ ...formInputs, is_gregory: false })
            const fd = new FormData()
            fd.append("name", formInputs.name)
            fd.append("formType", 'add')
            fd.append("lang_id", '1')
            fd.append("is_grocery", '1')
            fd.append("color_hex", formInputs.color_hex)
            fd.append("slug", formInputs.name)
            fd.append("media_image_id", formInputs.media_image_id)
            fd.append("media_cover_id", formInputs.media_cover_id)
            fd.append("description", formInputs.description)
            fd.append("cover_page_tags", `<h1>hello</h1>`)
            if (submitType === 'add') {
                await axios.post('main_categories', fd, {
                    headers: { 'Content-Type': undefined, Authorization: `Bearer ${getAccessToken()}` }
                })
            } else if (submitType === 'edit') {
                fd.append("_method", 'put')
                fd.append("media_image_id", formInputs.image)
                fd.append("media_cover_id", formInputs.cover)
                await axios.post(`main_categories/${id}`, fd, {
                    headers: { 'Content-Type': undefined, Authorization: `Bearer ${getAccessToken()}` }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        try {
            if (id) {
                (async () => {
                    const res = await axios.get(`main_categories/${id}/edit`,)
                    if (res.data.responseNumber === 201) {
                        // setFormInputs({ ...formInputs, ['color_hex']: res.data.message[0].categories.color_hex })
                        setFormInputs(res.data.message[0])
                        // console.log('res.data.message[0]:', res.data.message[0].categories.color_hex);
                        setSubmitType('edit')
                    }
                })()
            }
        } catch (error) {
            console.log('error :', error);
        }
    }, [])
    console.log('formInputs :', formInputs);

    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb pages={["Add new Category"]} />
                </div>
                <div className="col-xl-8 col-md-12 m-auto">
                    <div className="ms-panel">
                        <div className="ms-panel-header">
                            <h6>Basic Form Elements</h6>
                        </div>
                        <div className="ms-panel-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleEmail">Name</label>
                                    <input value={formInputs.name} onChange={handleChange} type="text" name="name" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="examplePassword">Color hex</label>
                                    <input value={formInputs.color_hex} onChange={handleChange} name="color_hex" type="text" className="form-control" placeholder="#f3f3f3" />
                                </div>
                                <div className="form-group">
                                    {formInputs.cover && <img style={{ width: '50px', height: '50px', objectFit: 'contain' }} src={formInputs.cover} alt="cover" />}
                                    <label htmlFor="examplePassword">Cover url</label>
                                    <input type="file" ref={cover} name='media_cover_id' onChange={handleFile} className="form-control" placeholder="Cover image url" />
                                </div>
                                <div className="form-group">
                                    {formInputs.image && <img style={{ width: '50px', height: '50px', objectFit: 'contain' }} src={formInputs.image} alt="image" />}
                                    <label htmlFor="examplePassword">Image url</label>
                                    <input type="file" ref={image} name='media_image_id' onChange={handleFile} className="form-control" placeholder="image url" />
                                </div>
                                {/* <ul className="ms-list d-flex">
                                    <li className="ms-list-item pl-0">
                                        <label className="ms-checkbox-wrap">
                                            <input  value={formInputs.media_cover_id} onChange={handleChange} type="checkbox" /> <i className="ms-checkbox-check" />
                                        </label> <span> Is Gregory </span>
                                    </li>
                                </ul> */}
                                {/* <div className="form-group">
                                    <label htmlFor="exampleSelect">Example select</label>
                                    <select className="form-control" id="exampleSelect">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="exampleTextarea">Descrriotpn</label>
                                    <textarea value={formInputs.description} onChange={handleChange} name="description" className="form-control" rows={3} defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-primary" >Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default CategoryForm;