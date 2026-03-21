class View {
    constructor() {
        this.postTitleInputNode = document.querySelector('.js-post-title-input');
        this.postTextInputNode = document.querySelector('.js-post-text-input');
        this.newPostBtnNode = document.querySelector('.js-new-post-btn');
        this.postsNode = document.querySelector('.js-posts');
        this.validationMessage = document.getElementById('validationMessage');
    }
      getPostFromUser() {
        return {
            title: this.postTitleInputNode.value,
            text: this.postTextInputNode.value
        };
    }

    renderPosts(posts) {
        let postsHTML = '';

        posts.forEach(post => {
           postsHTML += `
            <div>
                <p class='post__date'>${post.dt}</p>
                <p class='post__title'>${post.title}</p>
                <p class='post__text'>${post.text}</p>
            </div>
           `; 
        });

        this.postsNode.innerHTML = postsHTML;
    }

     clearInputs() {
        this.postTitleInputNode.value = '';
        this.postTextInputNode.value = '';
    }

     showError(message) {
        this.validationMessage.innerText = message;
        this.validationMessage.classList.remove('validationMessage_hidden');
    }

    hideError() {
        this.validationMessage.classList.add('validationMessage_hidden');
    }
}