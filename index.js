import React from 'react'
import ReactDOM from 'react-dom'

import './public/style.css'

const App = () => {

    const MAX_CHAR = 148

    const [error, setError] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleChange = e => {
        if (e.target.value.length >= MAX_CHAR + 1) {
            if (!error) setError('You have reach the limit')
        } else {
            e.target.style.height = 'auto'
            e.target.style.height = e.target.scrollHeight + "px";
            setMessage(e.target.value)
            setError('')
        }
    }

    return (
        <div className='chatBox'>
            <textarea
                className='areaBox'
                value={message}
                name="message"
                onChange={handleChange}
            ></textarea>
            <label>Votre message ({message.length}/{MAX_CHAR})</label>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)