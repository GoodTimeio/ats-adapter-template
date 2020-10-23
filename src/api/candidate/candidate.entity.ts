import { Application } from '@api/application/application.entity';
import { Email, File, PhoneNumbers } from '@api/common.entity';

interface Link {
    type: string;
    value: string;
}

export interface Candidate {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    givenName: string;
    familyName: string;
    nickname?: string;
    title?: string;
    company?: string;
    photoUrl?: string;
    emails: Email[];
    phoneNumbers?: PhoneNumbers[];
    links?: Link[];
    status?: 'active';
    atsUrl: string;
    applications: Application[];
    files?: File[];
}
