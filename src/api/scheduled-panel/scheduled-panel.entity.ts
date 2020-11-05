import { User } from '@api/user/user.entity';

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
    interviewers: (Pick<User, 'id' | 'emails'> & {
        responseStatus: 'accepted' | 'declined' | 'needs_action' | 'tentative';
    })[];
}

export interface ScheduledPanel {
    id: string;
    applicationId: string;

    externalPanelId?: string;
    stageId?: string;
    jobId?: string;

    title: string;
    location?: string;
    candidateId: string;
    externalUrl?: string;
    status: 'confirmed' | 'canceled';
    scheduledEvents: ScheduledEvent[];
}
