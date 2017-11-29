/**
 * WahlWalApp - Get your decisions done.
 */
class WahlWalApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            // only call this if options is existing
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUMount() {
        console.log('Component will unmount');
    }

    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNumber]);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Bitte gib etwas Vernünftiges ein.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Das gibt es doch schon.';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    render() {
        return(
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />

                <TestCountdown />
            </div>
        );
    }
}

WahlWalApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <p>{props.subtitle}</p>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Der Wahl-Wal',
    subtitle: 'Er macht immer so Sachen wie Sachen auswählen.'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                Was soll ich machen?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>
                Alle Optionen entfernen
            </button>
            {props.options.length === 0 && <p>Erstelle ein paar Auswahlmöglichkeiten.</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={() => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                &times;
            </button>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error  = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Auswahl hinzufügen</button>
                </form>
            </div>
        );
    }
}


class TestCountdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountdown = this.handleCountdown.bind(this);
        this.state = {
            ticks: 1000,
            enabled: true
        };
    }

    handleCountdown() {
        let isPaused = false;

        let minus = () => {
            this.setState((prevState) => {
                if (prevState.ticks <= 0) {
                    clearInterval(timer);
                    isPaused = true;
                    return {
                        enabled: true
                    };
                } else {
                    return {
                        ticks: prevState.ticks - 1,
                        enabled: false
                    };
                }
            })
        };
        let timer = setInterval(minus, 10);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCountdown} disabled={!this.state.enabled}>
                    <p>Noch {this.state.ticks} Sekunden warten</p>
                </button>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<WahlWalApp />, document.getElementById('app'));
