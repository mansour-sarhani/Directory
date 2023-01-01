import styles from "./embla.module.css";

export const DotButton = (props) => {
    const { selected, onClick } = props

    return (
        <button
            className={`${styles.embla__dot} ${selected ? styles.embla__dot__selected : ''}`}
            type="button"
            onClick={onClick}
        />
    )
}