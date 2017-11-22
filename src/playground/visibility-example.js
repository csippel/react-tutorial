let visible = false;

const toggleVisibility = () => {
    visible = !visible;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <button onClick={toggleVisibility}>
                {visible ? 'Hide ' : 'Show '} details
            </button>
            {visible && <p>Now visible, oh wow</p>}
        </div>
    );
};

ReactDOM.render(template, appRoot);
