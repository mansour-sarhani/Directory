import React, { useState, useEffect, useCallback } from "react";
import { DotButton } from "./blogCarouselBtns";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import styles from "./embla.module.css";
import Image from "next/image";
import {blogSlidesByIndex} from "../../../public/carousel/blogMediaIndex";
import Link from "next/link";
import { TbClock } from "react-icons/tb";

const BlogCarousel = ( props ) => {
    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        skipSnaps: false,
    }, [Autoplay()])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState([])

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((index) => (
                        <div className={styles.embla__slide} key={index}>
                            <Image
                                className={styles.embla__slide__img}
                                src={blogSlidesByIndex(index)}
                                alt="blog-post"
                            />
                            <div className={styles.blog_slide_content}>
                                <div className={styles.blog_slide_category}>
                                    <Link href={'/'}>
                                        Category
                                    </Link>
                                </div>
                                <div className={styles.blog_slide_Title}>
                                    <Link href={'/'}>
                                        <h3>This will be the title for some sample post</h3>
                                    </Link>
                                </div>
                                <div className={styles.blog_slide_date}>
                                    <TbClock className="me-1" />
                                    3 Days ago
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla__dots}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
};

export default BlogCarousel;