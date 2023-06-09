import Image from "next/image"
import styles from "../styles/About.module.css"

export const About = () => {
	return (
		<div className={styles.about}>
			<h1>Sobre o projeto</h1>
			<p>projeto utilizando next.js</p>
			<Image src='/images/charizard.png' alt='charizard' width={300} height={300} />
		</div>
	)
}

export default About
