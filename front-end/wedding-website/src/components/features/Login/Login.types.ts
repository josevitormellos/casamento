export interface LoginProps {

    title?: string;

    subtitle?: string;

    logo?: string;

    loading?: boolean;

    onSubmit: (email: string, password: string) => void;

}