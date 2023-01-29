/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import { Flex, Box, Button, Image } from '@chakra-ui/react';
import '../../App.css';
import { choosePayment } from '../../services/paymentService';
import cardLogo from './images/card.png';
import ppText from './images/paypalText.png';
import cryptoLogo from './images/crypto.png';
import qrLogo from './images/qr.png';
import { getAmount } from '../../services/service';
function Home() {
	const [totalState, setTotalState] = useState(0);
	const [paymentIdState, setPaymentId] = useState('');
	useEffect(() => {
		console.log(location);
		const search = window.location.search;
		const params = new URLSearchParams(search);
		//const t = params.get('total');
		const pid = params.get('paymentId');
		const get = async () => {
			const data = await getAmount(pid || '');
			console.log(data);
			setTotalState(data.data.amount);
		};
		get();
		//setTotalState(t ? (t as unknown as number) : 0);
		setPaymentId(pid ? (pid as unknown as string) : 'error');
		console.log('pid:', paymentIdState);
	}, [totalState, paymentIdState]);
	const pay = async (route: string) => {
		const data = await choosePayment(totalState, paymentIdState, route);
		console.log('pidd:', paymentIdState);
		console.log(data); // should be {url,paymentId}
		// history.push({
		// 	path: data.data.url,
		// 	state: {
		// 		paymentId: data.data.paymentId,
		// 	},
		// });
		window.location.href = data.data.url + `?paymentId=${data.data.paymentId}`;
	};
	const Card = async () => {};
	const Crypto = async () => {};
	const QR = async () => {};
	return (
		<Flex
			flexDirection='row'
			width='100%'
			height='100%'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
		>
			<Button
				margin='10px'
				onClick={() => pay('pay-by-paypal')}
				width='20%'
				height='40%'
				bgColor='#FFC43A'
			>
				<Image margin='5px' width='70%' height='30%' src={ppText} />
			</Button>
			<Button
				margin='10px'
				onClick={() => pay('pay-by-card')}
				width='20%'
				height='40%'
				bgColor='#FFC43A'
			>
				<Image margin='5px' width='60%' height='70%' src={cardLogo} />
			</Button>
			<Button
				margin='10px'
				onClick={() => pay('pay-by-crypto')}
				width='20%'
				height='40%'
				bgColor='#FFC43A'
			>
				<Image
					backgroundColor='transparent'
					margin='5px'
					width='60%'
					height='70%'
					src={cryptoLogo}
				/>
			</Button>
			<Button
				margin='10px'
				onClick={() => pay('pay-by-qr')}
				width='20%'
				height='40%'
				bgColor='#FFC43A'
			>
				<Image
					backgroundColor='transparent'
					margin='5px'
					width='50%'
					height='70%'
					src={qrLogo}
				/>
			</Button>
		</Flex>
	);
}
export default Home;
