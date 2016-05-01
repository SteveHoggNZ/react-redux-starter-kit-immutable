import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter2',
  getComponent (nextState, next) {
    require.ensure([
      './containers/Counter2Container',
      './modules/counter2'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Counter = require('./containers/Counter2Container').default
      const reducer = require('./modules/counter2').default

      injectReducer(store, { key: 'counter2', reducer })

      next(null, Counter)
    })
  }
})
