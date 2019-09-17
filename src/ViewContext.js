import {createContext} from "react";

const ViewContext = createContext({
    activeView: 'home',
    firstScroll: true,
    scroll: () => {}
});
export default ViewContext;