import React, { useEffect, useState } from "react";
import {
  KeyValueFormFieldProps,
  KeyValueItem,
} from "./KeyValueFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const KeyValueFormField = (props: KeyValueFormFieldProps) => {
  const [items, setItems] = useState<Array<KeyValueItem>>([]);

  const setValueFromItems = (newItems: KeyValueItem[]) => {
    let res: { [key: string]: string } = {};

    newItems.forEach((item) => {
      res[item.key] = item.value;
    });

    props.setValue(res);
  };

  useEffect(() => {
    setItems(
      Object.keys(props.value).map((item) => ({
        key: item,
        value: props.value[item],
      }))
    );
  }, [props.value]);

  return (
    <>
      <div
        className={`key-value-form-field form-field ${
          props.disabled ? "disabled" : ""
        }`}
      >
        {items.length > 0 ? (
          items.map((item, i) => {
            return (
              <>
                <div className="item">
                  <input
                    type="text"
                    className="key montserrat"
                    placeholder="key"
                    value={item.key}
                    onChange={(e) => {
                      setItems((current) => {
                        const element = current.find(
                          (elem) => elem.key === item.key
                        );

                        if (element) {
                          element.key = e.target.value;
                        }

                        setValueFromItems(current);

                        return [...current];
                      });
                    }}
                  />
                  <input
                    type="text"
                    className="value montserrat"
                    value={item.value}
                    placeholder="value"
                    onChange={(e) => {
                      setItems((current) => {
                        const element = current.find(
                          (elem) => elem.value === item.value
                        );

                        if (element) {
                          element.value = e.target.value;
                        }

                        setValueFromItems(current);

                        return [...current];
                      });
                    }}
                  />
                  <div
                    className="remove"
                    onClick={() => {
                      setItems((current) => {
                        current.splice(i, 1);
                        setValueFromItems(current);

                        return [...current];
                      });
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <span className="no-items">no items</span>
        )}
        <div
          className="add-row"
          onClick={() => {
            setItems((current) => {
              current.push({ key: "", value: "" });
              setValueFromItems(current);

              return [...current];
            });
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </>
  );
};

export default KeyValueFormField;
