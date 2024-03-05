"use client";

import React, { useState, useContext, createContext } from 'react';

// Create a context
const UserContext = createContext({});

export const UserProvider = ( { children }: {children: React.ReactNode}) => {
  
    const [user, setUser] = useState(undefined);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error ('useUser must be used within a UserProvider'); 
    }
    return context;
}