

const apiCall = async (freqHZ: number): Promise<void> => {
	const ms = 1/freqHZ * 1000
	await delay(ms)
} 

async function delay(ms: number) {
	return setTimeout(() => {
		const a = 0
		return a
	}, ms)	
}

export default apiCall
