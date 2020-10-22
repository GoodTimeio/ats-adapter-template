import { Application } from '@api/application/application.entity';
import { Email, File, Link, PhoneNumbers } from '@api/common.entity';

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
