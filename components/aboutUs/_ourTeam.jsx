import styles from './about.module.css'
import {Container} from "react-bootstrap";
import Image from "next/image";
import {teamData} from '/data/teamData'

function OurTeam() {
    return (
        <div className={styles.ourTeamWrapper}>
            <Container>
                <div className="sectionHeading">
                    <h5>Our Team</h5>
                </div>
                <div className={styles.ourTeamGrid}>
                    {teamData && teamData.map(member => (
                        <div key={member.id} className={styles.ourTeamItem}>
                            <div className={styles.ourTeamItemImg}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                />
                            </div>
                            <div className={styles.ourTeamItemContent}>
                            <span className={styles.ourTeamItemName}>
                                {member.name}
                            </span>
                                <span className={styles.ourTeamItemJob}>
                                {member.position}
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default OurTeam;