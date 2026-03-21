const TITLE_VALIDATION_LIMIT = 50;
const TEXT_VALIDATION_LIMIT = 150;

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.init();
    }

    init() {
        this.view.newPostBtnNode.addEventListener('click', () => {
            this.handleAddPost();
        });

        this.view.postTitleInputNode.addEventListener('input', () => {
            this.validate();
        });
    }

    handleAddPost() {
        const { title, text } = this.view.getPostFromUser();

        if (title.length > TITLE_VALIDATION_LIMIT) {
            this.view.showError(
              `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`
            );
            return;
        }

        if (text.length > TEXT_VALIDATION_LIMIT) {
            this.view.showError(
              `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`
            );
            return;
        }

        this.view.hideError();

        this.model.addPost(title, text);

        const posts = this.model.getPosts();
        this.view.renderPosts(posts);

        this.view.clearInputs();
    }

    validate() {
        const { title, text } = this.view.getPostFromUser();

        if (title.length > TITLE_VALIDATION_LIMIT) {
            this.view.showError(
              `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`
            );
            return;
        }

        if (text.length > TEXT_VALIDATION_LIMIT) {
            this.view.showError(
              `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`
            );
            return;
        }

        this.view.hideError();
    }
}
