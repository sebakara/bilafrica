import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/App";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ServicesPage from "@/app/services/page";
import TechnologyPage from "@/app/services/technology/page";
import AiDataPage from "@/app/services/ai-data/page";
import BlockchainPage from "@/app/services/blockchain/page";
import AdvisoryPage from "@/app/services/advisory/page";
import ResearchPolicyPage from "@/app/services/research-policy/page";
import CybersecurityPage from "@/app/services/cybersecurity/page";
import LabsPage from "@/app/labs/page";
import EcosystemPage from "@/app/ecosystem/page";
import IndustriesPage from "@/app/industries/page";
import InsightsPage from "@/app/insights/page";
import InsightPage from "@/app/insights/[slug]/page";
import CareersPage from "@/app/careers/page";
import ContactPage from "@/app/contact/page";
import PrivacyPage from "@/app/privacy/page";
import TermsPage from "@/app/terms/page";
import NotFound from "@/app/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "services/technology", element: <TechnologyPage /> },
      { path: "services/ai-data", element: <AiDataPage /> },
      { path: "services/blockchain", element: <BlockchainPage /> },
      { path: "services/advisory", element: <AdvisoryPage /> },
      { path: "services/research-policy", element: <ResearchPolicyPage /> },
      { path: "services/cybersecurity", element: <CybersecurityPage /> },
      { path: "labs", element: <LabsPage /> },
      { path: "ecosystem", element: <EcosystemPage /> },
      { path: "industries", element: <IndustriesPage /> },
      { path: "insights", element: <InsightsPage /> },
      { path: "insights/:slug", element: <InsightPage /> },
      { path: "careers", element: <CareersPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
