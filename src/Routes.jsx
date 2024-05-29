import SignUp from "./shared/auth/register/SignUp";
import { createBrowserRouter } from "react-router-dom";
import SignUpAttendee from "./shared/auth/register/SignUpAttendee";
import SignUpOrganizer from "./shared/auth/register/SignUpOrganizer";
import RegisterContextProvider from "./shared/auth/context/Register";
import Home from "./components/pages/HomePage";
import AdminLayout from "./components/layouts/AdminLayout";
import MainLayout from "./components/layouts/MainLayout";
import NotFoundPage from "./components/pages/NotFoundPage";
import EventPage from "./components/pages/EventPage";
import OrganizerProfile from "./components/pages/OrganizerProfilePage.jsx";
import CreateEvetnPage from "./components/pages/CreateEvetnPage";
import Login from "./shared/auth/login/Login.jsx";
import ProtectedLogin from "./shared/auth/login/protectedLogin.jsx";
import VerificationRequest from "./components/pages/VerificationRequestPage.jsx";
import ReportTable from "./components/other/AdminDashboardComponents/ReportTable.jsx";
import AttendeeRequestTable from "./components/other/AdminDashboardComponents/AttendeeRequestTable.jsx";
import OrganizerRequestsData from "./components/other/AdminDashboardComponents/OrganizerRequestsData.jsx";
import AttendeeProfilePage from "./components/pages/AttendeeProfilePage.jsx";
import AllAttendeesTable from "./components/other/AdminDashboardComponents/AllAttendeesTable.jsx";
import AllOrganizersTable from "./components/other/AdminDashboardComponents/AllOrganizersTable.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "event/:eventId",
        element: <EventPage />,
      },
      {
        path: "organizer-profile/:userName",
        element: <OrganizerProfile />,
      },
      {
        path: "attendee-profile/:userName",
        element: <AttendeeProfilePage />,
      },
      {
        path: "events/create",
        element: <CreateEvetnPage />,
      },
      {
        path: "verification",
        element: <VerificationRequest />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "reports",
        element: <ReportTable />,
      },
      {
        path: "iv-request/attendee",
        element: <AttendeeRequestTable />,
      },
      {
        path: "iv-request/organizer",
        element: <OrganizerRequestsData />,
      },
      {
        path: "attendees",
        element: <AllAttendeesTable />,
      },
      {
        path: "organizers",
        element: <AllOrganizersTable />,
      },
    ],
  },
  {
    path: "register",
    element: (
      <RegisterContextProvider>
        <SignUp />
      </RegisterContextProvider>
    ),
  },
  {
    path: "login",
    element: (
      <ProtectedLogin>
        <Login />
      </ProtectedLogin>
    ),
  },
  {
    path: "attendee",
    element: (
      <RegisterContextProvider>
        <SignUpAttendee />
      </RegisterContextProvider>
    ),
  },
  {
    path: "eventorganizer",
    element: (
      <RegisterContextProvider>
        <SignUpOrganizer />
      </RegisterContextProvider>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
