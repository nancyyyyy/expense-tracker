import ReactDOM from 'react-dom/client';
import Header from './Components/Header';

const App = () =>{
    return <div>
        <Header/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);



