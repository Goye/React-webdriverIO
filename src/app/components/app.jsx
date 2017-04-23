import React from 'react';
const DEFAULT_PASSWORD = 'Prodigious2017#';
const initialState = {
    showAlert: false,
    isErrorMessage: false
};
import style from './app.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.username = null;
        this.password = null;
        this.messages = {
            error: 'There was an error with your E-mail/Password combination. Please try again.',
            success: 'success'
        };
        this.state = initialState;
    }

    onSignInClick = (event) => {
        event.preventDefault();
        const userVal = this.username.value;
        const passVal = this.password.value;
        const showAlert = true;
        const isErrorMessage = false;
        this.resetState();
        if (passVal !== DEFAULT_PASSWORD || userVal !== 'admin') {
            this.setState({ showAlert, isErrorMessage: !isErrorMessage });
        } else {
            this.setState({ showAlert, isErrorMessage });
        }
    }

    resetState() {
        this.setState(initialState);
    }

    getAlertClass() {
        const { isErrorMessage, showAlert } = this.state;
        if (showAlert) {
            return isErrorMessage ?
                `alert-danger ${style['show']}`:
                `alert-success ${style['show']}`;
        } else {
            return style['hide'];
        }
    }

    showMessage() {
        const { isErrorMessage } = this.state;
        return isErrorMessage ? this.messages.error : this.messages.success;
    }

    render() {
        const message = this.showMessage();

        return (
            <div>
                <div className="page-header text-center">
                  <h1>Sign in to Prodigi</h1>
                  <h4>Using your Lionlogin</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-sm-offset-4 col-md-offset-4">
                            <div className="account-wall">
                                <form className="form-signin" id="form-signin">
                                    <div className="form-group">
                                        <input ref={(node) => this.username = node} type="text" name="username" placeholder="Email" required="required" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input ref={(node) => this.password = node} type="password" name="password" placeholder="Password" required="required" className="form-control"/>
                                    </div>
                                    <button type="submit" onClick={this.onSignInClick} className="btn btn-lg btn-primary btn-block">Sign in</button><span className="clearfix"></span>
                                </form>
                            </div>
                            <br/>
                            <div className={`alert ${this.getAlertClass()}`}>
                                {message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
