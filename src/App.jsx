import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import AnnouncementsView from "./pages/Announcement/AnnouncementsView";
import AnnouncementAdd from "./pages/Announcement/AnnouncementAdd";
import AnnouncementDetails from "./pages/Announcement/AnnouncementDetails";
import AnnouncementEdit from "./pages/Announcement/AnnouncementEdit";
import TutorialsView from "./pages/Tutorial/TutorialsView";
import TutorialEdit from "./pages/Tutorial/TutorialEdit";
import ProjectsView from "./pages/Projects/ProjectsView";
import ProjectDetails from "./pages/Projects/ProjectDetails";
import ProjectAdd from "./pages/Projects/ProjectAdd";
import ProjectEdit from "./pages/Projects/ProjectEdit";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu"
function App() {

  return (
    <>
      <Menu />
      <Routes className="app-margin">
        <Route index element={<Home />} />
        <Route path="/announcements" element={<AnnouncementsView />} />
        <Route path="/announcement-add" element={<AnnouncementAdd />} />
        <Route path="/announcement/:annId" element={<AnnouncementDetails />} />
        <Route path="/announcement/-edit/:annId" element={<AnnouncementEdit />} />
        <Route path="/tutorials" element={<TutorialsView />}>
          <Route path="-edit/:tutId" element={<TutorialEdit />} />
        </Route>
        <Route path="/projects" element={<ProjectsView />} >
          <Route path="-add" element={<ProjectAdd />} />
          <Route path="-edit/:projId" element={<ProjectEdit />} />
        </Route>
        <Route path="/projects/:projId" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
