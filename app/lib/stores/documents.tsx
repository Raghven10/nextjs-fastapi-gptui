import React, { useState, useContext, createContext } from 'react';

// Create a context
const DocumentsContext = createContext({});

// Provider component
export const DocumentsProvider = ({ children }: { children: React.ReactNode }) => {
    const [documents, setDocuments] = useState([
        {
            collection_name: 'collection_name',
            filename: 'filename',
            name: 'name',
            title: 'title'
        },
        {
            collection_name: 'collection_name1',
            filename: 'filename1',
            name: 'name1',
            title: 'title1'
        }
    ]);

    return (
        <DocumentsContext.Provider value={{ documents, setDocuments }}>
            {children}
        </DocumentsContext.Provider>
    );
};

// Custom hook to use the context
export const useDocuments = () => {
    const context = useContext(DocumentsContext);
    if (context === undefined) {
        throw new Error('useDocuments must be used within a DocumentsProvider');
    }
    return context;
};
