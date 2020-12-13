import React from 'react';
import { Spring } from 'react-spring/renderprops';
import ProductCards from './ProductCards';

function Products() {
    return(
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 650 }}
        >
            {props => (
                <div style={props}>
                    <div>
                        <h1 className="row flex-center">PRODUCTS</h1>
                        <p className="col-fill col">Sint culpa occaecat culpa eiusmod aliquip duis anim eiusmod sint aute sunt sit aute. Cillum eiusmod in pariatur consectetur eu do exercitation nostrud. Exercitation tempor aliquip nostrud sint irure aliquip Lorem proident dolor sunt. Cillum culpa excepteur Lorem magna laboris. Do sint ea officia ullamco fugiat cillum duis est.

            Fugiat in quis in in labore aliqua amet proident adipisicing tempor aliqua do. Labore eiusmod enim dolore laborum fugiat do eu. Eu commodo do ea cupidatat et duis duis labore Lorem sint consectetur consectetur laborum.

            Cillum commodo laborum mollit veniam ex occaecat cupidatat reprehenderit et amet in labore. Labore magna anim aliquip ad consectetur sunt amet enim dolore aute dolor mollit deserunt. Sit nisi culpa elit Lorem do eu cupidatat est nostrud aute do excepteur qui in. Occaecat occaecat duis officia ex magna minim tempor dolor esse pariatur. Mollit commodo dolor adipisicing esse ex occaecat eiusmod consequat elit cillum tempor amet consequat voluptate. Commodo et mollit culpa Lorem aliqua sunt laborum proident est esse cillum sint proident. Ex excepteur enim sint minim.

            Magna elit ut reprehenderit nostrud eiusmod. Proident do Lorem veniam aliquip enim. Laboris consequat est qui culpa eu eu. Ea adipisicing dolore cupidatat nulla commodo. Proident elit laboris enim minim cillum nostrud.

            Lorem aute do quis aute. Excepteur do id nisi mollit laboris nostrud dolor ad. Cillum pariatur anim fugiat laborum est. Aliquip ex reprehenderit deserunt magna ut.</p>
                        <ProductCards />
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default Products;