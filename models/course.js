// const uuid = require('uuid/v4');
const fs = require('fs');
const path = require('path');

class Course {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    // this.id = uuid();
  }

  toJSON() {
    return ({
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id
    })
  }

  static async update(course) {
    const courses = await Course.getAll();
    const idx = courses.findIndex(c => c.id === course.id);
    courses[idx] = course;

    return new Promise((resolve, reject) => {
      fs.writeFile(
          path.join(__dirname, '..', 'data', 'courses.jsonnnn'),
          JSON.stringify(courses),
          (err) => {
            if (err) { reject(err) }
            else { resolve() }
          }
      )
    });

  }

  async save() {
    const courses = await Course.getAll();
    this.id = courses.length + 1;
    courses.push(this.toJSON());
    console.log('Courses: ', courses);

    return new Promise((resolve, reject) => {
      fs.writeFile(
          path.join(__dirname, '..', 'data', 'courses.jsonnnn'),
          JSON.stringify(courses),
          (err) => {
            if (err) { reject(err) }
            else { resolve() }
          }
      )
    });


  }

  static async getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
          path.join(__dirname, '..', 'data', 'courses.jsonnnn'),
          'utf-8',
          (err, content) => {
            if (err) { reject(err) }
            else { resolve(JSON.parse(content)) }
          }
      );
    });
  }

  static async getById(id) {
    const courses = await Course.getAll();
    return courses.find(c => c.id === +id);
  }
}

module.exports = Course;