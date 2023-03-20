export interface ITag {
    id: string;
    name: string;
    description: string;
  }
  
  export interface IUseCase {
    id: string;
    moduleId: string;
    tagIds: string[];
    name: string;
    currentState: ECurrentState;
    neededFrsToWorkIds: string[];
    useCasesPipelineIds: string[];
    relatedFiles: IFile[];
    relatedLinks: ILink[];
    relatedImages: IImage[];
  }
  
  export interface INestedUseCase {
    id: string;
    moduleId: string;
    tagIds: string[];
    name: string;
    currentState: ECurrentState;
    neededFrsToWorkIds: string[];
    parentUseCaseId: string;
    useCasesPipelineIds: string[];
    relatedFiles: IFile[];
    relatedLinks: ILink[];
    relatedImages: IImage[];
  }
  
  export interface IFunctionalRequirement {
    id: string;
    moduleId: string;
    tagIds: string[];
    name: string;
    currentState: ECurrentState;
    frDependencies: string[];
    relatedFiles: IFile[];
    relatedLinks: ILink[];
    relatedImages: IImage[];
  }
  
  export interface IComponent {
    id: string;
    moduleId: string;
    tagIds: string[];
    name: string;
    currentState: ECurrentState;
    useCases: string[];
    nestedUseCases: string[];
    relatedFiles: IFile[];
    relatedLinks: ILink[];
    relatedImages: IImage[];
  }
  
  export interface IModule {
    id: string;
    name: string;
    useCases: IUseCase[];
    nestedUseCases: INestedUseCase[];
    functionalRequirements: IFunctionalRequirement[];
    components: IComponent[];
  }
  
  export interface IUcfrLists {
    tags: ITag[];
    modules: IModule[];
  }
  
  export enum ECurrentState {
    inProgress = "In Progress",
    completedPendingApproval = "Completed - Pending Approval",
    readyToImplement = "Ready to Implement",
  }
  
  export interface IFile {
    id: string;
    name: string;
    file: File;
  }
  
  export interface ILink {
    id: string;
    url: string;
    description: string;
  }
  
  export interface IImage {
    id: string;
    url: string;
    altText: string;
  }
  
  // RFN Provider
  export enum EUcfrListsTypes {
    useCases = "Use Cases",
    nestedUseCases = "Nested Use Cases",
    functionalRequirements = "Functional Requirements",
    components = "Components",
  }
  
  export const UcfrListsTypes: EUcfrListsTypes[] = [
    EUcfrListsTypes.useCases,
    EUcfrListsTypes.nestedUseCases,
    EUcfrListsTypes.functionalRequirements,
    EUcfrListsTypes.components,
  ];
  