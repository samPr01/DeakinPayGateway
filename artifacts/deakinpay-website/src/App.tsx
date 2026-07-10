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
import { PartnerPage } from './pages/PartnerPage';

const queryClient = new QueryClient();

function HomePage() {
  return (
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
  );
}

function App() {
  const path = window.location.pathname;
  const isPartner = path === '/partner' || path.endsWith('/partner');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isPartner ? <PartnerPage /> : <HomePage />}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
