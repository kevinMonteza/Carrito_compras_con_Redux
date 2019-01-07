import React from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions';

import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';



const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


const ShoppingCart = props => {
  return (
    <Panel header="Shopping Cart">
      <Table>
        <tbody>
          {props.cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => props.removeToCart(product)}><Glyphicon glyph="trash" /></Button></td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${props.cart.reduce((sum, product) => sum + product.price, 0)}
            </td>
          </tr>
        </tfoot>
      </Table>

    </Panel>
  )
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeToCart(product) {
      dispatch(removeFromCart(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

/**
 * const loadProducts = () => { return async dispatch => { let res = await fetch('http://localhost:3001/products')
 *  let products = await res.json(); 
 * return dispatch({ type: "REPLACE_PRODUCTS", products }) } };
 * faker and json-server
 */