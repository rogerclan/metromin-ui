const BASEURL = "http://metmin.us-east-1.elasticbeanstalk.com/api/";

function getMessage(id) {
  return fetch(`${BASEURL}case/${id}/message`).then(res => res.json());
}

function addMessage(message) {
  return fetch(`${BASEURL}message`, {
      body: JSON.stringify(message),
      cache: 'no-cache',
      headers: {
          'content-type': 'application/json'
      },
      method: 'POST'
  }).then(res => res.json());
}

function login (id) {
  return fetch(`${BASEURL}user/${id}`, {
      body: JSON.stringify({loggedIn: true}),
      cache: 'no-cache',
      headers: {
          'content-type': 'application/json'
      },
      method: 'PATCH'
  }).then(res => res.json());
}

function logout (id) {
  return fetch(`${BASEURL}user/${id}`, {
      body: JSON.stringify({loggedIn: false}),
      cache: 'no-cache',
      headers: {
          'content-type': 'application/json'
      },
      method: 'PATCH'
  }).then(res => res.json());
}

function getCampaigns () {

}

function getActiveCampaigns () {

}

function getCompletedCampaigns () {

}

function addCampaign(campaign) {

}

function getContributions () {

}

function addContribution (contribution) {

}

function getUsers () {
  return fetch(`${BASEURL}user`).then(res => res.json());
}

function getCase() {
  return fetch(`${BASEURL}case`).then(res => res.json());
}

function addCase(data) {
  return fetch(`${BASEURL}case`, {
    method: 'POST',
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function updateCase(id, data) {
  return fetch(`${BASEURL}case/${id}`,{
    method: 'PATCH',
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export default {
  getMessage,
  addMessage,
  login,
  logout
};