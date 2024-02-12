const arr = [1, 3, 4, 5];
const result = arr.reduce((x, y) => {
  console.log(x);
  return x + y;
}, 0);

console.log(result);

const adminPathsRouts2 = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "AdminDashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CreateFaculty",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent",
      },
    ],
  },
];

export const adminRoutes = adminPathsRouts2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.path,
      label: "Navlink",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: "Navlink",
      children: item.children.map((child) => ({
        key: child.path,
        label: "Navlink",
      })),
    });
  }
  return acc;
}, []);
