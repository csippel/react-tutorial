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
        console.log('Choooooosed');
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
    removeAllOptions() {
        console.log('Alles entfernt.');
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAllOptions}>Alle Optionen entfernen</button>
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
    render() {
        return (
            <div>
                <button>Auswahl hinzufügen</button>
            </div>
        );
    }
}

ReactDOM.render(<WahlWalApp />, document.getElementById('app'))
