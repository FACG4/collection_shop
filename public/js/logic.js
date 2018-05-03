const selector = (id) => {
  return document.getElementById(id)
}

const create = (element, parent) => {
  let newElement = document.createElement(element);
  if (parent) return parent.appendChild(newElement)
  else return newElement;
}

const fetch = (url,method,load,callback) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(null, xhr.responseText);
    } else {
      callback("error" + xhr.responseType);
    }
  };
  xhr.open(method, url, true);
  xhr.setRequestHeader('id',load)
  xhr.send();
};
