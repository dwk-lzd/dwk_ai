import { motion } from 'framer-motion'

const MotionBox = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ background: 'skyblue', padding: 20 }}
            >
                <h2>Motion Box</h2>
            </motion.div>
            <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                style={{ background: 'red', padding: 20 }}
            >
                <h2>Motion Box2</h2>
            </motion.div>
        </>
    )
}

export default MotionBox