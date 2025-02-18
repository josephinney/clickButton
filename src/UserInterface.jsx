import React, {useState} from "react"
import Button from '@mui/material/Button';

export default function UserInterface() {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    };


    return <div>
        <h2>UI with a click counter!</h2>
        <h4>You clicked {count} times</h4>
        <Button variant="contained"onClick={handleClick}>
            Click
        </Button>
    </div>
}