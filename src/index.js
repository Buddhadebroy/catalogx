import { render } from '@wordpress/element';
import { BrowserRouter } from 'react-router-dom';
import { TourProvider } from '@reactour/tour';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import App from './app.js';


import './style/common.scss';

const disableBody = (target) => disableBodyScroll(target);
const enableBody = (target) => enableBodyScroll(target);


const MainApp = () => (
    <TourProvider
        steps={[]} 
        afterOpen={disableBody}
        beforeClose={enableBody}
        disableDotsNavigation={true}
        showNavigation= {false}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </TourProvider>
);

render(<MainApp />, document.getElementById('admin-main-wrapper'));