import { interestAreas } from "../contact";
import { insightCategories } from "../insights";
import { advisoryHighlights, africaThemes, audiences, capabilities, engagementModels, labSteps, principles, researchFormats, technologyAreas, values } from "./home";
import { footerNavigation, researchMenu, whatWeDoMenu } from "./navigation";
import {
  advisoryGroups,
  aiGroups,
  blockchainFits,
  blockchainGroups,
  blockchainMisfits,
  cybersecurityOfferings,
  ecosystemPrograms,
  evaluationCriteria,
  labDomains,
  labLifecycle,
  labServices,
  researchGroups,
  responsibleAi,
  technologyGroups,
} from "./capabilities";
import { industries } from "./industries";
import { chrome } from "./chrome";
import { pages } from "./pages";

export const siteDocument = {
  site: {
    name: "Blockchain & Innovation Landscape",
    shortName: "BIL",
    slogan: "Build. Research. Advise. Innovate.",
    description:
      "Blockchain & Innovation Landscape is an emerging-technology company building digital solutions, conducting applied research, advising institutions and developing innovation ecosystems.",
    positioning:
      "An emerging-technology company building digital solutions, conducting applied research, advising institutions, and developing innovation ecosystems.",
    intersection: "Technology at the intersection of engineering, research, policy and innovation.",
  },
  navigation: {
    whatWeDoMenu,
    researchMenu,
    footerNavigation,
  },
  home: {
    principles,
    capabilities,
    technologyAreas,
    labSteps,
    advisoryHighlights,
    researchFormats,
    audiences,
    africaThemes,
    values,
    engagementModels,
  },
  capabilities: {
    technologyGroups,
    aiGroups,
    responsibleAi,
    blockchainFits,
    blockchainMisfits,
    blockchainGroups,
    evaluationCriteria,
    cybersecurityOfferings,
    advisoryGroups,
    researchGroups,
    labDomains,
    labLifecycle,
    labServices,
    ecosystemPrograms,
  },
  industries,
  catalog: {
    insightCategories,
    interestAreas,
  },
  chrome,
  pages,
};

export type SiteDocument = typeof siteDocument;
