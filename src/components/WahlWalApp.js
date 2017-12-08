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
import OptionModal from './OptionModal';

export default class WahlWalApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({ selectedOption: option }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Bitte gib etwas Vernünftiges ein.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Das gibt es doch schon.';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };

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

    render() {
        return(
            <div>
                <Header />

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <TestCountdown />
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
