import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import { lazy, Suspense } from "react";

const Toaster = lazy(() => import("@/components/ui/toaster").then(module => ({ default: module.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(module => ({ default: module.Toaster })));

const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-blue-600 font-medium">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <TooltipProvider>
    <Suspense fallback={<LoadingSpinner />}>
      <Toaster />
      <Sonner />
      <Index />
    </Suspense>
  </TooltipProvider>
);

export default App;
