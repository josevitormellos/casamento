export interface GodParentCouple {

    id: number;

    groomName: string;

    brideName: string;

    groomPhoto: string;

    bridePhoto: string;

    message?: string;

}

export interface GodParentsProps {

    title?: string;

    subtitle?: string;

    couples: GodParentCouple[];

}