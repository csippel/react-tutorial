const obj = {
    name: 'Kraken',
    getName() {
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());

class WahlWalApp extends React.Component {
    render() {
        const title = 'Der Wahl-Wal';
        const subtitle = 'Er macht immer so Sachen wie Sachen auswählen.';
        const options = ['Eat', 'Sleep', 'Code', 'Repeat'];

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        console.log('Ausgewählt');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>Was soll ich machen?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this)
    }

    handleRemoveAllOptions() {
        console.log('Alles entfernt.', this.props.options);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAllOptions}>Alle Optionen entfernen</button>
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
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
            // app.options.push(option);
            // e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Auswahl hinzufügen</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<WahlWalApp />, document.getElementById('app'))
