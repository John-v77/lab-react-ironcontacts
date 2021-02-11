import React from 'react';

function AddRandomBtn(props) {

    const [otherCelbs, setOtherCelbs] = useState(contacts)

    let randomIndex = Math.floor(Math.random()* remainingCeleb.length)
    let newRandomEntry = remainingCeleb.splice(randomIndex, 1)
    setCelebArr([...newRandomEntry])

    return (
        <div>

        </div>
    );
}

export default AddRandomBtn;