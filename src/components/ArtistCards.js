import React from 'react';

function ArtistCards() {
    return(
        <div>
            <h2 className="row flex-center">These artists use our VST Plugins</h2>

            <div className="row flex-spaces child-borders">
                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Raginhard Aurora</h4>
                        <h5 className="card-subtitle">Starlight Cellar</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Milan Bahadur</h4>
                        <h5 className="card-subtitle">Explosive Pity</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Geoffrey Ilona</h4>
                        <h5 className="card-subtitle">Rejections Of Sea</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title">Blanca Eustorgius</h4>
                        <h5 className="card-subtitle">Resigned Of Aircrafts</h5>
                        <p className="card-text">This is another example of a card without image. Cards are also meant to be used without images, but with text/links/buttons.</p>
                    </div>
                </div>

                <div className="card sm-4 col col margin">
                    <div className="card-body">
                        <h4 className="card-title row flex-center">And many more...</h4>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ArtistCards;