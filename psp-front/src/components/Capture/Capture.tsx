/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import '../../App.css';
function Capture() {
	useEffect(() => {
		console.log(location);
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('pId');
	}, []);

	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
		></Flex>
	);
}
export default Capture;
