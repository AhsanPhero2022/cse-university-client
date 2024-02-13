import FacultyDashboard from "../pages/faculty/Faculty.Dashboard";
import OfferedCourse from "../pages/faculty/OfferedCoursed";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
