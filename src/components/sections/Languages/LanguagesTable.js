import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { Link } from 'react-router-dom';
import { routeLinks } from '../../../config/public-variables';
import Http from '../../../config/httpService'
import { languagesInitialState } from '../../../config/initStates'

const LanguagesTable = () => {
    const [lang, setLang] = useState([languagesInitialState])
    const [loading, setLoading] = useState(false)
    const alert = useAlert()
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const res = await Http.get(`/languages`)
                const { data } = res
                console.log('data :', data.message);
                if (data.responseNumber === 201) {
                    setLang(data.message)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                alert.show(error)
            }
        })()
    }, [])

    return (
        <div className="col-12">
            <div className="ms-panel">
                <div className="ms-panel-header">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h6> Category List</h6>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Link type="button" className="btn btn-primary" to={routeLinks.mainCategoriesForm}>Add new category</Link>
                        </div>
                    </div>
                </div>
                {loading && 'Loading...'}
                <div className="ms-panel-body">
                    <div className="table-responsive">
                        <table className="table table-hover thead-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Direction</th>
                                    <th scope="col">Abbr</th>
                                    {/* <th scope="col">Price</th> */}
                                    <th scope="col">Flag</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lang.length > 0 ?
                                    lang.map((l, index) => {
                                        return (
                                            <tr key={index} key={l.id}>
                                                <td>{l.name}</td>
                                                <td> {l.direction}</td>
                                                {/* <td> {cat.lang_id}</td> */}
                                                <td><span className="badge badge-primary">{l.abbr}</span></td>
                                                <td> <img src={l.flag} alt="flag" /> </td>
                                                <td> <Link to={`${routeLinks.editMainCategoriesForm}${l.id}`}>Edit</Link> </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    'Add new category please'}
                                {/* <tr>
                                        <th scope="row">2</th>
                                        <td>Mango Pie</td>
                                        <td>Kristien</td>
                                        <td> Old Town</td>
                                        <td><span className="badge badge-dark">Cancelled</span></td>
                                        <td>14:05</td>
                                        <td>$9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Spicy Grill Sandwich</td>
                                        <td>Jacob Sahwny</td>
                                        <td> palace Road</td>
                                        <td><span className="badge badge-success">Delivered</span></td>
                                        <td>12:05</td>
                                        <td>$21</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Chicken Sandwich</td>
                                        <td>Peter Gill</td>
                                        <td> Street 21</td>
                                        <td><span className="badge badge-primary">Pending</span></td>
                                        <td>12:05</td>
                                        <td>$15</td>
                                    </tr>
                                  */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguagesTable;