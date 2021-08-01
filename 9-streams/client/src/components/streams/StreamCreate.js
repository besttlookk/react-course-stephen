// import React from 'react';
// import {Field, reduxForm} from 'redux-form'
// import {createStream} from '../../actions/index'
// import {connect} from 'react-redux'

// class StreamCreate extends React.Component {

//   renderError({error, touched}){
//     if(touched && error){
//       return (
//         <div className='ui error message'>
//             <div className='header'>
//                 {error}
//             </div>
//         </div>
//       )
//     }
//   }

//   renderInput = (formProps) => {
//     // console.log(formProps)
//     // console.log(formProps.meta) // it has "error" property contaning error or touched
//     return (
//       // in react we need to always pass "value" & "onChange" property to input...for that we will use redux-form inbuilt-methods
//         // <input onChange={formProps.input.onChange} value={formProps.input.value}/> //we will be using short hand 
//         <div className="field">
//           <label>{formProps.label}</label>
//           <input {...formProps.input} autoComplete="off"/>
//           {/* <div>{formProps.meta.error}</div> */}
//           {this.renderError(formProps.meta)}

//         </div>

//       )
//   }

//     onSubmit = (formValues) =>{
//       // since we are using react-form...we dont have to write "e.preventDefault()"
//       // console.log(formValues) // we get the object containing all the values of the form
//       this.props.createStream(formValues)

//     }

//   render() {
//     // lots of props is passed once we pass redux form
//     // console.log(this.props)
//     return (
//       <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
//         {/* name props is must */}
//         {/* on its own "Field" component has ho idea how to render input element on the screen */}
//         {/* in order to this "field" how to show any form element, we have to assign a props to it called "component" */}
//         <Field name='title' component={this.renderInput} label='Enter Title'/>
//         <Field name='description' component={this.renderInput} label='Enter Description'/>
//         <button className="ui button primary" >Submit</button>
//       </form>
//     );
//   }
// }

// // for validating the form input...we need to define a function named "validate" outside the class
// // after every re-render of redux form this function will first get executed to check whether the user have entered the valid input
// // as the parameter it will get all the form values
// // if all the input us "VALID" we need to return "empty" object..that makes redux form thinks our form is VAlid
// // if there is any invalid input...we again haive to return an object. For each invalid field put a key-value pair on the object with the NAME of the field and the error message
// //     e.g error = {title : "You must enter a title"}
// // we need to pass this validate function in "reduxForm"

// // to make the error mesg to appear on the screens, redux form is going to look at every field name property and the look at the erros object that we returned from the validate.
// // if it has error message with the same name..then redux form will take the error message..and pass it to "renderInput" function
// const validate = (formValues) => { 
//   const errors = {}
//   if(!formValues.title){
//     // only ran if user did not enter title
//     errors.title = "You Must Enter A Title";
//   }
//   if(!formValues.description){
//     errors.description = "You Must Enter A Description";
//   }

//   return errors
// }

// // export default connect(null, {createStream})(reduxForm({
// //   // provide the name of the form as you wish
// //   form: "streamCreate",
// //   validate
// // })(StreamCreate));

// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate
// })(StreamCreate)

// export default connect(null, {createStream})(formWrapped)


// ===========after streamForm
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

