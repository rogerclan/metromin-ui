const BASEURL = "http://metmin.us-east-1.elasticbeanstalk.com/api/";
const headers = new Headers({ "Content-Type": "application/json" });
function getCaseMessages(id) {
  return fetch(`${BASEURL}case/${id}/message`).then(res => res.json());
}

function sendMessage(caseId, metminUserId, content) {
  return fetch(`${BASEURL}message`, {
    body: JSON.stringify({ caseId, metminUserId, content }),
    cache: "no-cache",
    method: "POST",
    headers
  }).then(res => res.json());
}

function login(id) {
  return fetch(`${BASEURL}user/${id}`, {
    body: JSON.stringify({ loggedIn: true }),
    cache: "no-cache",
    method: "PATCH",
    headers
  }).then(res => res.json());
}

function logout(id) {
  return fetch(`${BASEURL}user/${id}`, {
    body: JSON.stringify({ loggedIn: false }),
    cache: "no-cache",
    method: "PATCH",
    headers
  }).then(res => res.json());
}

function getCampaigns() {
  return fetch(`${BASEURL}campaign`).then(res => res.json());
}

function getActiveCampaigns() {
  return fetch(`${BASEURL}campaign/active?sort=dateCreated,desc`).then(res => res.json());
}

function getCompletedCampaigns() {
  return fetch(`${BASEURL}campaign/complete`).then(res => res.json());
}

function addCampaign(
  caseId,
  title,
  description,
  campaignType,
  fundsNeeded,
  fundsReceived,
  publicFlag
) {
  return fetch(`${BASEURL}campaign`, {
    method: "POST",
    cache: "no-cache",
    headers,
    body: JSON.stringify({
      caseId,
      title,
      description,
      campaignType,
      fundsNeeded,
      fundsReceived,
      publicFlag
    })
  }).then(res => res.json());
}

function getContributions() {
  return fetch(`${BASEURL}contribution`).then(res => res.json());
}

function addContribution(campaignId, contactName, amount) {
  return fetch(`${BASEURL}contribution`, {
    method: "POST",
    cache: "no-cache",
    headers,
    body: JSON.stringify({ campaignId, contactName, amount })
  }).then(res => res.json());
}

function getUsers() {
  return fetch(`${BASEURL}user`).then(res => res.json());
}

function getNewCases() {
  return fetch(`${BASEURL}case/new?sort=dateCreated,desc`).then(res => res.json());
}

function getCases() {
  return fetch(`${BASEURL}case?sort=dateCreated,desc`).then(res => res.json());
}

function addCase(
  caseType,
  contactName,
  contactEmail,
  contactPhone,
  location,
  message
) {
  return fetch(`${BASEURL}case`, {
    method: "POST",
    cache: "no-cache",
    headers,
    body: JSON.stringify({
      caseType,
      contactName,
      contactEmail,
      contactPhone,
      location,
      message,
      reviewed: false
    })
  }).then(res => res.json());
}

function updateCase(id, assigneeId) {
  return fetch(`${BASEURL}case/${id}`, {
    method: "PATCH",
    cache: "no-cache",
    mode: 'cors',
    body: JSON.stringify({ assigneeId }),
    headers
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
  getNewCases,
  addCase,
  updateCase
};
