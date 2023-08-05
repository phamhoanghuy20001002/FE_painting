import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";


const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
    return (
        <HeroSlider
            height={"90vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),

            }}
        >


            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"

                background={{
                    backgroundImageSrc: giauPass
                }}
            />



            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"

                background={{
                    backgroundImageSrc: countyClare
                }}
            />

            <Slide
                shouldRenderMask
                label="Crater Rock, OR - United States"

                background={{

                    backgroundImageSrc: craterRock
                }}
            />
            <MenuNav />
        </HeroSlider>
    );
}
