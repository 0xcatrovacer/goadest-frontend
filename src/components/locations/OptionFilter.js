import styles from './Location.module.css'

const OptionFilter = ({ onChange, option }) => {

    return (
        <div className={styles.options}>
            <div>
                <input type='radio' name='options' id='beach' value='beach' onChange={onChange} checked={option === 'beach'} />
                <label for='beach'>Beach</label>
            </div>

            <div>
                <input type='radio' name='options' id='heritage' value='heritage' onChange={onChange} checked={option === 'heritage'} />
                <label for='heritage'>Heritage</label>
            </div>

            <div>
                <input type='radio' name='options' id='nature' value='nature' onChange={onChange} checked={option === 'nature'} />
                <label for='nature'>Nature</label>
            </div>

            <div>
                <input type='radio' name='options' id='all' value='all' onChange={onChange} checked={option === 'all'} />
                <label for='all'>All</label>
            </div>
        </div>
    )
}

export default OptionFilter