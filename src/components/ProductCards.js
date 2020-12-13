import React from 'react';

function ProductCards() {
    return(
        <div>
            <h2 className="row flex-center">Downloads</h2>

            <div className="row flex-spaces child-borders">
                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Piano VST</h4>
                        <h5 className="card-subtitle">Realistic piano with customization capabilities</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                        <a className="card-link" href="#">Download</a>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Organ VST</h4>
                        <h5 className="card-subtitle">Classic 70s funk sound</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                        <a className="card-link" href="#">Download</a>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Flute VST</h4>
                        <h5 className="card-subtitle">Constructed from samples recorded at Abbey Road Studios</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                        <a className="card-link" href="#">Download</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductCards;