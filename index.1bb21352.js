var e=document.querySelector("body"),n=function(n,t){var o=document.createElement("div");o.dataset.qa="notification",o.classList.add(t),o.textContent=n,e.append(o)};new Promise(function(e,n){document.addEventListener("mousedown",function(n){0===n.button&&e("First promise was resolved")}),setTimeout(function(){return n(Error("First promise was rejected"))},3e3)}).then(function(e){return n(e,"success")}).catch(function(e){return n(e,"error")}),new Promise(function(e,n){document.addEventListener("mousedown",function(n){(0===n.button||2===n.button)&&e("Second promise was resolved")})}).then(function(e){return n(e,"success")}),new Promise(function(e,n){var t=!1,o=!1;document.addEventListener("mousedown",function(n){0===n.button&&(t=!0),2===n.button&&(o=!0),t&&o&&e("Third promise was resolved")})}).then(function(e){return n(e,"success")});
//# sourceMappingURL=index.1bb21352.js.map
