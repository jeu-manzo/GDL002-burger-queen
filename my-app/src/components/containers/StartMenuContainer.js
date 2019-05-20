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
    return (
      <section>
          <Button className="btn-menu" label="CAJA" onClick={this.btnReady} />
          <Button className="btn-menu" label="PEDIDOS" onClick={this.btnReady} />
          <Button className="btn-menu" label="COCINA" onClick={this.btnReady} />
          <Button className="btn-menu" label="BAR" onClick={this.btnReady} />
          <Button className="btn-menu" label="ADMON" onClick={this.btnReady} />
      </section>
    )


  }

}

export default TablesContainer
