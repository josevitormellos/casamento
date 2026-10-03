import { Container } from "../../ui/Container/Container";
import { Section } from "../../ui/Section/Section";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import type { RSVPProps } from "./RSVP.types";
import { RSVPForm } from "./RSVPForm";
import { rsvpStyles } from "./RSVP.styles";
export function RSVP({

    title = "Confirme sua Presença",

    subtitle = "Sua confirmação é muito importante para nós.",

    loading,

    maxGuests = 3,

    onSubmit

}: RSVPProps) {

    return (

        <Section background="paper">

            <Container>

                <div className={rsvpStyles.container}>

                    <SectionTitle

                        title={title}

                        subtitle={subtitle}

                    />

                    <div className={rsvpStyles.card}>

                        <RSVPForm

                            loading={loading}

                            maxGuests={maxGuests}

                            onSubmit={onSubmit}

                        />

                    </div>

                </div>

            </Container>

        </Section>

    );

}