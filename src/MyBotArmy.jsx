import { useEffect, useState } from 'react';
import { baseURL } from './constants';
import BotCard from './BotCard';
import { HStack, Heading } from '@chakra-ui/react';

const MyBotArmy = () => {
	const [bots, setBots] = useState([]);
	const disabled = true;

	useEffect(() => {
		fetch(`${baseURL}/my_bots`)
			.then((res) => res.json())
			.then((data) => setBots(data));
	}, [bots]);
	return (
		<div>
			<Heading>My Army</Heading>
			<HStack wrap={'wrap'} minH={'6rem'}>
				{bots.map((bot) => (
					<BotCard
						key={bot.id}
						name={bot.name}
						image={bot.avatar_url}
						catchphrase={bot.catchphrase}
						health={bot.health}
						armor={bot.armor}
						damage={bot.damage}
						botClass={bot.bot_class}
						id={bot.id}
						disabled={disabled}
					/>
				))}
			</HStack>
		</div>
	);
};

export default MyBotArmy;
