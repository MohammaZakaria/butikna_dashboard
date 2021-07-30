import React from 'react';

import LanguagesTable from '../sections/Languages/LanguagesTable';
import Breadcrumb from '../sections/Languages/Breadcrumb';

const LanguagesPage = () => {
        return (
            <>
                <div className="ms-content-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <Breadcrumb />
                            <LanguagesTable />
                        </div>
                    </div>
                </div>
            </>
        );
}

export default LanguagesPage;