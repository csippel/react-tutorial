console.log('running app.js from /src');

const app = {
    title: 'Wahl-Wal',
    subtitle: 'Er macht immer so Sachen wie Sachen auswählen.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};


/**
 * onMakeDecision - Description
 *
 * @return {type} Description
 */
const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};


const onWipeOptions = () => {
    let confirmation = confirm('Wirklich alle Entscheidungsmöglichkeiten entfernen?');

    if (confirmation) {
        app.options = [];
        render();
    }
};

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Deine Entscheidungsmöglichkeiten' : 'keine Entscheidungsmöglichkeiten'}</p>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Hinzufügen</button>
            </form>
            <button disabled={app.options.length < 1} onClick={onWipeOptions}>Alles entfernen</button>
            <button disabled={app.options.length < 1} onClick={onMakeDecision}>Den Wal entscheiden lassen</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();




/*

<button>Show details</button>
{(toggleButton)}

*/
