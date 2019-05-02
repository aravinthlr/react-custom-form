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
  <Styles>
    <h1>React Final Form Component</h1>
    <h3>TextField</h3>
    <Form
      onSubmit={onSubmit} subscription = {{values: true}} decorators={[focusOnError]}
      render={(formState) => (
        <form onSubmit={formState.handleSubmit}>
        
        <Field name="Name" validate={required}>
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <label>Name</label>
              <input {...fieldState.input} type="text" placeholder="Name"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="Age" validate={required}>
          {(fieldState) => (
            <div>
              <label>Age</label>
              <input {...fieldState.input} type="number" placeholder="Age"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>

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
              </div>
            )}</Field>
            <Field name="Notes" >{(fieldState) => (
              <div>
                <label>Notes</label>
                <input {...fieldState.input} type="textarea"/>
              </div>
            )}</Field>
            <div>
              <label>
                <Field
                  name="Experiance"
                  component="input"
                  type="radio"
                  value=">3"
                />{' '}
                less than 3 years
              </label>
              </div>
            <div>
            <label>
                <Field
                  name="Experiance"
                  component="input"
                  type="radio"
                  value=">5"
                />{' '}
                less than 5 years
              </label>
              </div>
              <div>
              <label>
                <Field
                  name="Experiance"
                  component="input"
                  type="radio"
                  value=">7"
                />{' '}
                less than 7 years
              </label>
              </div>
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
        </form>
      )}
    />
    </Styles>
)

render(<App />, document.getElementById("root"));
