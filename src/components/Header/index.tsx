import React, { ReactNode } from "react"


import { Container, TextView } from "./styles"

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps): JSX.Element {
	return (
		<Container>
			<TextView>WatchList</TextView>
			{children}
		</Container>
	)
}

export default Header
