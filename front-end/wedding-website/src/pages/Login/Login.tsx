import { Login as LoginFeature} from "../../components/features/Login/Login";

import { loginPageStyles } from "./Login.styles";

export function Login() {

    function handleSubmit(

        email: string,

        password: string

    ) {

        console.log({

            email,

            password

        });

    }

    return (

        <main className={loginPageStyles.container}>

            <LoginFeature

                loading={false}

                onSubmit={handleSubmit}

            />

        </main>

    );

}