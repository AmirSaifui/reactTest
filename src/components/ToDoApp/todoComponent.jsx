import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import AuthenticationService from './authenticationService.js'
import TodoServices from './Api/TodoServices.js'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUser()
        if (this.state.id === -1) {
            return
        } else {
            TodoServices.retreiveTodoForAUser(username, this.state.id)
                .then(response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }))
        }
    }


    //THis is called only when there are no errors returned from validate method below
    onSubmit = (values) => {
        // console.log(values)
        let username = AuthenticationService.getLoggedInUser()
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoServices.createTodo(username, todo)
                .then(
                    () => {
                        this.props.history.push('/todos')
                    }
                )
        } else {
            TodoServices.updateTheSelectedTodo(username, this.state.id, todo)
                .then(
                    () => {
                        this.props.history.push('/todos')
                    }
                )
        }

    }

    validate = (values) => {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a description"
        } else if (values.description.length < 4) {
            errors.description = "Length of description should be more than 4 chars"
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter valid date"
        }
        return errors
    }

    render() {
        let { description, targetDate } = this.state
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        validateOnBlur={false}
                        validateOnChange={false}
                        enableReinitialize={true}
                    >
                        {/* Initial values are linked to form elements by their name property */}
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}
export default TodoComponent