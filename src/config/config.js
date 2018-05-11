import development from './env/development.js'
import production from './env/production.js'

export default process.env.NODE_ENV === 'development' ? development : production