import React from "react"

import { Appbar } from "react-native-paper"


function MyAppbar(): JSX.Element {
	const _goBack = () => console.log("Went back")

	const _handleSearch = () => console.log("Searching")
  
	const _handleMore = () => console.log("Shown more")
  
	return (
		<Appbar.Header>
			<Appbar.BackAction onPress={_goBack} />
			<Appbar.Content title="Watchlist" />
			<Appbar.Action icon="cog-outline" onPress={_handleMore} />
			<Appbar.Action icon="magnify" onPress={_handleSearch} />
		</Appbar.Header>
	)
}

export default MyAppbar
