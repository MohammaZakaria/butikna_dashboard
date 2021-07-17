import React, { Component } from 'react';

import CategoryTable from '../sections/Categories/CategoryTable';
import Breadcrumb from '../sections/Categories/Breadcrumb';

class Invoice extends Component {
    render() {
        return (
            <>
                <div className="ms-content-wrapper">
                    <div className="row">
                        <div className="col-md-12">

                            <Breadcrumb />
                            <CategoryTable />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Invoice;