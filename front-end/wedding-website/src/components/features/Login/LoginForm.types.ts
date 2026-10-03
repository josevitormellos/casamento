

export interface LoginFormProps {

    loading?: boolean;

    onSubmit: (email: string, password: string) => void;

}