enum Category1 { JavaScript, CSS, HTML }
enum Category2 { JavaScript = 1, CSS, HTML }
enum Category3 { JavaScript = 5, CS8= 8, HTML = 9 }

let favoriteCategory: Category3 = Category3.JavaScript;
console.log(favoriteCategory); // 5


enum CategoryString { A = 'JavaScript', B = 'Css', C = 'HTML'}
let categoryString = Category3[favoriteCategory];
console.log(categoryString); // JavaScript
