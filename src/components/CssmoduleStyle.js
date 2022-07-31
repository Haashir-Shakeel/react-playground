//styling react components using css modules
import './appStyle.css'
import styles from './appStyle.module.css'

export const CssModuleStyle = () => {
    return (
        <div>
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
        </div>
    )
}