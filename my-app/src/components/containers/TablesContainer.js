import React from 'react';

import NavBarTables from '../NavBarTables'
import Button from '../Button'
import Table from '../Table'


class TablesContainer extends React.Component {

  btnAdd () {
    alert("holi")
  }

  btnReady () {
    alert("holi2")
  }


  render () {
    return (
      <section className="tables-container">
        <NavBarTables/>
        <Table/>

        <div className="btns-tables">
          <Button className="btn-ready" label="Listos" onClick={this.btnReady} />
          <Button className="btn-add" label="+" onClick={this.btnAdd} />
        </div>
      </section>
    )

  }

}

export default TablesContainer
