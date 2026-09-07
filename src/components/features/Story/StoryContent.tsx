import { Stack } from "../../ui/Stack/Stack";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Typography } from "../../ui/Typography/Typography";

import type { StoryContentProps } from "./StoryContent.types";

import { storyContentStyles } from "./StoryContent.styles";

import StoryDivider from "../../../assets/linha.png";

export function StoryContent({

    title,

    subtitle,

    description,

    ...props

}: StoryContentProps) {

    return (

        <Stack

            spacing="lg"

            className={storyContentStyles.container}

            {...props}

        >

            <SectionTitle

                title={title}

                subtitle={subtitle}

                center={true}

            />

            <img

                src={StoryDivider}

                alt=""

                className={storyContentStyles.divider}

            />

            <Typography

                color="secondary"

                className={storyContentStyles.description}

            >

                {description}

            </Typography>

        </Stack>

    );

}