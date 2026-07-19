import styles from './Header.module.css'; //importar como objeto

function Header(){
    return(
    <header className={styles.header}>
        <h1>Florecitas</h1>
    </header>
    );
}
export default Header;
