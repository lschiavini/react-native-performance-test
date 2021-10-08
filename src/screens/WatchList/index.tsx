

import React, { ReactNode } from "react"

import { ScrollView, Text, useColorScheme } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import MyAppbar from "../../components/Header/MyAppbar"
import MyDataTable from "../../components/MyDataTable"

import { Container } from "./styles"

function WatchList(): JSX.Element {

	const isDarkMode = useColorScheme() === "dark"

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}

	return (
		<Container>		

			<MyAppbar />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<MyDataTable />
			</ScrollView>
      
		</Container>
	)
}

export default WatchList
