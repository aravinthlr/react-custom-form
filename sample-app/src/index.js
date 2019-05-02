import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus';

const required = value => (value ? undefined : "Required");
const focusOnError = createDecorator();
const onSubmit =  values => {
  window.alert(JSON.stringify(values, 0, 2))
}

const App = () => (
    <Form
      onSubmit={onSubmit} subscription = {{values: true}} decorators={[focusOnError]}
      render={(formState) => (
        <form onSubmit={formState.handleSubmit}>
        <Field name="Name" validate={required}>
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <label>First Name</label>
              <input {...fieldState.input} type="text" placeholder="Name"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
              <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
            </div>
          )}
        </Field>
        <Field name="Age" validate={required}>
          {(fieldState) => (
            <div>
              <label>Age</label>
              <input {...fieldState.input} type="number" placeholder="Age"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
              <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
            </div>
          )}
        </Field>

            <Field name="employed" >
            {(fieldState) => (
              <div>
                <label>employed</label>
                <input {...fieldState.input} type="checkbox"/>
                <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
              </div>
            )}</Field>
            <Field name="Department" >
            {(fieldState) => (
              <div>
                <label>Department</label>
                <select {...fieldState.input}>
                <option />
                <option value="Engineering">Engineering</option>
                <option value="Human Resource Management">Human Resource Management</option>
                <option value="Accounting and Finance">Accounting and Finance</option>
                </select>
                <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
              </div>
            )}</Field>
            <Field name="Documents" >
            {(fieldState) => (
              <div>
                <label>Documents</label>
                <select {...fieldState.input} multiple>
                <option />
                <option value="HSC">HSC</option>
                <option value="DC">DC</option>
                </select>
                <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
              </div>
            )}</Field>
            <Field name="Notes" >{(fieldState) => (
              <div>
                <label>Notes</label>
                <input {...fieldState.input} type="textarea"/>
                <pre>{JSON.stringify(fieldState, 0, 2)}</pre>
              </div>
            )}</Field>
            <Field name="Experiance" value=">3">{(fieldState) => (
              <div>
                <input type="radio" {...fieldState.input}/>less than 3 years
              </div>
            )}</Field>
            <Field name="Experiance" value=">5">{(fieldState) => (
              <div>
                <input type="radio" {...fieldState.input}/>less than 5 years
              </div>)}</Field>
              <Field name="Experiance" value=">7">{(fieldState) => (
                <div>
                  <input type="radio" {...fieldState.input}/>less than 7 years
                </div>)}</Field>
          <div className="buttons">
            <button type="submit" disabled={formState.submitting || formState.pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={formState.form.reset}
              disabled={formState.submitting || formState.pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(formState, 0, 2)}</pre>
        </form>
      )}
    />
)

render(<App />, document.getElementById("root"));
