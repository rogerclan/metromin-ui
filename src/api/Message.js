import moment from 'moment';
import MetMinUser from './MetMinUser';
import { BaseUrl } from './Base';

export function Message (id, caseId, metminUser, content, dateCreated) {
    return {
        id: id||null,
        caseId: caseId||null,
        metminUser: (metminUser)? new MetMinUser(metminUser.id, metminUser.userName, metminUser.fullName, metminUser.loggedIn): null,
        content: content||null,
        dateCreated: dateCreated? moment(dateCreated): null
    }
}

export function getMessage(id) {
    return fetch(`${BASEURL}case/${id}/message`).then(res => res.json());
}

export function addMessage(message) {
    return fetch(`${BASEURL}message`, {
        body: JSON.stringify(message),
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json'
        },
        method: 'POST'
    }).then(res => res.json());
}

export default Message;