import React from "react"
import {
	SafeAreaView,
	StatusBar,
	useColorScheme,
} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

import { Provider as PaperProvider } from "react-native-paper"

import WatchList from "./screens/WatchList"

const App = (): JSX.Element => {
	const isDarkMode = useColorScheme() === "dark"

	const backgroundStyle = {
		// backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	}

	return (
		<PaperProvider>
			<SafeAreaView style={backgroundStyle}>
				<StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
				<WatchList />
			</SafeAreaView>
		</PaperProvider>
	)
}


export default App
