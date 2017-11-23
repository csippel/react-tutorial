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
        const title = 'Der Wahl-Wal';
        const subtitle = 'Er macht immer so Sachen wie Sachen auswählen.';

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
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
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    Was soll ich machen?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>
                    Alle Optionen entfernen
                </button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                &bull; {this.props.optionText}
            </div>
        );
    }
}

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

ReactDOM.render(<WahlWalApp />, document.getElementById('app'));
