import React from 'react';
import Table from '../containers/Table';
import Menu from "./Menu";
import Header from "./Header";
import '../css/app.css';
const App = () => (
    <div>

        <div className="global_container">


            <div  className="return ">
                <Header/>
                <Menu/>
                <main role="main"  >
                    <Table/>
                </main>
            </div>
        </div>
    </div>

)

export default App;