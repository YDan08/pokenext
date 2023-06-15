import Link from "next/link"
import styles from "../styles/Car.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"

export const Card = ({ pokemon }) => {
	const [image, setImage] = useState()

	useEffect(() => {
		;(async () => {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)

			const data = await res.json()

			const pokemonImg = data.sprites.other["dream_world"].front_default

			setImage(pokemonImg)
		})()
	}, [pokemon.id])

	return (
		<div className={styles.card}>
			<Image src={image} alt={pokemon.name} width={100} height={100} />
			<p className={styles.id}>#{pokemon.id}</p>
			<h3 className={styles.title}>{pokemon.name}</h3>
			<Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>
				Detalhes
			</Link>
		</div>
	)
}

export default Card
