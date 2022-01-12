// dynamic year setting
var year = document.getElementById('year');
year.innerText = new Date().getFullYear();

// toggle admin view

var accountCreation = document.getElementById('accountCreation');
accountCreation.style.visibility = 'hidden';

var defaultAdminView = false;

function switchAdminView() {
  if (!defaultAdminView) {
    console.log('clicked');
    defaultAdminView = true;
    accountCreation.style.visibility = 'visible';
  } else {
    console.log('not clicked');
    defaultAdminView = false;
    accountCreation.style.visibility = 'hidden';
  }
}

adminView.onclick = switchAdminView;
