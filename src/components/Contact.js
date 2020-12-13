import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Contact() {
    return(
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 650 }}
        >
            {props => (
                <div style={props}>
                    <div>
                        <h1 className="row flex-center">CONTACT</h1>
                        <p className="row flex-center">Audius Technologies</p>
                        <p className="row flex-center">8 Dawson Street</p>
                        <p className="row flex-center">Ireland</p>
                        <p className="row flex-center">D02 N767</p>
                        <br />
                        <p className="row flex-center">Telephone: 404-993-0447</p>
                    </div>
                </div>
            )}
        </Spring>

        
    )
}

export default Contact;