export interface Gift {
    id: number;

    image: string;

    title: string;

    description: string;

    price: number;
}

export interface GiftsProps {
    gifts: Gift[];
}