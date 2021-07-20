import React, { useEffect, useState } from 'react'

import NavBar from './nav'
import Card from './card'
const App = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        let res;
        async function getData() {
            await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=1`).then(
                e => e.json().then(data => setItem(data))
            )
        }
        console.log(item)
        getData()
    }, [])

    return (
        <>
            <NavBar />

            <div className="bg-success text-center">
                <p className="display-4 text-white p-4">Discover the amazing new app</p>
                <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
                </p>
            </div>
            <section className="contact bg-success p-2">
                <div className="container ">
                    <h2 className="text-white">
                        We love new friends!
                    </h2>
                    <div className="row">
                        {item.map(e => (
                            <Card key={e.id} data={e} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="footer d-flex p-5   bg-dark text-white">
                <p className="lead container">Contact us at Instagram</p>
                <p className="lead container">You can react via email too</p>
                <p className="lead container">NO COPYRIGHT</p>
            </section>
        </>
    )
}
export default App;