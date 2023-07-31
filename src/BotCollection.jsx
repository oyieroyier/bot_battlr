import { useEffect, useState } from 'react';
import { baseURL } from './constants';
import BotCard from './BotCard';
import { HStack, Heading } from '@chakra-ui/react';

const BotCollection = () => {
	const [bots, setBots] = useState([]);
	useEffect(() => {
		fetch(`${baseURL}/bots`)
			.then((res) => res.json())
			.then((data) => setBots(data));
	}, [bots]);
	return (
		<>
			<Heading>Bot Army</Heading>

			<HStack wrap={'wrap'}>
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
					/>
				))}
			</HStack>
		</>
	);
};

export default BotCollection;
