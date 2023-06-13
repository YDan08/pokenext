import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"

export const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<link rel='icon' href='/images/favicon.ico' />
				<title>Pokenext</title>
			</Head>
			<Navbar />
			<main className='main-container'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
