import { Notes } from "./notes";

export const NavStructure = [
    {
        name: 'ITIL Fundamentals',
        type: 'folder',
        children: [
            Notes.WhatIsItil,
            Notes.FiveStages,
            {
                name: 'Stage 1 - Service Strategy',
                type: 'folder',
                children: [
                    Notes.ServiceStrategy,
                    Notes.ServiceStrategyProcesses,
                    // {
                    //     name: 'Processes of Stage 1',
                    //     type: 'folder',
                    //     children: [],
                    // },
                ],
            },
            {
                name: 'Stage 2 - Service Design',
                type: 'folder',
                children: [
                    Notes.ServiceDesign,
                    Notes.RACI,
                    {
                        name: 'Processes of Stage 2',
                        type: 'folder',
                        children: [
                            Notes.AvailabilityManagement,
                            Notes.CapacityManagement,
                            Notes.InformationSecurityManagement,
                            Notes.ITSCM,
                            Notes.ServiceCatalogManagement,
                            Notes.SLM,
                            Notes.SupplierManagement,
                        ],
                    },
                ],
            },
            {
                name: 'Stage 3 - Service Transition',
                type: 'folder',
                children: [
                    Notes.ServiceTransition,
                    {
                        name: 'Processes of Stage 3',
                        type: 'folder',
                        children: [
                            Notes.ChangeEvaluation,
                            Notes.ChangeManagement,
                            Notes.KnowledgeManagement,
                            Notes.ReleaseDeploymentManagment,
                            Notes.SACM,
                            Notes.ServiceValidationTesting,
                            Notes.TransitionPlanningSupport,
                        ],
                    },
                ],
            },
            {
                name: 'Stage 4 - Service Operations',
                type: 'folder',
                children: [
                    Notes.ServiceOperations,
                    {
                        name: 'Functions of Stage 4',
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
            {
                name: 'Stage 5 - Continual Service Improvement',
                type: 'folder',
                children: [],
            },
        ]
    }
]