import { Email, PhoneNumbers } from '@api/common.entity';

export interface User {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    givenName: string;
    familyName: string;
    nickname?: string;
    title?: string;
    photoUrl?: string;
    emails: Email[];
    phoneNumbers?: PhoneNumbers[];
    status?: 'active' | 'archived';
}
