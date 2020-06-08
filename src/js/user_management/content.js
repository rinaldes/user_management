import React from 'react';
import CreateUser from './content/create.js'
import Container from './content/view.js'

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