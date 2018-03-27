import { BASEURL } from './Base';

export default class MetMinUser {
    constructor(id, userName, fullName, loggedIn) {
        this.id = id || null,
        this.userName = userName || '',
        this.fullName = fullName || '',
        this.loggedIn = loggedIn || false
    }
}

export function Login (id) {
    return fetch(`${BASEURL}user/${id}`, {
        body: JSON.stringify({loggedIn: true}),
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json'
        },
        method: 'PATCH'
    }).then(res => res.json());
}

export function Logout (id) {
    return fetch(`${BASEURL}user/${id}`, {
        body: JSON.stringify({loggedIn: false}),
        cache: 'no-cache',
        headers: {
            'content-type': 'application/json'
        },
        method: 'PATCH'
    }).then(res => res.json());
}