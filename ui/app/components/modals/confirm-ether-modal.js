const { Component } = require('react')
const PropTypes = require('prop-types')
const h = require('react-hyperscript')
const connect = require('react-redux').connect
const actions = require('./../../actions')
const NotifcationModal = require('./notification-modal')

class ConfirmEther extends Component {
  render () {

    return h(NotifcationModal, {
      header: 'Transaction Generated',
      message: h('span', 'Your transaction has been submitted '),
      //  h('div', [

        // h('span', `Your transaction has been submitted `),

        // h('a.notification-modal__link', {
        //   href: 'http://metamask.helpscoutdocs.com/article/36-resetting-an-account',
        //   target: '_blank',
        //   onClick (event) { global.platform.openWindow({ url: event.target.href }) },
        // }, 'Read more.'),

      // ]),
      showCancelButton: false,
      showConfirmButton: false,
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

module.exports = connect(null, mapDispatchToProps)(ConfirmEther)