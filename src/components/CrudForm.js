import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addFormData} from '../redux'

class CrudForm extends Component {
    constructor(){
        super();
        this.state = {
            name : '',
            email : '',
            gender : 'Male',
            comments : '',
            qualification : '',
            isReading: false,
            isBrowsing : false,
            isListening : false
        }
    }
    incrValue = 1;

    handleInputChange = event => {
		return this.setState({
			[event.target.name] : event.target.value
		})
    }
    onChangeIsReading = () => {
        this.setState(state => ({
            isReading : !state.isReading
        }))
    }
    onChangeIsBrowsing= () => {
        this.setState(state => ({
            isBrowsing : !state.isBrowsing
        }))
    }
    onChangeIsListening = () => {
        this.setState(state => ({
            isListening : !state.isListening
        }))
    }
    submitHandler = event => {
        event.preventDefault()
        let checkArray = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                checkArray.push(key);
            }
        }
console.log(checkArray.toString());
        let checkData = {
        checkbox: checkArray.toString()
        };
        const data = {
            id: this.incrValue,
            name : this.state.name,
            email : this.state.email,
            gender : this.state.gender,
            comments : this.state.comments,
            qualification : this.state.qualification
          }
          this.incrValue++;
          //console.log(data)
          this.props.dispatch(addFormData(data));
	}
    render() {
        const { name, email, comments, qualification } = this.state
        return (
            <div className="container">
                <h2>Please Fill Details</h2>
                <form onSubmit={this.submitHandler}>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input type="text" 
                        name="name" 
                        className="form-control" 
                        value={name} 
                        onChange={this.handleInputChange} /> 
                </div>
                <div className="form-group col-6">
                    <label htmlFor="exampleFormControlInput1">Email Address</label>
                    <input type="email" 
                        name="email" 
                        className="form-control" v
                        alue={email} 
                        onChange={this.handleInputChange} 
                        placeholder="name@example.com" /> 
                </div>
				<div className="form-group col-6">
					<label htmlFor="qualification">Qualification</label>
					<select className="form-control" name="qualification" value={qualification} onChange={this.handleInputChange}>
						<option value="Intermediate">Intermediate</option>
						<option value="Graduation">Graduation</option>
						<option value="Post Graduation">Post Graduation</option>
					</select>
				</div>
                <div className="form-group col-6">
                    <label htmlFor="gender">Gender</label>
                    <div className="">
                        <label className="radio-inline" htmlFor="gender"><input type="radio" value="Male" name="gender" onChange={this.handleInputChange}checked/> Male </label>
                        <label htmlFor="radio-inline"> <input type="radio" value="Female" name="gender" onChange={this.handleInputChange}/> Female</label>
                    </div>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="hobbies">Hobbies</label>
                    <div className="checkbox">
                        <label><input type="checkbox" checked={this.state.isApple} onChange={this.onChangeIsReading}/> Reading Books</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" checked={this.state.isApple} onChange={this.onChangeIsBrowsing}/> Browsing Internet</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" checked={this.state.isApple} onChange={this.onChangeIsListening}/> Listening Music</label>
                    </div>
                </div>
                <div className="form-group col-6">
                    <label htmlFor="comments">Comments</label>
                    <textarea 
                    name="comments" 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    value={comments} 
                    onChange={this.handleInputChange} 
                    rows="3"></textarea>
                </div>
                    <div className="form-group col-6">
                        <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary float-right">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect() (CrudForm)