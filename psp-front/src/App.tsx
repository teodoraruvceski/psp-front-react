import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home/Home';
import Capture from './components/Capture/Capture';
import Success from './components/Success/Success';
export const App = () => (
	<ChakraProvider theme={theme}>
		<Box textAlign='center' fontSize='xl'>
			<Grid minH='100vh' p={3}>
				<ColorModeSwitcher justifySelf='flex-end' />
				<Routes>
					<Route path='/home' element={<Home />} />
				</Routes>
				<Routes>
					<Route path='/capture-payment' element={<Capture />} />
				</Routes>
				<Routes>
					<Route path='/success' element={<Success />} />
				</Routes>
			</Grid>
		</Box>
	</ChakraProvider>
);
