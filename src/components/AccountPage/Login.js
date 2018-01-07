import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { cyan500 } from 'material-ui/styles/colors.js';

const style = {
    form: {
        width: 400,
        marginTop: 50 
    },
    link: {
        color: cyan500,
        fontSize: 13
    },
    h: {
        color : cyan500,
        margin: 0
    },
    paper: {
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
        paddingBottom: 30
    },
    div:{
        height: 50
    },
    p: {
        fontSize: 14
    }
  };

class Login extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passError: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        switch (name){
            case 'email': {
                if (value === ""){
                    this.setState({ emailError: 'Email is required.' });
                }
                else if (!value.includes('@')){
                    this.setState({ emailError: 'Email is invalid.' });
                }
                else this.setState({ emailError: '' });
                break;
            }
            default: {
                if (value === ""){
                    this.setState({ passError: 'Password is required.' });
                } 
                else this.setState({ passError: '' });
            }
            
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onClick(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className="mx-auto text-center" style={style.form}>
            <Paper zDepth={2} style={style.paper}>
                <h2 className='w-100 text-left' style={style.h}>Log into your wallet</h2>
               
                <TextField name="email" floatingLabelText="Email" type="email" fullWidth={true} 
                     errorText={this.state.emailError} onChange={this.handleChange} />
                <br />
                <TextField name="password" floatingLabelText="Password" type="password" fullWidth={true}
                     errorText={this.state.passError} onChange={this.handleChange}
                />
                <br />

                <RaisedButton className="mt-3 mb-1" fullWidth={true} label="Login" 
                primary={true} onClick={this.handleSubmit} />
                
                <div style={style.div}>
                    <p className="float-left m-0" style={style.p}>Don't have a wallet?&nbsp;    
                        <a href="/signup" style={style.link} >
                        Sign up now
                        </a>
                    </p>
                </div>
                
                </ Paper>
            </div>
           
        );
    }
    
}

Login.propTypes = {
    onClick: PropTypes.func.isRequired,
  }

export default Login