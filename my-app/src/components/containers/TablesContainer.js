import React from 'react';

import NavBarTables from '../NavBarTables'
import Button from '../Button'
import Table from '../Table'
import AddTable from '../AddTable'



class TablesContainer extends React.Component {

  btnReady () {
    alert("holi2")
  }


  render () {
    console.log(window.location.hash);
    return (
      <section className="tables-container">
        <NavBarTables label="Mesas"/>
        <Table/>

        <div className="btns-tables">
          <Button className="btn-ready" label="Listos" onClick={this.btnReady} />
          <AddTable/>
        </div>
      </section>
    )


  }

}

export default TablesContainer
