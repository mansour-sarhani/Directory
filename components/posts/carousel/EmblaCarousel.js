import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "./media";
import styles from "./embla.module.css";
import Image from "next/image";

const EmblaCarousel = ({ slides }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        align: "center",
        skipSnaps: false,
        loop: true
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={viewportRef}>
                <div className={styles.embla__container}>
                    {slides.map((index) => (
                        <div className={styles.embla__slide} key={index}>
                            <div className={styles.embla__slide__inner}>
                                <Image
                                    src={mediaByIndex(index)}
                                    alt='slider'
                                    fill
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </div>
    );
};

export default EmblaCarousel;