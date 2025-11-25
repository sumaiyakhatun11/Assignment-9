import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            {user.photoURL && (
                <img
                    src={user.photoURL}
                    alt={user.displayName || "User Photo"}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
            )}
            <p className="mb-2"><strong>Name:</strong> {user.displayName || "N/A"}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default Profile;
