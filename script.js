const home = `
<h1>This is Home Page</h1><h1>Welcome to Assignment</h1>
`;

const contact = `
<h1>This is Contacts Page</h1><h1>Submitted by: Imran Khan</h1>
`;

const about = `
<h1>This is About Page</h1><h1>Assignmnet Submitted to: Job Freak</h1>
`;

document.getElementById("homeBtn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = home;
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = contact;
});

document.getElementById("aboutBtn").addEventListener("click", function () {
  document.getElementById("content").innerHTML = about;
});
