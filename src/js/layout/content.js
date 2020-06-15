import React from 'react';
import CreateUser from '../user_management/create.js'
import Container from '../user_management/view.js'

function Contentbar() {
    if (window.location.pathname === "/create" || window.location.pathname === "/edit") {
        return (<CreateUser />)
    } else {
        return (<Container />)
    }
}

export default Contentbar;