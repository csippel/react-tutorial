'use strict';

console.log('running app.js from /src');

var app = {
    title: 'Wahl-Wal',
    subtitle: 'Er macht immer so Sachen wie Sachen auswählen.',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

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
var onMakeDecision = function onMakeDecision() {
    var randomNumber = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNumber];
    alert(option);
};

var onWipeOptions = function onWipeOptions() {
    var confirmation = confirm('Wirklich alle Entscheidungsmöglichkeiten entfernen?');

    if (confirmation) {
        app.options = [];
        render();
    }
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Deine Entscheidungsmöglichkeiten' : 'keine Entscheidungsmöglichkeiten'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Hinzuf\xFCgen'
            )
        ),
        React.createElement(
            'button',
            { disabled: app.options.length < 1, onClick: onWipeOptions },
            'Alles entfernen'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length < 1, onClick: onMakeDecision },
            'Den Wal entscheiden lassen'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();

/*

<button>Show details</button>
{(toggleButton)}

*/
