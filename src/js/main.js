// dynamic year setting
var year = document.getElementById('year');
year.innerText = new Date().getFullYear();

// toggle admin view

var accountCreation = document.getElementById('accountCreation');
accountCreation.style.visibility = 'hidden';
accountCreation.style.height = '0px';

var defaultAdminView = false;

var switchAdminView = () => {
  if (!defaultAdminView) {
    defaultAdminView = true;
    accountCreation.style.visibility = 'visible';
    accountCreation.style.height = 'auto';
  } else {
    defaultAdminView = false;
    accountCreation.style.visibility = 'hidden';
    accountCreation.style.height = '0px';
  }
};

adminView.onclick = switchAdminView;

// tab display

var trainingsTrigger = document.getElementById('trainingsTrigger');
var tabOutput = document.getElementById('tabOutput');

var tabDisplay = document.getElementById('tabDisplay');
tabDisplay.style.visibility = 'hidden';
tabDisplay.style.height = '0px';

var defaultTabsView = false;

var switchTabView = () => {
  if (!defaultTabsView) {
    defaultTabsView = true;
    tabDisplay.style.visibility = 'visible';
    tabDisplay.style.height = 'auto';
  } else {
    defaultTabsView = false;
    tabDisplay.style.visibility = 'hidden';
    tabDisplay.style.height = '0px';
  }
};

trainingsTrigger.onclick = switchTabView;

// trainings display

var tabsQuery = document.querySelectorAll('.tab-select');
var tabToDisplay = Array.from(tabsQuery);

var displayTab = (id) => {
  var selectedTab = id.split('_')[0];

  var tabValue = null;

  if (tabOutput.firstChild) {
    tabOutput.removeChild(tabOutput.firstChild);
  }

  for (var display of tabToDisplay) {
    if (display.id.split('_')[0] === selectedTab) {
      tabValue = display;
      tabOutput.appendChild(tabValue);
    }
  }
};
