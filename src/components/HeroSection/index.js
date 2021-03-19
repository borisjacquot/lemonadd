import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowRight,
    ArrowForward
} from "./HeroElement";
import { Button } from "../ButtonElement";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Make the graphics great again</HeroH1>
                <HeroP>
                    I don't know what to say but lorem ipsum
                    is too mainstream
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="projects" onMouseEnter={onHover} onMouseLeave={onHover} >
                        Discover my projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
