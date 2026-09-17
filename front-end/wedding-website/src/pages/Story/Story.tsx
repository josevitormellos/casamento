import { Story as StoryFeature} from "../../components/features/Story/Story";

import { storyPageStyles } from "./Story.styles";

export function Story() {

    return (

        <main className={storyPageStyles.container}>

            <StoryFeature/>

        </main>

    );

}