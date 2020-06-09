import React from 'react';
import CreateUser from '../user_management/create.js'
import Container from '../user_management/view.js'

function Content(props) {
    if (window.location.pathname === "/create") {
        return (<CreateUser />)
    } else if (window.location.pathname === "/edit") {
        return (<CreateUser user_list={props.user_list} />)
    } else {
        return (<Container user_list={props.user_list} />)
    }
}


export default Content;