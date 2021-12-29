import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Tablero from './pages/Tablero'
import ListaPersonas from "./pages/ListaPersonas";
import ListaTareas from "./pages/ListaTareas";
import Header from './components/Header'
import EditPersona from "./pages/EditPersona";

class App extends React.Component {



    render() {

        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        {/*<Route path="/" exact={true}*/}
                        {/*       element={<Tablero personas={this.state.personas} tareas={this.state.tareas}/>}/>*/}
                        <Route path="/personas" component={ListaPersonas} exact={true} />
                        <Route path="/personas/:personaId/edit" render={ (matches) =>  <EditPersona {...matches} />} />

                        <Route path="/tareas" render={ (match) => <ListaTareas {...match} />}/>
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}

export default App;
