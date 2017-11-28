'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WahlWalApp - Get your decisions done.
 */
var WahlWalApp = function (_React$Component) {
    _inherits(WahlWalApp, _React$Component);

    function WahlWalApp(props) {
        _classCallCheck(this, WahlWalApp);

        var _this = _possibleConstructorReturn(this, (WahlWalApp.__proto__ || Object.getPrototypeOf(WahlWalApp)).call(this, props));

        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(WahlWalApp, [{
        key: 'handlePick',
        value: function handlePick() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNumber]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Bitte gib etwas Vernünftiges ein.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Das gibt es doch schon.';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Er macht immer so Sachen wie Sachen auswählen.';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                }),
                React.createElement(TestCountdown, null)
            );
        }
    }]);

    return WahlWalApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Der Wahl-Wal'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'Was soll ich machen?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Alle Optionen entfernen'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        '\u2022 ',
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Auswahl hinzuf\xFCgen'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var TestCountdown = function (_React$Component3) {
    _inherits(TestCountdown, _React$Component3);

    function TestCountdown(props) {
        _classCallCheck(this, TestCountdown);

        var _this3 = _possibleConstructorReturn(this, (TestCountdown.__proto__ || Object.getPrototypeOf(TestCountdown)).call(this, props));

        _this3.handleCountdown = _this3.handleCountdown.bind(_this3);
        _this3.state = {
            ticks: 1000,
            enabled: true
        };
        return _this3;
    }

    _createClass(TestCountdown, [{
        key: 'handleCountdown',
        value: function handleCountdown() {
            var _this4 = this;

            var isPaused = false;

            var minus = function minus() {
                _this4.setState(function (prevState) {
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
                });
            };
            var timer = setInterval(minus, 10);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleCountdown, disabled: !this.state.enabled },
                    React.createElement(
                        'p',
                        null,
                        'Noch ',
                        this.state.ticks,
                        ' Sekunden warten'
                    )
                )
            );
        }
    }]);

    return TestCountdown;
}(React.Component);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(WahlWalApp, null), document.getElementById('app'));
