import { Notes } from "./notes";

export const NavStructure = [
  Notes.WhatIsItil,
  {
    note: Notes.FiveStages,
    type: 'folder',
    children: [
      {
        note: Notes.ServiceStrategy,
        type: 'folder',
        children: [
          Notes.ServiceManagement,
          Notes.FinancialManagement,
          Notes.ServicePortfolioManagement,
          Notes.DemandManagement,
          Notes.BusinessRelationshipManagement,
        ],
      },
      {
        note: Notes.ServiceDesign,
        type: 'folder',
        children: [
          Notes.SLM,
          Notes.ServiceCatalogManagement,
          Notes.CapacityManagement,
          Notes.AvailabilityManagement,
          Notes.ITSCM,
          Notes.InformationSecurityManagement,
          Notes.SupplierManagement,
        ],
      },
      {
        note: Notes.ServiceTransition,
        type: 'folder',
        children: [
          Notes.ChangeManagement,
          Notes.ChangeEvaluation,
          Notes.TransitionPlanningSupport,
          Notes.ReleaseDeploymentManagment,
          Notes.ServiceValidationTesting,
          Notes.SACM,
          Notes.KnowledgeManagement,
        ],
      },
      {
        note: Notes.ServiceOperations,
        type: 'folder',
        children: [
          Notes.AccessManagement,
          Notes.ApplicationManagement,
          Notes.EventManagement,
          Notes.IncidentManagement,
          Notes.ServiceOperationFunctions,
          Notes.ITOperationsManagement,
          Notes.PriorityMatrix,
          Notes.ProblemManagement,
          Notes.RequestFulfillment,
          Notes.ServiceDesk,
          Notes.TechnicalManagement
        ],
      },
    ],
  },
  Notes.RACI,
]