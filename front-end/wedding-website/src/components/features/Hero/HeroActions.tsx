import { Button } from "../../ui/Button";
import { Stack } from "../../ui/Stack/Stack";
export function HeroActions() {

    return (

        <Stack

            direction="row"

            spacing="md"

            justify="center"

            wrap

        >

            <Button>

                Confirmar Presença

            </Button>

            <Button variant="secondary">

                Lista de Presentes

            </Button>

        </Stack>

    );

}