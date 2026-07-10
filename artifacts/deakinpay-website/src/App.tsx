import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DMTSection } from './components/DMTSection';
import { RetailerSection } from './components/RetailerSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="font-sans text-foreground bg-background min-h-screen">
          <Navbar />
          <main>
            <HeroSection />
            <DMTSection />
            <RetailerSection />
            <HowItWorksSection />
            <WhyChooseSection />
            <CTASection />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
