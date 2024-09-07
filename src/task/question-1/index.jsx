import { Users } from "./user-datas.jsx";

/**
 * Q1:
 */
function sortUserName(users) {
  users.sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName} ${a.customerID}`;
    const nameB = `${b.firstName} ${b.lastName} ${b.customerID}`;
    return nameA.localeCompare(nameB);
  });
  console.log(users);
}
sortUserName(Users);

/**
 * Q2: 根據 'profession' 進行排序
 */
function sortByType(users) {
  const professionOrder = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  users.sort((a, b) => {
    return professionOrder[a.profession] - professionOrder[b.profession];
  });
  console.log(users);
}
sortByType(Users);
