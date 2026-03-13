let title = '';
let text = '';
let data = '';

const heading = document.querySelector('.heading');
const titleText = document.querySelector('.title');
const date = document.querySelector('.date');
const btn = document.querySelector('.btn');
const post = document.querySelector('.posts');

btn.addEventListener('click', function() {
    title = heading.value;
    text = titleText.value;
    data = date.value;
    
  post.innerHTML = `
    <div class="post">
        <h2 class="post-title">${title}</h2>
        <div class="post-body">${text}</div>
        <div class="post-date">${data}</div>
    </div>
  `;
  
     
});