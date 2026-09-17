export interface Confirmation {
    id?: number;
    name: string;
    phone: string;
    email: string;
    hasDietaryRestriction: boolean;
    dietaryRestriction?: string;
    shoeSize?: string;
    message?: string;
    confirmedAt?: Date;
}