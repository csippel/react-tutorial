class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            visible: false
        };
    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility &amp; Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visible ? 'Hide ' : 'Show '} details
                </button>
                {this.state.visible && <p>A wild Visibility Toggler appears!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;
//
// const toggleVisibility = () => {
//     visible = !visible;
//     render();
// };
//
// const appRoot = document.getElementById('app');
//
// const render = () => {
//     const template = (
//         <div>
//             <button onClick={toggleVisibility}>
//                 {visible ? 'Hide ' : 'Show '} details
//             </button>
//             {visible && <p>Now visible, oh wow</p>}
//         </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// render();
