import Kitten from "../models/kitten";

class KittenCtrl {
  create(req, res, next) {
    const fluffy = new Kitten({ name: "Silence1" });
    console.log(fluffy); // 'Silence'
    fluffy.save((err, resfluffy) => {
      if (err) return console.error(err);
      resfluffy.speak();
    });
    res.send(fluffy);
  }
}

export default new KittenCtrl();
