class Model {
    constructor() {
        this.posts = [];
    }

    async fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        this.posts = data.slice(0, 5); // возьмём 5 постов
    }

    getPosts() {
        return this.posts;
    }

    addPost(title, text) {
        const currentDate = new Date().toLocaleString();

        this.posts.unshift({
            title,
            body: text,
            dt: currentDate
        });
    }
}
