import React from 'react';
import { Spring } from 'react-spring/renderprops';
import ArtistCards from './ArtistCards';

function Home() {
    return(
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 650 }}
        >
            {props => (
                <div style={props}>
                    <div>
                        <h1 className="row flex-center">HOME</h1>
                        <p className="col-fill col">Do aliqua culpa ex excepteur et veniam pariatur sint reprehenderit. Incididunt aliqua occaecat aliqua aliquip. Lorem dolore ex sit ipsum aliquip in incididunt magna anim in adipisicing ipsum est. Id dolore Lorem voluptate cillum esse fugiat exercitation ad labore culpa officia mollit duis. Sit aliquip nulla cupidatat fugiat ea velit veniam duis reprehenderit in aliquip. Nulla aliqua nostrud consectetur qui aliquip amet. Anim proident ad amet cillum laboris occaecat ut qui quis eiusmod aliqua magna.

            Laborum proident laboris proident cupidatat proident laboris eu sint nisi. Esse minim est proident enim commodo officia veniam reprehenderit commodo sit cupidatat. Ea irure ullamco consequat elit velit sit culpa laborum velit excepteur. Fugiat ea nostrud sint irure. Deserunt tempor fugiat voluptate et. Dolore aliquip consequat veniam consectetur eiusmod. Officia pariatur exercitation veniam quis nulla sunt reprehenderit incididunt est nostrud tempor voluptate nisi.

            Velit consequat in do ipsum commodo mollit consectetur dolore. Esse Lorem tempor duis ea irure anim. In enim magna magna consequat labore anim laboris dolore nisi.

            Reprehenderit commodo excepteur amet et adipisicing consectetur velit et. Ex labore mollit in laborum dolor ea mollit consequat irure. Pariatur aute reprehenderit fugiat nisi ex laborum laboris aliqua reprehenderit deserunt. Minim proident anim eiusmod ad eiusmod. Tempor tempor commodo deserunt laboris ullamco magna adipisicing mollit reprehenderit nulla enim minim quis.

            Ut ullamco in est aliqua anim occaecat est veniam aliqua commodo ipsum eiusmod irure. Enim excepteur occaecat tempor mollit nostrud magna nisi veniam officia sit sint. Do amet reprehenderit ut sunt minim non laborum do reprehenderit commodo sint commodo. Ex minim culpa irure sunt officia ipsum enim nostrud sint.</p>
                        <p className="col-fill col">Labore consequat nostrud adipisicing ex incididunt cupidatat esse mollit laborum. Culpa nulla do excepteur consectetur. Magna cillum consequat qui anim occaecat do anim ipsum. Sunt culpa ipsum ea nisi esse esse sit elit mollit sit. Non ex mollit eiusmod veniam dolor ut occaecat dolore ut. Ad dolore ea minim sit sunt dolore. Minim occaecat do officia dolore dolore labore est culpa ex enim.

            Pariatur sunt nostrud ex sunt officia enim anim id tempor laboris. Commodo reprehenderit ea culpa enim. Elit non ea dolor anim. Tempor quis qui non non minim.

            Nostrud esse fugiat eu enim velit officia nostrud. Laborum sunt nostrud pariatur proident ipsum id. Commodo consectetur proident velit ad sint proident cillum culpa nisi aute quis.</p>

                        <ArtistCards />
                    </div>
                </div>
            )}
        </Spring>
        
    )
}

export default Home;