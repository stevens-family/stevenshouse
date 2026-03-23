import { useEffect } from "react";
import "@/App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import PhotosPage from "./pages/PhotosPage";
import UploadPage from "./pages/UploadPage";
import DinnerPage from "./pages/DinnerPage";
import ClosetPage from "./pages/ClosetPage";
import FindItemsPage from "./pages/FindItemsPage";
import RecipesPage from "./pages/RecipesPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import FinancePage from "./pages/FinancePage";

function App() {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then((registration) => {
            console.log('SW registered:', registration);
          })
          .catch((error) => {
            console.log('SW registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <div className="App font-body">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/dinner" element={<DinnerPage />} />
          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/find-items" element={<FindItemsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/finance" element={<FinancePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
