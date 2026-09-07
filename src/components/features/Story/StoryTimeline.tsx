

import type { StoryTimelineProps } from "./StoryTimeline.types";

import { StoryGallery } from "./StoryGallery";

import { storyTimelineStyles } from "./StoryTimeline.styles";

import PathOne from "../../../assets/Caminho1.png";
import PathTwo from "../../../assets/Caminho2.png";
import PathThree from "../../../assets/Caminho3.png";
import PathFour from "../../../assets/Caminho4.png";
import PathFive from "../../../assets/Caminho5.png";

export function StoryTimeline({

    events,

    ...props

}: StoryTimelineProps) {

    return (

        <div
            className={storyTimelineStyles.container}
            {...props}
        >

            <div className={storyTimelineStyles.events}>

                {events.map((event, index) => (

                    <div
                        key={event.id}
                        className={storyTimelineStyles.eventWrapper}
                    >

                        <StoryGallery

                            photo={event.photo}

                            date={event.date}

                            title={event.title}

                            description={event.description}

                            layout={event.layout}

                        />

                        {index === 0 && (

                            <img
                                src={PathOne}
                                alt=""
                                className={storyTimelineStyles.pathOne}
                            />

                        )}
                        {index === 1 && (

                            <img
                                src={PathFive}
                                alt=""
                                className={storyTimelineStyles.pathTwo}
                            />

                        )}
                        {index === 2 && (

                            <img
                                src={PathFour}
                                alt=""
                                className={storyTimelineStyles.pathThree}
                            />

                        )}
                        {index === 3 && (

                            <img
                                src={PathTwo}
                                alt=""
                                className={storyTimelineStyles.pathFour}
                            />

                        )}
                        {index === 4 && (

                            <img
                                src={PathTwo}
                                alt=""
                                className={storyTimelineStyles.pathSix}
                            />

                        )}
                          {index === 5 && (

                            <img
                                src={PathOne}
                                alt=""
                                className={storyTimelineStyles.pathSeven}
                            />

                        )}
                        {index === 5 && (

                            <img
                                src={PathThree}
                                alt=""
                                className={storyTimelineStyles.pathEight}
                            />

                        )}
                        {index === 6 && (

                            <img
                                src={PathTwo}
                                alt=""
                                className={storyTimelineStyles.pathNine}
                            />

                        )}
                        {index === 7 && (

                            <img
                                src={PathFive}
                                alt=""
                                className={storyTimelineStyles.pathTeen}
                            />

                        )}
                         {index === 8 && (

                            <img
                                src={PathTwo}
                                alt=""
                                className={storyTimelineStyles.pathEleven}
                            />

                        )}
                       
                    </div>

                ))}

            </div>

        </div>

    );

}