export interface ScheduledEvent {
    id: string;
    scheduledPanelId: string;
    title: string;
    startTime: string;
    endTime: string;
    location?: string;
    status: 'confirmed' | 'canceled';
    interviewStepId?: string;
    externalEventId?: string;
    interviewers: {
        id?: string;
        email?: string;
        responseStatus: 'accepted' | 'declined' | 'needsAction' | 'tentative';
        scorecardUrl?: string;
    }[];
}

export interface ScheduledPanel {
    id: string;
    raw?: unknown;
    applicationId: string;

    externalPanelId?: string;
    stageId?: string;
    jobId?: string;

    title: string;
    location?: string;
    candidateId?: string;
    externalUrl?: string;
    status: 'confirmed' | 'canceled';
    scheduledEvents: ScheduledEvent[];

    // an object field. whatever you want.
    // don't forget to write a custom DTO validator in scheduled-panel.dto.ts for extras afterward!
    extras: unknown;
}
