import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            {/** https://avatars.githubusercontent.com/u/43218096?s=460&amp;u=566228342b9db6d2129ebf93573273de8d695193&amp;v=4 */}
            {/**https://github.com/diego3g.png */}
            <img src="perfil.png" alt='Nome Usuario' />

            <div>
                <strong>Nome Usuario</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>


        </div>
    );
}