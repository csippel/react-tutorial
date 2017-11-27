class WahlWalApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: []
        };
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    render() {
        const subtitle = 'Er macht immer so Sachen wie Sachen auswählen.';

        return(
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />

                <TestCountdown />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
};

Header.defaultProps = {
    title: 'Der Wahl-Wal'
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
            {
                props.options.map((option) => <Option key={option} optionText={option} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            &bull; {props.optionText}
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

        this.setState(() => {
            return { error };
        });
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
