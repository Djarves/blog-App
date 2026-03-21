const TITLE_VALIDATION_LIMIT = 50;
const TEXT_VALIDATION_LIMIT = 150;

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.init();
    }

    init() {
        // кнопка
        this.view.newPostBtnNode.addEventListener('click', () => {
            this.handleAddPost();
        });

        // 🔥 СЛУШАЕМ ОБА ИНПУТА
        this.view.postTitleInputNode.addEventListener('input', () => {
            this.validate();
        });

        this.view.postTextInputNode.addEventListener('input', () => {
            this.validate();
        });
    }

    // ✅ ЕДИНАЯ ВАЛИДАЦИЯ
    getValidationError(title, text) {
        if (!title || !text) {
            return 'Заполните все поля';
        }

        if (title.length > TITLE_VALIDATION_LIMIT) {
            return `Длина заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;
        }

        if (text.length > TEXT_VALIDATION_LIMIT) {
            return `Длина текста не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
        }

        return null;
    }

    handleAddPost() {
        const { title, text } = this.view.getPostFromUser();

        const error = this.getValidationError(title, text);

        if (error) {
            this.view.showError(error);
            return;
        }

        this.view.hideError();

        this.model.addPost(title, text);

        const posts = this.model.getPosts();
        this.view.renderPosts(posts);

        this.view.clearInputs();
        this.view.disableButton(); // после очистки кнопка снова блокируется
    }

    validate() {
        const { title, text } = this.view.getPostFromUser();

        const error = this.getValidationError(title, text);

        if (error) {
            this.view.showError(error);
            this.view.disableButton(); // 🔴 блок
        } else {
            this.view.hideError();
            this.view.enableButton(); // 🟢 можно нажать
        }
    }
}
