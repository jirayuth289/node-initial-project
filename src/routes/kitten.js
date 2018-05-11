import Kitten from "../controllers/kitten";

export default (app) => {
    app.get("/kitten", Kitten.create);

    return app;
}