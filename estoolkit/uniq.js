/** uniq는 배열에서 중복된 값을 제거하고 유니크한 값만 반환하는 함수 */
const { uniq, pick, groupBy, orderBy, toArray } = require("es-toolkit");

const arr = [1, 2, 2, 3, 1];
const result = uniq(arr); // [1, 2, 3]

const obj = { a: 1, b: 2, c: 3, d: { e: 4, f: 5 } };
const sub = pick(obj, ["a", "c", "d"]); // { a: 1, c: 3, d: { e: 4, f: 5 } }

/** geneder기준으로 그룹바이해서 리턴 */
const users = [
  { id: 1, name: "Alice", gender: "female", age: 28 },
  { id: 2, name: "Bob", gender: "male", age: 33 },
  { id: 3, name: "Carol", gender: "female", age: 24 },
  { id: 4, name: "Dave", gender: "male", age: 29 },
];

const orderByAge = orderBy(users, ["name", "age"], ["desc", "asc"]);
const groupByGender = groupBy(orderByAge, (item) => item.gender);
