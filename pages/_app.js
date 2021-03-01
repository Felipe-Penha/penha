import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        variant={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
          pageExit: { opacity: 0 },
        }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}

export default MyApp
