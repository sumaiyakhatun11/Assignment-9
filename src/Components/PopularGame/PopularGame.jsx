import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularGame = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("/gameData.json")
            .then((res) => res.json())
            .then((data) => {
                const sortedGames = data.sort(
                    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
                );
                setGames(sortedGames);
            })
            .catch((err) => console.error("Failed to load game data", err));
    }, []);

    return (
        <div className="px-6 py-10 text-white">
            <h2 className="text-2xl font-bold mb-6">Popular Games</h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games.map((game) => (
                    <Link
                        key={game.id}
                        to={`/games/${game.id}`}
                        className="bg-gray-100 rounded-xl p-4 hover:bg-gray-500 transition transform hover:-translate-y-1 shadow-lg cursor-pointer"
                    >
                        <img
                            src={game.coverPhoto}
                            alt={game.title}
                            className="w-full h-44 object-cover rounded-lg mb-3"
                        />
                        <h3 className="text-lg text-black font-semibold">{game.title}</h3>
                        <p className="text-yellow-400 text-sm">⭐ {game.ratings}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PopularGame;
