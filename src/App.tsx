import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import { lazy, Suspense } from "react";

const Toaster = lazy(() => import("@/components/ui/toaster").then(module => ({ default: module.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(module => ({ default: module.Toaster })));

const App = () => (
  <TooltipProvider>
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
    </Suspense>
    <Index />
  </TooltipProvider>
);

export default App;
