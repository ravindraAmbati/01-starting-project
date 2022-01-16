import react from "react";
import styles from './Button2.module.css';

const Button2 = props => {
    return(
        <button type={props.type} onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    );
};

export default Button2;