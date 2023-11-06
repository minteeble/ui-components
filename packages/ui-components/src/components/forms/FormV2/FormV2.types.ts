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
  /**
   * Specifies if field is read-only or not. False by default.
   */
  readOnly?: boolean;
  /**
   * Specifies if value can be copied in readonly mode. False by default
   */
  copyable?: boolean;
  /**
   * Specifies a link for field in readonly mode
   */
  link?: string;
  /**
   * Specifies if the field can be edit or not. False by default
   */
  disabled?: boolean;
}

export interface FormFieldUpdateModel {
  /**
   * Displayed label
   */
  label?: string;

  /**
   * Field placeholder text. Default to empty string
   */
  placeholder?: string;

  /**
   * Other key-value
   */
  attributes?: any;

  /**
   * Specifies is field has to be rendered or not.
   */
  active?: ((value: any, fields: Array<FormFieldState>) => boolean) | boolean;

  /**
   * Specifies if field is read-only or not. False by default.
   */
  readOnly?: boolean;

  /**
   * Specifies if field is required or not.
   */
  required?: boolean;
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
   * Specifies if field is required or not.
   */
  required?: boolean;

  /**
   * Field component to be used.
   */
  fieldComponent: React.FC<FieldComponentProps>;

  /**
   * If set, the field is rendererd just as it is, without the form field wrapper (with label, alignment, error handling)
   * By default it is set to false, so that every field will have the wrapper.
   */
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

  /**
   * Specifies is field has to be rendered or not.
   */
  active?: ((value: any, fields: Array<FormFieldState>) => boolean) | boolean;

  /**
   * Specifies if invalid values should be displayed, even
   * if the validate predicate returns false/error.
   * True by default.
   */
  displayInvalidValue?: boolean;

  /**
   * If set to true, than the errors appean every time they are fired. Instead,
   * if set to false, it will be checked for errors just during the submit operation.
   * False by default.
   */
  showLiveError?: boolean;

  /**
   * Specifies if field is read-only or not. False by default.
   */
  readOnly?: boolean;
  /**
   * Specifies if value can be copied in readonly mode. False by default
   */
  copyable?: boolean;
  /**
   * Specifies a link for field in readonly mode
   */
  link?: string;
  /**
   * Specifies if the field can be edit or not. False by default
   */
  disabled?: boolean;
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
   * Allow to clear all form fields
   */
  clearForm: () => void;
  /**
   * Sets a new value for an existing field.
   *
   * @param key Key of the field to be updated
   * @param newValue New value to be set
   */
  setValue(key: string, newValue: any): void;

  /**
   * Updates an existing an field.
   *
   * @param key Key of the field to be updated
   * @param updateModel Object with new values to be set
   */
  updateField(key: string, updateModel: FormFieldUpdateModel): void;

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
   * Set the submit fuction
   *
   * @param newFunction Fuction that will be call at submit
   */
  onSubmit: (callback: (formData: FormOnSubmitDataModel) => void) => void;

  /**
   * Submits form. It fires the onSubmit event
   */
  submit(): Promise<void>;
  /**
   * Specifies submit button alignment. Center by default
   */
  submitAlignment: SubmitButtonAlignment;
  /**
   * Allow to set submit button alignment
   * @param value new alignment
   */
  setSubmitButtonAlignment: (value: SubmitButtonAlignment) => void;

  /**
   * Specififes if form has been already initialized or not.
   */
  formInitialized: boolean;
}

/**
 * Data model returned by onSubmit event
 */
export interface FormOnSubmitDataModel {
  /**
   * List of fields states
   */
  fields: Array<FormFieldState>;

  /**
   * key-value mapping for form fields
   */
  values: { [key: string]: any };
}

/**
 * Form V2 props object
 */
export interface FormV2Props {
  /**
   * For logic object
   */
  formLogic: FormLogic;

  /**
   * On Submit callback.
   */
  onSubmit?: (formData: FormOnSubmitDataModel) => void | Promise<void>;
}
/**
 * Submit button alignment
 */
export enum SubmitButtonAlignment {
  Left = 1,
  Center,
  Right,
}
/**
 * Internal value option
 */
export interface internalValue {
  /**
   * Option icon
   */
  icon?: string | JSX.Element;
  /**
   * Displayed value
   */
  text: string;
  /**
   * Real value
   */
  value: string;
}
