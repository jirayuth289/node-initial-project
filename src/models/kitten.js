import mongoose from "mongoose";

const kittenSchema = mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittenSchema.methods.speak = function () {
    const greeting = this.name
      ? `Meow name is ${this.name}`
      : "I don't have a name";
    console.log(greeting);
  }

export default mongoose.model('Kitten', kittenSchema);