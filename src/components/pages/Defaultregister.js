import React, { Component } from 'react';

import Content from '../sections/Defaultregister/Content';

class Defaultregister extends Component {
    render() {
        return (
            <div className="ms-body ms-primary-theme ms-logged-out">

                <main className="body-content">
                    <Content />
                </main>
            </div>
        );
    }
}

export default Defaultregister;