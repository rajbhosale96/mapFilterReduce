// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => [{name: "Bob", age: 35}]
const filterAdults = people => people.filter(person => person.age > 30);

// active users [{username: "alice", active: true}, {username: "bob", active: false}] => [{username: "alice", active: true}]
const filterActiveUsers = users => users.filter(user => user.active);

// books with more than 200 pages [{title: "Book 1", pages: 150}, {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = books => books.filter(book => book.pages > 200);

// users with incomplete profiles [{username: "alice", profileComplete: true}, {username: "bob", profileComplete: false}] => [{username: "bob", profileComplete: false}]
const filterIncompleteProfiles =
  users => users.filter(user => !user.profileComplete);

// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades =
  students => students.filter(student => student.grade > 80);

// products that are in stock [{product: "apple", inStock: true}, {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts =
  products => products.filter(product => product.inStock);

// products with a price lower than the average [{name: "item1", price: 10}, {name: "item2", price: 20}, {name: "item3", price: 5}] => [{name: "item1", price: 10}, {name: "item3", price: 5}]
const sumOfPrices = ((sum, product) => sum + product.price);
const filterBelowAveragePrice = function (products) {
  const sum = products
    .map(({ price }) => price)
    .reduce((a, b) => a + b, 0);
  const averagePrice = sum / products.length;

  return products.filter(product => product.price < averagePrice);
};

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const isPassed = (subject) => subject.passed;

const filterStudentsWithAllSubjectsPassed = function (students) {
  return students.filter(student => student.subject.every(isPassed));
};

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const sumOfAmount = (sumOf, order) => sumOf + order.amount;

const filterHighValueOrders = function (orders) {
  const sum = orders.reduce(sumOfAmount, 0);
  const averagePrice = sum / orders.length;

  return orders.filter(order => order.amount > averagePrice);
};
