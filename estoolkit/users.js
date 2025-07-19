const { groupBy, orderBy } = require("es-toolkit");
const { reduce } = require("es-toolkit/compat");
/**
요구사항
성별(gender) 기준 그룹핑
각 그룹별로 평균 나이도 함께 구하라.

평균 나이 기준 내림차순 정렬
즉, 평균 나이가 더 많은 성별 그룹이 먼저 오도록

[
  { gender: "male",   avgAge: 29.67, users: [ ...남자들... ] },
  { gender: "female", avgAge: 27.33, users: [ ...여자들... ] }
]
 */
const users = [
  { id: 1, name: "Alice", gender: "female", age: 28 },
  { id: 2, name: "Bob", gender: "male", age: 33 },
  { id: 3, name: "Carol", gender: "female", age: 24 },
  { id: 4, name: "Dave", gender: "male", age: 29 },
  { id: 5, name: "Emma", gender: "female", age: 30 },
  { id: 6, name: "Frank", gender: "male", age: 27 },
];

const usersByGender = groupBy(users, (user) => user.gender);
const sumAges = (inputUsers) => {
  return reduce(inputUsers, (acc, cur) => acc + cur.age, 0);
};
const formatNumber = (target, { toFixed = 2 }) => {
  return Number(target.toFixed(toFixed));
};

const genderGroupsWithAvgAge = Object.entries(usersByGender).map(
  ([gender, users]) => {
    return {
      gender,
      users,
      avgAge: formatNumber(sumAges(users) / users.length, { toFixed: 2 }),
    };
  }
);
const orderByAvgAge = orderBy(genderGroupsWithAvgAge, ["avgAge"], ["desc"]);
console.log("🚀 ~ orderByAvgAge:", orderByAvgAge);
