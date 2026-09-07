export interface PurposeValue {

    id: number;

    title: string;

    description: string;

    icon?: React.ReactNode;

}

export interface PurposeProps {

    title?: string;

    subtitle?: string;

    image?: string;

    content: string;

    values?: PurposeValue[];

}