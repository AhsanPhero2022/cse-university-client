const arr = [1, 3, 4, 5];
const result = arr.reduce((x, y) => {
  console.log(x);
  return x + y;
}, 0);

console.log(result);

// type TRoute = {
//   path: string,
//   element: ReactNode,
// };

// const adminPathsRouts2 = [
//   {
//     name: "Dashboard",
//     path: "/admin/dashboard",
//     element: <AdminDashboard />,
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "Create Admin",
//         path: "create-admin",
//         element: <CreateAdmin />,
//       },
//       {
//         name: "Create Faculty",
//         path: "create-faculty",
//         element: <CreateFaculty />,
//       },
//       {
//         name: "Create Student",
//         path: "create-student",
//         element: <CreateStudent />,
//       },
//     ],
//   },
// ];

// export const adminRoutes = adminPathsRouts2.reduce((acc: TRoute[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);
