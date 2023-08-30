import { useState } from "react"

function Daymode () {

    const [mode, setMode] = useState('dark');

   const handleChangeMode = (e) => { setMode(e.target.cheked ? 'light' : 'dark')
       
}
    return (
        <div className={`Daymode ${mode}`}>
            <span>Change Mode</span>
            <input type="checkbox" checked={mode === 'light'} onChange={handleChangeMode} />
            <span className="slider" />
        </div>
    )
}

export default Daymode