import { useState } from "react";

import type { FormEvent } from "react";

import type { LoginFormProps } from "./LoginForm.types";

import { Button } from "../../ui/Button";
import { Input } from "../../ui/Input/Input";
import { Stack } from "../../ui/Stack/Stack";

import { loginFormStyles } from "./LoginForm.styles";

export function LoginForm({

    loading,

    onSubmit

}: LoginFormProps) {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function handleSubmit(

        event: FormEvent<HTMLFormElement>

    ) {

        event.preventDefault();

        onSubmit(

            email,

            password

        );

    }

    return (

        <form

            onSubmit={handleSubmit}

            className={loginFormStyles.form}

        >

            <Stack spacing="md">

                <Input

                    label="E-mail"

                    type="email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                />

                <Input

                    label="Senha"

                    type="password"

                    value={password}

                    onChange={(e) => setPassword(e.target.value)}

                />

            </Stack>

            <Button

                fullWidth

                loading={loading}

                type="submit"

            >

                Entrar

            </Button>

        </form>

    );

}