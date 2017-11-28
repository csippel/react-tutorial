class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.handlePlus  = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: this.props.startNumber
        };
    }

    componentDidMount() {
        try {
            console.log('fetch data');

            const data = localStorage.getItem('counter');
            const parsedData = parseInt(data, 10);
            if (!isNaN(data)) {
                this.setState(() => ({ count: parsedData }));
            }
        } catch(e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('save data', this.state.count);

        // only save data when there is a difference
        if (prevState.count !== this.state.count) {
            localStorage.setItem('counter', this.state.count);
        }
    }

    handlePlus() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    };
}

Counter.defaultProps = {
    startNumber: 0
};

ReactDOM.render(<Counter startNumber={38} />, document.getElementById('app'));
// let count = 0;
//
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>&#43;1</button>
//             <button onClick={minusOne}>&minus;1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
