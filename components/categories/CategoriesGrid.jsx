import styles from './categories.module.css'
import {Container} from "react-bootstrap";
import {categoriesData} from '/data/categoriesData'
import CategoryItem from "./CategoryItem";

function CategoriesGrid() {
    return (
        <div className={styles.categoriesWrapper}>
            <Container>
                <div className={styles.categoriesGrid}>
                    {categoriesData && categoriesData.map(category => (
                        <CategoryItem category={category} key={category.id} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default CategoriesGrid;