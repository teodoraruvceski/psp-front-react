import { useState } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { getAgencyUrlSuccessfullRegistration } from '../../services/service';
import '../../App.css';
function Success() {
	const backToAgency = async () => {
		console.log('vrati se');
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('payment_id');
		console.log(pid);
		//get agency-back url from psp api
		const link = await getAgencyUrlSuccessfullRegistration(pid || '');
		console.log(pid);
		console.log(link);
		window.location.href = `${link.data}?paymentId=${pid}`;
	};
	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
			borderColor='#85AF58'
		>
			<Text fontSize='6xl'>Plaćanje uspešno izvršeno!</Text>

			<Box>
				<Button
					onClick={backToAgency}
					width='500px'
					height='50px'
					bgColor='#85AF58'
				>
					<b>Vrati se</b>
				</Button>
			</Box>
		</Flex>
	);
}
export default Success;
