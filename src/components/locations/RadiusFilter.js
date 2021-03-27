import Styles from './Location.module.css'

const RadiusFilter = ({ onChange, distance }) => {
    return (
        <div>
            <label> Distance: </label>
            <input className={Styles.textbox} type='text' value={distance} onChange={onChange} />
            <input className={Styles.slider} type='range' min='5' max='100' value={distance} onChange={onChange} />
        </div>

    )
}

export default RadiusFilter