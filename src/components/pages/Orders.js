import React, { Component } from 'react';
import Http from '../../config/httpService';
import Breadcrumb from '../sections/Orders/Breadcrumb';
import Favorder from '../sections/Orders/Favorder';
import Ordertable from '../sections/Orders/Ordertable';

class Orders extends Component {
    componentDidMount() {
        (async () => {
            const user = Http.get('user');
            console.log('user :', user.data);
        })()

    }
    render() {
        return (
            <>
                <div className="ms-content-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <Breadcrumb />
                            <Favorder />
                            <Ordertable />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Orders;