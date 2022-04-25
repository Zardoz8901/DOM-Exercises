const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = 'Hey I\'m red!';
container.appendChild(p);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = 'I\'m a blue h3!';
container.appendChild(h3);

const bdiv = document.createElement('div');
bdiv.style.border = '5px';
bdiv.style.borderStyle = 'solid';
bdiv.style.borderColor = 'black';
bdiv.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div';
bdiv.appendChild(h1);

const pbdiv = document.createElement('p');
pbdiv.textContent = 'ME TOO!';
bdiv.appendChild(pbdiv);

container.appendChild(bdiv);