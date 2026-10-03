import type { LoginProps } from "./Login.types";

import { Card } from "../../ui/Card/Card";
import { Container } from "../../ui/Container/Container";
import { Stack } from "../../ui/Stack/Stack";

import { LoginFooter } from "./LoginFooter";
import { LoginForm } from "./LoginForm";
import { LoginHeader } from "./LoginHeader";

import { loginStyles } from "./Login.styles";

export function Login({

    title = "Área dos Noivos",

    subtitle,

    logo,

    loading,

    onSubmit

}: LoginProps) {

    return (

        <section className={loginStyles.section}>

            <Container className={loginStyles.container}>

                <Card>

                    <Stack spacing="xl">

                        <LoginHeader

                            title={title}

                            subtitle={subtitle}

                            logo={logo}

                        />

                        <LoginForm

                            loading={loading}

                            onSubmit={onSubmit}

                        />

                        <LoginFooter />

                    </Stack>

                </Card>

            </Container>

        </section>

    );

}