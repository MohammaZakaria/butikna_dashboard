import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ pages }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb pl-0">
                <li className="breadcrumb-item"><Link to="/"><i className="material-icons">home</i> Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Categories</li>
                {
                    pages.length > 0 && pages.map((pageName, index) => {
                        return (
                            <li key={index} className="breadcrumb-item active" aria-current="page">{pageName}</li>
                        )
                    })
                }
            </ol>
        </nav>
    );
}

Breadcrumb.defaultProps = {
    pages: []
}

export default Breadcrumb;