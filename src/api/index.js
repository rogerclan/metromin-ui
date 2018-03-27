const BASEURL = "http://metmin.us-east-1.elasticbeanstalk.com/api/";

function getCaseMessages(id) {
  return fetch(`${BASEURL}case/${id}/message`).then(res => res.json());
}

function sendMessage(data) {
  return fetch(`${BASEURL}message`, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      method: 'POST'
  }).then(res => res.json());
}

function login (id) {
  return fetch(`${BASEURL}user/${id}`, {
      body: JSON.stringify({loggedIn: true}),
      cache: 'no-cache',
      method: 'PATCH'
  }).then(res => res.json());
}

function logout (id) {
  return fetch(`${BASEURL}user/${id}`, {
      body: JSON.stringify({loggedIn: false}),
      cache: 'no-cache',
      method: 'PATCH'
  }).then(res => res.json());
}

function getCampaigns () {
  return fetch(`${BASEURL}campaign`).then(res => res.json());
}

function getActiveCampaigns () {
  return fetch(`${BASEURL}campaign/active`).then(res => res.json());
}

function getCompletedCampaigns () {
  return fetch(`${BASEURL}campaign/complete`).then(res => res.json());
}

function addCampaign(data) {
  return fetch(`${BASEURL}campaign`, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function getContributions () {
  return fetch(`${BASEURL}contribution`).then(res => res.json());
}

function addContribution (data) {
  return fetch(`${BASEURL}contribution`, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function getUsers () {
  return fetch(`${BASEURL}user`).then(res => res.json());
}

function getCases() {
  return fetch(`${BASEURL}case`).then(res => res.json());
}

function addCase(data) {
  return fetch(`${BASEURL}case`, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function updateCase(id, data) {
  return fetch(`${BASEURL}case/${id}`,{
    method: 'PATCH',
    cache: 'no-cache',
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export default {
  getCaseMessages,
  sendMessage,
  login,
  logout,
  getCampaigns,
  getActiveCampaigns,
  getCompletedCampaigns,
  addCampaign,
  getContributions,
  addContribution,
  getUsers,
  getCases,
  addCase,
  updateCase
};