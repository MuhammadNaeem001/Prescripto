import { createContext } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const value = {
        // global values yaha rakhte
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
