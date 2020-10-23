export interface InterviewStep {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    status: 'active' | 'archived';
    duration?: number;
    groupId?: string;
    groupNumber?: string;
    scorecard?: {
        name: string;
        url: string;
    };
}
