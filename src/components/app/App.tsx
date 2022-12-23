import { useEffect, useState } from 'react';
import { gentlemen } from '../../models/gentleman';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';

function App() {
    const [elements, setElement] = useState(gentlemen);

    const removeElement = (id: string) => {
        const newElements = elements.filter((el) => 'id_' + el.id !== id);
        setElement(newElements);
    };
    const selectAll = () => {
        const allSelected = elements.map((ele) => {
            return { ...ele, selected: true };
        });
        setElement(allSelected);
    };

    const [totalSelected, setTotalSelected] = useState(0);
    const manageNumOFSelected = () => {
        let total = 0;
        elements.forEach((ele) => {
            if (ele.selected) {
                total++;
            }
        });
        setTotalSelected(total);
    };

    const loadGentleman = () => {
        return elements.map((gentlemanInfo) => (
            <Gentleman
                key={gentlemanInfo.id}
                gentlemanInfo={gentlemanInfo}
                deleteGentleman={removeElement}
                manageNumOFSelected={manageNumOFSelected}
            ></Gentleman>
        ));
    };

    useEffect(manageNumOFSelected, [elements]);

    return (
        <div className="container">
            <Header></Header>
            <Info totalSelected={totalSelected} selectAll={selectAll}></Info>
            <main className="main">
                <ul className="gentlemen">{loadGentleman()}</ul>
            </main>
        </div>
    );
}

export default App;
