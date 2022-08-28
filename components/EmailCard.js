import React,{ useState} from "react";
import styles from "../styles/Home.module.css";


const EmailCard = () => {
    const [isBeingHovered, setBeingHovered] = useState(true);
    const heading_text = isBeingHovered ? "Send Email" : "Here's my email ";
    const small_text = isBeingHovered ? "Want to work together or have something for me ?" : "Send an email to: contact@akashdeepshukla.in";
    const heading = <> {heading_text} &darr; </>;
    const text = small_text

    const link = <a
        onMouseEnter={() => {
            setBeingHovered(false)
        }}
        onMouseLeave={() => {
            setBeingHovered(true);
        }}
        href="mailto:contact@akashdeepshukla.in"
        className={styles.cardEmails}
        target="_blank"
        rel="noreferrer">
        <h2> {heading} </h2>
        <p> {text} </p>
    </a>

    return { ...link }


}


export default EmailCard;