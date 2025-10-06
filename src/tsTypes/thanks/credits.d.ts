export interface Technology {
    id: string;
    name: string;
    type: string;
    purpose: string;
    description: string;
    link: string;
    icon: string;
    tags: string[];
}

export interface TechnologyCategory {
    id: string;
    name: string;
    emoji: string;
    description: string;
    color: string;
}

export interface TechnologiesData {
    category: TechnologyCategory;
    members: Technology[];
}
