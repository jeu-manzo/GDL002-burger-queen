import React from 'react';
import BtnAdd from '../screenTables/BtnAdd'
import BtnReady from '../screenTables/BtnReady'

class TablesContainer extends React.Component {

    render () {
        return (
            <div>
                <BtnReady/>
                <BtnAdd/>
            </div>
        )

    }

}

export default TablesContainer
