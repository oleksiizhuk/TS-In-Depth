// enum Category { JavaScript, CSS, HTML }
// enum Category { JavaScript = 1, CSS, HTML }
enum Category { JavaScript = 5, CS8= 8, HTML = 9 }

let favoriteCategory: Category = Category.JavaScript;
console.log(favoriteCategory); // 5

let categoryString = Category[favoriteCategory];
console.log(categoryString); // JavaScript

enum CategoryString { A = 'JavaScript', B = 'Css', C = 'HTML'}
