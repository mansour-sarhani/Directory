import styles from './countries.module.css'
import {Container} from "react-bootstrap";
import Image from "next/image";
import { TbCircleCheck } from "react-icons/tb";
import {useEffect, useState} from "react";

const countries = [
    {id: 'gb', name: 'United Kingdom'},
    {id: 'us', name: 'United States'},
    {id: 'dk', name: 'Denmark'},
    {id: 'is', name: 'Iceland'},
    {id: 'it', name: 'Italy'},
    {id: 'co', name: 'Columbia'},
    {id: 'cu', name: 'Cuba'},
    {id: 'no', name: 'Norway'},
    {id: 'ar', name: 'Argentina'},
]

function CountriesGrid() {

    const [activeCountry, setActiveCountry] = useState('gb');

    useEffect(() => {
        setActiveCountry(activeCountry)
        console.log(activeCountry)
    }, [activeCountry]);

    return (
        <div className={styles.countriesWrapper}>
            <Container>
                <div className={styles.countriesGrid}>
                    {countries.map(country => (
                        <div className={styles.countryGridItem} key={country.id} onClick={() => setActiveCountry(country.id)}>
                            <div className={styles.countryGridItemImg}>
                                <Image
                                    src={`/flags/${country.id}.png`}
                                    alt={country.id}
                                    fill
                                />
                            </div>
                            <h5>{country.name}</h5>
                            {activeCountry === country.id && <span><TbCircleCheck /> selected</span>}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default CountriesGrid;