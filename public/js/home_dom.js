if (document.addEventListener) {
  document.addEventListener('click', handleClick, false);
} else if (document.attachEvent) {
  document.attachEvent('onclick', handleClick);
}

function handleClick(event) {
  event = event || window.event;
  event.target = event.target || event.srcElement;

  var element = event.target;
  while (element) {
    if (element.nodeName === 'BUTTON') {
      doSomething(element);
      break;
    }
    element = element.parentNode;
  }
}

function doSomething(button) {
  console.log(parseInt(button.value));
  fetch('/selectGood', 'POST', parseInt(button.value), (err, res) => {})
}
