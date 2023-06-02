import React, {Dispatch, SetStateAction, createContext, useState} from 'react';

export const TimerContext = createContext<{ timerDuration:number, setTimerDuration:Dispatch<SetStateAction<number>> }>({
    timerDuration: 0, 
    setTimerDuration: () => {} 
} );

const TimerProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    
    const [timerDuration, setTimerDuration] = useState(180000);
    
    return (
        <TimerContext.Provider value = {{ timerDuration, setTimerDuration }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider;