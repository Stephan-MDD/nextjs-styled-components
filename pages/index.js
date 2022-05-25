import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StyledDiv>
				<header>
					<span className="logo-container">LOGO</span>

					<nav>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
						<a href="#">lorem</a>
					</nav>

					<button onClick={() => setMenuOpen(true)} className="open-sidebar-button">
						Open
					</button>
				</header>

				<main>
					<h1>Hello World</h1>
				</main>

				<aside className={menuOpen && 'open'}>
					<button onClick={() => setMenuOpen(false)} className="open-sidebar-button">
						Close
					</button>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
					<a href="#">lorem</a>
				</aside>
			</StyledDiv>
		</>
	);
}

const StyledDiv = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;

	display: flex;
	flex-direction: column;

	header {
		background-color: white;
		display: flex;
		padding: 2rem;
		gap: 1rem;

		.logo-container {
			margin-right: auto;
		}

		nav {
			display: contents;
		}

		.open-sidebar-button {
			display: none;
		}
	}

	main {
		flex: 1;
		background-color: aliceblue;
	}

	aside {
		height: 100%;
		padding: 2rem;
		background-color: azure;
		transition: right 350ms;

		position: absolute;
		top: 0;
		right: -100%;

		display: flex;
		gap: 2ch;
		flex-direction: column;
	}

	aside.open {
		right: 0%;
	}

	@media (max-width: 600px) {
		header {
			nav a {
				display: none;
			}

			.open-sidebar-button {
				display: block;
			}
		}
	}
`;
