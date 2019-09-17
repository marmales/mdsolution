import React, {useState} from 'react';
import ViewContext from './ViewContext';


const ViewProvider = ({children}) => {
    const scroll = ({currentView}) => {
        if (view.firstScroll) {
            scrollToView(prevState => {
                return {
                    ...prevState,
                    firstScroll: false
                }
            })
        }

        if (currentView && currentView !== view) {
            scrollToView(prevState => {
                return {
                    ...prevState,
                    activeView: currentView
                };
            });
        }
    };
    const initial = {
        activeView: null,
        firstScroll: true,
        scroll
    };
    const [view, scrollToView] = useState(initial);
    return (
        <ViewContext.Provider value={view}>
            {children}
        </ViewContext.Provider>
    );
};

export default ViewProvider;