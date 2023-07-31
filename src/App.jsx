import React from 'react';
import MyBotArmy from './MyBotArmy';
import BotCollection from './BotCollection';
import { Box } from '@chakra-ui/react';
const App = () => {
	return (
		<Box p={'2rem'}>
			<MyBotArmy />
			<BotCollection />
		</Box>
	);
};

export default App;
