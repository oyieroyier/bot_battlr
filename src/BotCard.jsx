import { Button } from '@chakra-ui/react';
import { baseURL } from './constants';
const BotCard = ({
	image,
	name,
	catchphrase,
	health,
	damage,
	armor,
	botClass,
	id,
}) => {
	function addToMyArmy(id) {
		fetch(`${baseURL}/bots/${id}`)
			.then((res) => res.json())
			.then(addIt);

		function addIt(data) {
			fetch(`${baseURL}/my_bots`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
		}

		fetch(`${baseURL}/bots/${id}`, {
			method: 'DELETE',
		});
	}

	function returnToBotCollection(id) {
		fetch(`${baseURL}/my_bots/${id}`)
			.then((res) => res.json())
			.then(addIt);

		function addIt(data) {
			fetch(`${baseURL}/bots`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
		}

		fetch(`${baseURL}/my_bots/${id}`, {
			method: 'DELETE',
		});
	}

	return (
		<div className="movie-card movie-card-second">
			<div className="content-card">
				<img src={image} />
				<span className="shadow" />
				<div className="content">
					<h1>{name}</h1>
					<p className="date">{catchphrase}</p>
					<b style={{ color: 'limegreen' }}>Health: {health}</b> <br />
					<b style={{ color: 'red' }}> Damage: {damage}</b> <br />
					<b>Armor: {armor}</b>
					<div className="stars">{}</div>
					<div className="hex-tag">
						<div className="tag">{botClass}</div>
					</div>
					<div className="hex-tag">
						<Button onClick={() => addToMyArmy(id)}>Add to Army</Button>
						<Button onClick={() => returnToBotCollection(id)}>Delete</Button>
					</div>
					<i className="fa fa-angle-down" />
				</div>
			</div>
		</div>
	);
};

export default BotCard;
