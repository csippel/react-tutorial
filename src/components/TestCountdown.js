import React from 'react';

export default class TestCountdown extends React.Component {
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
