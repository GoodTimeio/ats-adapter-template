import { Email, PhoneNumbers } from 'src/entities/common';

export interface User {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    raw?: unknown;
    givenName: string;
    familyName: string;
    nickname?: string;
    title?: string;
    photoUrl?: string;
    emails: Email[];
    phoneNumbers?: PhoneNumbers[];
    status: 'active' | 'archived';
    settings?: Record<string, unknown>;
}
