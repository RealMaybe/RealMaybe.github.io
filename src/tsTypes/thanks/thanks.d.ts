export interface Person {
    name: string;
    role: string;
    contribution: string;
    period: string;
}

export interface Technology {
    name: string;
    purpose: string;
    link: string;
}

export interface Source {
    name: string;
    type: string;
    reason: string;
}

export interface AcknowledgementTier {
    level: number;
    title: string;
    description: string;
    icon: string;
    people?: Person[];
    technologies?: Technology[];
    sources?: Source[];
}

export interface AcknowledgmentsData {
    acknowledgments: AcknowledgementTier[];
    lastUpdated: string;
    version: string;
}
