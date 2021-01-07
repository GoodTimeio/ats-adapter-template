import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'ScheduledPanel.extras', async: false })
export class ExtrasValidator implements ValidatorConstraintInterface {
    validate(extras: unknown): boolean {
        /* TODO: your custom validation logic for ScheduledPanel.extras goes here */
        return true;
    }

    defaultMessage(): string {
        return 'ScheduledPanel.extras was not a valid object';
    }
}
