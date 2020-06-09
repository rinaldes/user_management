function postAPI(props) {
    fetch('https://api.relier.works/restricted/orgs/breerje6uiensniapev0/contacts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            FullName: props.FullName,
            Email: props.Email,
            JobRole: props.JobRole,
            JobDivision: props.JobDivision,
            OrganizationUID: props.OrganizationUID
        })
    })
}

function postUser(props) {

}

export default postUser;