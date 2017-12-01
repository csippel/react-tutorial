/**
 * WahlWalApp - Get your decisions done.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import TestCountdown from './TestCountdown';
import Action from './Action';


export default class WahlWalApp extends React.Component {
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

ReactDOM.render(<WahlWalApp />, document.getElementById('app'));
