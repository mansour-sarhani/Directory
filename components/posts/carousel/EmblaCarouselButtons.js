import styles from "./embla.module.css";
import {TbArrowLeft, TbArrowRight} from "react-icons/tb";

const btnPrev = [styles.embla__button, styles.embla__button__prev].join(" ")
const btnNext = [styles.embla__button, styles.embla__button__next].join(" ")

export const PrevButton = ({ enabled, onClick }) => (
    <button
        className={btnPrev}
        onClick={onClick}
        disabled={!enabled}
    >
        <TbArrowLeft />
    </button>
);

export const NextButton = ({ enabled, onClick }) => (
    <button
        className={btnNext}
        onClick={onClick}
        disabled={!enabled}
    >
        <TbArrowRight />
    </button>
);