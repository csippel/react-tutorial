console.log('running app.js from /src');

// template 1

const app = {
    title: 'Title',
    subtitle: 'Subtitle',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);



// template 2

const user = {
    name: 'Test Test',
    age: 19,
    location: 'Berlin'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
