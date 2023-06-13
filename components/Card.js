import Link from "next/link"
import styles from "../styles/Car.module.css"

export const Card = ({ pokemon }) => {
	return (
		<div className={styles.card}>
			<p className={styles.id}>#{pokemon.id}</p>
			<h3 className={styles.title}>{pokemon.name}</h3>
			<Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
				Detalhes
			</Link>
		</div>
	)
}

export default Card
