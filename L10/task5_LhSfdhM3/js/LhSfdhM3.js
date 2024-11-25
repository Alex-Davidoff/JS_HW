let sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(Date());
localStorage.setItem('sessionsList',JSON.stringify(sessionsList));