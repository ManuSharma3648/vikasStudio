import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import WeddingPhotographyPage from "@/pages/WeddingPhotographyPage";
import PreWeddingPage from "@/pages/PreWeddingPage";
import WeddingFilmsPage from "@/pages/WeddingFilmsPage";
import StudioPortraiturePage from "@/pages/StudioPortraiturePage";
import PhotoGiftsPage from "@/pages/PhotoGiftsPage";
import PhotoFramesPage from "@/pages/PhotoFramesPage";

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--studio-cream)]"
      style={{ fontFamily: "'Cinzel', 'Georgia', serif" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--studio-blue)] mb-4">404</h1>
        <p className="text-[var(--studio-blue-light)] mb-4">Page not found</p>
        <a href="/" className="btn-gold px-6 py-2.5 rounded-full text-[var(--studio-blue)] font-semibold text-sm inline-block">
          Return Home
        </a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/wedding-photography" component={WeddingPhotographyPage} />
      <Route path="/services/pre-wedding" component={PreWeddingPage} />
      <Route path="/services/wedding-films" component={WeddingFilmsPage} />
      <Route path="/services/studio-portraiture" component={StudioPortraiturePage} />
      <Route path="/services/photo-gifts" component={PhotoGiftsPage} />
      <Route path="/services/photo-frames" component={PhotoFramesPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
