/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import '../../App.css';
import { paypalPayment } from '../../services/payPalService';
function Home() {
	const [totalState, setTotalState] = useState(0);
	const [paymentIdState, setPaymentId] = useState('');
	useEffect(() => {
		console.log(location);
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const t = params.get('total');
		const pid = params.get('paymentId');
		setTotalState(t ? (t as unknown as number) : 0);
		setPaymentId(pid ? (pid as unknown as string) : 'error');
		console.log('pid:', paymentIdState);
	}, [totalState, paymentIdState]);
	const PayPal = async () => {
		const data = await paypalPayment(totalState, paymentIdState);
		console.log('pidd:', paymentIdState);
		console.log(data.data);
		window.location.href = data.data;
		// pay(totalState).await((data) => {

		// });
	};
	const Card = async () => {};
	const Crypto = async () => {};
	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
		>
			<Box>
				<Button onClick={PayPal} width='500px' height='50px' bgColor='#FFC43A'>
					<b>Pay</b>
					<b className='pal'>Pal</b>
				</Button>
				<Button onClick={Card} width='500px' height='50px' bgColor='#FFC43A'>
					<b>Card</b>
				</Button>
				<Button onClick={Crypto} width='500px' height='50px' bgColor='#FFC43A'>
					<b>Crypto</b>
				</Button>
			</Box>
		</Flex>
		// <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
		// 	<div className='col'>
		// 		<div className='card mb-4 rounded-3 shadow-sm border-primary'>
		// 			<div className='card-header py-3 text-white bg-primary border-primary'>
		// 				<h4 className='my-0 fw-normal'>Pay Pal</h4>
		// 			</div>
		// 			<div className='card-body'>
		// 				<img src='./images/paypal.png' width='200' height='200' />
		// 				<button
		// 					onClick={PayClick}
		// 					type='button'
		// 					className='w-100 btn btn-lg btn-primary'
		// 				>
		// 					Pay
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='col'>
		// 		<div className='card mb-4 rounded-3 shadow-sm border-primary'>
		// 			<div className='card-header py-3 text-white bg-primary border-primary'>
		// 				<h4 className='my-0 fw-normal'>Bank</h4>
		// 			</div>
		// 			<div className='card-body'>
		// 				<img title='aa' src='./images/bank.png' width='200' height='200' />

		// 				<button
		// 					onClick={PayClick}
		// 					type='button'
		// 					className='w-100 btn btn-lg btn-primary'
		// 				>
		// 					Pay
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='col'>
		// 		<div className='card mb-4 rounded-3 shadow-sm border-primary'>
		// 			<div className='card-header py-3 text-white bg-primary border-primary'>
		// 				<h4 className='my-0 fw-normal'>Bitcoin</h4>
		// 			</div>
		// 			<div className='card-body'>
		// 				<img src='./images/bitcoin.png' width='200' height='200' />

		// 				<button
		// 					onClick={PayClick}
		// 					type='button'
		// 					className='w-100 btn btn-lg btn-primary'
		// 				>
		// 					Pay
		// 				</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
export default Home;
