class Model {
    constructor() {
        this.posts = [];
    }

    addPost(title, text) {
        const currentDate = new Date();
        const dt = currentDate.toLocaleString();

        this.posts.push({
            dt,
            title,
            text
        });
    }

    getPosts() {
        return this.posts;
    }    
}