import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const GameDetails = () => {
    const { user, loading } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [game, setGame] = useState(null);
    const [gamesLoading, setGamesLoading] = useState(true);

    useEffect(() => {
        if (!user && !loading) {
            navigate("/login");
            return;
        }

        fetch("/gameData.json")
            .then((res) => res.json())
            .then((data) => {
                const foundGame = data.find((g) => g.id.toString() === id);
                setGame(foundGame);
                setGamesLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load game data", err);
                setGamesLoading(false);
            });
    }, [user, loading, id, navigate]);

    if (loading || gamesLoading) {
        return <div className="text-white text-center mt-10 text-xl">Loading...</div>;
    }

    if (!game) {
        return <div className="text-white text-center mt-10 text-xl">Game not found!</div>;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10 text-white">
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>

            <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
            />

            <p className="text-yellow-400 text-lg font-medium mb-3">
                ⭐ Ratings: {game.ratings}
            </p>

            <div className="bg-gray-900 p-5 rounded-lg mb-6 shadow-lg">
                <p className="text-gray-300 mb-3">
                    <span className="font-semibold text-white">Category:</span> {game.category}
                </p>
                <p className="text-gray-300 mb-3">
                    <span className="font-semibold text-white">Developer:</span> {game.developer}
                </p>
                <p className="text-gray-300 mb-3">
                    <span className="font-semibold text-white">Description:</span> {game.description}
                </p>
            </div>

            <div className="flex gap-4">
                <a
                    href={game.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold shadow-md"
                >
                    Download Now
                </a>

                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition rounded-lg text-white font-semibold shadow-md"
                >
                    Return Home
                </button>
            </div>
        </div>
    );
};

export default GameDetails;
