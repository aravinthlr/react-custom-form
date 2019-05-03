import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus';
import formatString from "format-string-by-pattern";

const required = value => (value ? undefined : "Required");
const minValue = value => (parseInt(value) >= 10 ? undefined : "Min Value is 10");
const handleBlur = (val, prevVal) => console.log(val, prevVal);
const focusOnError = createDecorator();
const onSubmit =  values => {
  window.alert(JSON.stringify(values, 0, 2))
}

//const composeValidators = (...validators) => value =>
  //validators.reduce((error, validator) => error || validator(value), undefined);

  //validate={composeValidators(required, mustBeNumber, minValue(18))}

const App = () => (
  <Styles>
    <h1>React Final Form Component</h1>
    <h2>TextField</h2>

    <Form name="TextField" onSubmit={onSubmit} render={(formState) => (
        <form>
        <Field name="Name">
          {(fieldState) => (
            <div>
              <h3 className="width200px">Basic Text Field</h3>
              <input {...fieldState.input} type="text" placeholder="type something"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="RequiredName" validate={required}>
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <h3 className="width200px">Required Text Field</h3>
              <input {...fieldState.input} type="text" placeholder="type something"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="CustomErrorMessage" validate={minValue}>
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <h3 className="width200px">Custom Error Message Field</h3>
              <input {...fieldState.input} type="number" placeholder="type something"/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="textfieldwithtooltip" validate={minValue}>
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <h3 className="width200px">Text field with tooltip</h3>
              <input {...fieldState.input} type="number" placeholder="type something" title={fieldState.input.value}/>
              {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
            </div>
          )}
        </Field>
        <Field name="textBoxOnBlur">
          {(fieldState) => (
            <div className={fieldState.meta.active ? 'active': ''}>
              <h3 className="width200px">Input box on blur</h3>
              <input {...fieldState.input} type="text" placeholder="type something"  onBlur={() => alert("Blur event triggered")}/>
            </div>
          )}
        </Field>
        <Field
                name="fieldname"
                parse={formatString("999-999-9999")}

              >
                {(fieldState) => (
                  <div className={fieldState.meta.active ? 'active': ''}>
                    <h3 className="width200px">Formatted field(999-999-999)</h3>
                    <input {...fieldState.input} type="text" placeholder= "999-999-9999"/>
                    {fieldState.meta.error && fieldState.meta.touched && <span>{fieldState.meta.error}</span>}
                  </div>
                )}
            </Field>
        </form>
      )}
    />

    <Form name="EmployeeDetails"
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
