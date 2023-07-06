import React, { useEffect, useState } from "react";
import {
  KeyValueFormFieldProps,
  KeyValueItem,
} from "./KeyValueFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";

const KeyValueFormField = (props: KeyValueFormFieldProps) => {
  const [items, setItems] = useState<Array<KeyValueItem>>([]);

  useEffect(() => {
    if (typeof props.value === "object") {
      setItems(
        Object.keys(props.value).map((item) => {
          return {
            key: item,
            value: props.value[item],
          };
        })
      );
    }
  }, []);

  useEffect(() => {
    let res: { [key: string]: string } = {};

    items.forEach((item) => {
      res[item.key] = item.value;
    });

    props.setValue(res);
  }, [items]);

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

                        return [...current];
                      });
                    }}
                  />
                  <div
                    className="remove"
                    onClick={() => {
                      setItems((current) => {
                        current.splice(i, 1);
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
