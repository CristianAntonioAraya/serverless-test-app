import { useEffect, useState } from 'react';

function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		const apiUrl = import.meta.env.VITE_API_BASE_URL;
		fetch(`${apiUrl}/hello`)
			.then((response) => response.json())
			.then((data) => setMessage(data.message))
			.catch((error) => console.error('Error al llamar a la API:', error));
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="p-6 bg-white shadow-lg rounded-lg">
				<h1 className="text-2xl font-bold text-gray-800">{message}</h1>
			</div>
		</div>
	);
}

export default App;
