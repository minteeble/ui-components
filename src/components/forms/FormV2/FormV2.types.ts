/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

/**
 * Form V2 Hook props object
 */
export interface UseFormV2Props {}

/**
 * Base props model for every field component
 * (The props will be automatically provided by the FormV2 component)
 */
export interface FieldComponentProps {
  /**
   * Value (read-only)
   */
  value: any;

  /**
   * Sets new value
   *
   * @param newValue New field value to be set
   */
  setValue(newValue: any): void;

  /**
   * Field key (lowercase)
   */
  key: string;

  /**
   * Displayed label
   */
  label: string;

  /**
   * Displayed error
   */
  error?: string;

  /**
   * Reference to current form data.
   * Useful for accessing other fields data.
   */
  formData: FormInjectedData;

  /**
   * Field placeholder text. Default to empty string
   */
  placeholder?: string;

  /**
   * Other key-value
   */
  attributes?: any;
}

export interface FormFieldState {
  /**
   * Field key (lowercase)
   */
  key: string;

  /**
   * Value (read-only)
   */
  value: any;

  /**
   * Displayed label
   */
  label: string;

  /**
   * Displayed error
   */
  error?: string;

  /**
   * Field placeholder text. Default to empty string
   */
  placeholder?: string;

  /**
   * Other key-value
   */
  attributes?: any;

  /**
   * Field component to be used.
   */
  fieldComponent: React.FC<FieldComponentProps>;

  enableCustomRendering?: boolean;

  /**
   * Useful predicate for transforming the value after calling `setValue`.
   * It receives in input the value to be transofrmed and returns the transformed/sanitized
   * value, to be set as field value
   */
  transform?: (value: any) => any;

  /**
   * Useful predicate for validating field value. It should return true
   * if value is correct, and false otherwise. It also can return strings,
   * representing custom error messages.
   * Validation is executed before "transform" predicate.
   */
  validate?: (value: any) => boolean | string;

  active?: ((value: any, fields: Array<FormFieldState>) => boolean) | boolean;

  /**
   * Specifies if invalid values should be displayed, even
   * if the validate predicate returns false/error.
   * True by default.
   */
  displayInvalidValue?: boolean;

  /**
   * Specifies if field is read-only or not. False by default.
   */
  readOnly?: boolean;
}

// TODO fix/remove
export interface FormFieldInternalState extends FormFieldState {
  formLogic: FormLogic;
}

/**
 * Object model for form data injected inside every field component
 */
export interface FormInjectedData {
  /**
   * List of field data
   */
  fields: Array<FormFieldState>;
}

/**
 * Form V2 logic object. It allows to accomplish all the required actions to a form
 * (read/write, updating of fields info, etc.)
 */
export interface FormLogic {
  /**
   * Adds a new field to the form
   *
   * @param newField New field to be added
   */
  addField(newField: FormFieldState): void;

  /**
   * Removes a field, by specifying its key string
   *
   * @param key Key string of the field to be removed
   */
  removeField(key: string): void;

  /**
   * Sets a new value for an existing field.
   *
   * @param key Key of the field to be updated
   * @param newValue New value to be set
   */
  setValue(key: string, newValue: any): void;

  /**
   * List of field data
   */
  fields: Array<FormFieldState>;

  /**
   * Event listener triggered every time a value changes.
   *
   * @param callback Callback fired every time a value changes. It contains new list of fields data
   */
  onValueChange(callback: (fields: Array<FormFieldState>) => void): void;

  /**
   * Event listener for targetting a specific field.
   *
   * @param key Key of the field to listen for changes from
   * @param callback Callback fired every time the specified field changes its value
   */
  onFieldValueChange(
    key: string,
    callback: (field: FormFieldState) => void
  ): void;
  /**
   * Specifies if submit is enabled or not
   */
  isSubmitEnabled: boolean;
  /**
   * Enable or disable submit
   *
   * @param newValue Specifies if submit is enable or not
   */
  enableSubmit: (newValue: boolean) => void;
  /**
   * Text of submit button
   */
  submitButtonText: string;
  /**
   * Edit text of submit button
   *
   * @param newText Specifies the new text of submit button
   */
  setSubmitText: (newText: string) => void;
  /**
   * Fuction that will be call at submit
   *
   * @param formData List of Form datas including fields
   */
  onSubmit: (formData: FormInjectedData) => void;
  /**
   * Set the submit fuction
   *
   * @param newFunction Fuction that will be call at submit
   */
  setOnSubmit: (newFunction: (formData: FormInjectedData) => void) => void;
}

/**
 * Form V2 props object
 */
export interface FormV2Props {
  formLogic: FormLogic;
}
