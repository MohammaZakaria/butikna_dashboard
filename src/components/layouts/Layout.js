import React from 'react'
import Sidenavigation from './Sidenavigation';
import Topnavigation from './Topnavigation';
import Quickbar from './Quickbar';
const Layout = (props) => {
    return (
        <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
            <Sidenavigation />
            <main className="body-content">
                <Topnavigation />
                {props.children}
            </main>
            <Quickbar />
        </div>
    )
}

export default Layout
