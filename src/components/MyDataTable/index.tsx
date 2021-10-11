import React, { useContext, useEffect, useState } from "react"
import { Container } from "./styles"
import { Button, DataTable } from "react-native-paper"
import apiCall from "../../services/sampleRequests"
import round from "../../utils/utils"
import { StyleSheet, Text } from "react-native"

interface Row {
	first: string;
	second: string;
	third: string;
}

interface ValueRow {
	enableColor: boolean;
	display: number;
	percentage?: string;
  }

const MyDataTableValue = (value :ValueRow): JSX.Element => {
	const { display, percentage} = value
	const myDisplay = `${display}${percentage? percentage : ""}`
	const currentStyle = (display > 50 ) ? styles.tableCellGreen :
		(display > 10 && display < 50 ? styles.tableCellWhite : styles.tableCellRed) 
	
	return (
		<DataTable.Cell style={currentStyle}>
			<Text>{myDisplay}</Text>
		</DataTable.Cell>
	)
}


interface DataTableRowProps {
	rowData: Row;
	key: string;
	enableColor: boolean;
  }

const MyDataTableRow = (dataRow: DataTableRowProps): JSX.Element => {
	const { rowData, enableColor } = dataRow
	const {first} = rowData
	const lineRequestFrequencyHZ = 60

	const [displayValue, setDisplayValue] = useState({
		second: 0,
		third: 0
	})
	const timer: React.MutableRefObject<NodeJS.Timer | any> = React.useRef()
	

	useEffect(() => {
		async function getAndSetValues() {
			const {second, third} = await valuesRequest()
			setDisplayValue({
				second,
				third
			})
		}
		timer.current = setInterval(async() => {
			await getAndSetValues()	
		}, 1/lineRequestFrequencyHZ)
		return () => { clearInterval(timer.current)	}
	}, [])

	const valuesRequest = async() => {
		let newDisplay = {second: 0, third: 0}
		await apiCall(lineRequestFrequencyHZ)
		newDisplay = {
			second:	round(Math.random() * 100, 2),
			third: round(Math.random() * 100, 2)
		}
		return newDisplay
	}

	return (
		<DataTable.Row>
			<DataTable.Cell>{first}</DataTable.Cell>
			<MyDataTableValue enableColor={enableColor} display={displayValue.second} />
			<MyDataTableValue enableColor={enableColor} display={displayValue.third} percentage={"%"} />
		</DataTable.Row>
	)
}


function MyDataTable(): JSX.Element {
	const [enableColor, setEnableColor] = useState(true)
	const rows = [
		{first: "WINFUT", second: "105", third: "2%"},
		{first: "DOLFUT", second: "4000", third: "2%"},
		{first: "INDFUT", second: "300", third: "2%"},
		{first: "VIVT4", second: "500", third: "2%"},
		{first: "VALE3", second: "66", third: "2%"},
		{first: "USIM5", second: "55", third: "2%"},
		{first: "TIMP3", second: "11", third: "2%"},
		{first: "MGLU3", second: "44", third: "2%"},
		{first: "PETR4", second: "33", third: "2%"},
		{first: "TIMP4", second: "11", third: "2%"}
	]


	return (
		<Container>
			{/* <Button onPress={() => setEnableColor(!enableColor)}>
				Habilitar Cor
			</Button> */}
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Ticket</DataTable.Title>
					<DataTable.Title >Value</DataTable.Title>
					<DataTable.Title >perc</DataTable.Title>
				</DataTable.Header>

				{rows?.map((row) => {
					return (
						<MyDataTableRow 
							enableColor={enableColor}
							rowData={row} 
							key={row.first}
						/>
					)
				})}
				
			</DataTable>
		</Container>
	)
}

const styles = StyleSheet.create({
	tableCellRed: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "red"
	},
	tableCellGreen: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "green"
	},
	tableCellWhite: {
		flex: 1,
		width: "100%",
		height: "100%",
		backgroundColor: "white"
	},
})

export default MyDataTable
