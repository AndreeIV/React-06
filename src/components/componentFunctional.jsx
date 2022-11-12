import React, { useState, useEffect } from 'react';

// Inicializamos los datos iniciales
const dataInitial = {
    date: new Date(),
    seconds: 0,
    name: 'Andree',
    lastName: 'Ismodes'
}

const Clock = () => {


    const [user, setuser] = useState(dataInitial);

    const changeUserInfo = () => {
        setuser(
            {
                ...user,
                date : new Date(),
                seconds : user.seconds + 1
                

            }
        )
    }
    
    useEffect(() => {
        const intervalSeconds = setInterval( () => {
            changeUserInfo();
        }, 1000)
        
        return () => {
            clearInterval(intervalSeconds)
        };
    });

    return (
        <div>
            <h2>
                Hora Actual: { user.date.toLocaleTimeString() }
            </h2>

            <h3>
                Nombre Completo: { user.name } { user.lastName }
            </h3>
            
            <h3>
                Seconds: { user.seconds }
            </h3>

        </div>
    );
};

export default Clock;
