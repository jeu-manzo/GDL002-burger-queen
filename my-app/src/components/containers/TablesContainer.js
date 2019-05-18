import React from 'react';

import NavBarTables from '../screenTables/NavBarTables'
import BtnAdd from '../screenTables/BtnAdd'
import BtnReady from '../screenTables/BtnReady'

class TablesContainer extends React.Component {

    render () {
        return (
            <section className="tables-container">
                <NavBarTables/>
                <section className="tables">
                    <div className="prueba">Prueba 1</div>
                    <div className="prueba">Prueba 2</div>
                    <div className="prueba">Prueba 3</div>
                    <div className="prueba">Prueba 4</div>
                    <div className="prueba">Prueba 1</div>
                    <div className="prueba">Prueba 2</div>
                    <div className="prueba">Prueba 3</div>
                    <div className="prueba">Prueba 4</div>
                </section>

                <div className="btns-tables">
                    <BtnReady/>
                    <BtnAdd/>
                </div>
            </section>
        )

    }

}

export default TablesContainer
