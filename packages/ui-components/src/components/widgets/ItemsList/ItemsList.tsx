/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import { ComponentSize } from "../../../models";
import { Action, ActionButton } from "../../forms";
import { Item, ItemsListProps } from "./ItemsList.types";

/**
 * ItemsList is a dynamic widgets that allow to show, and edit items.
 * It does not edit directly the items, instead, it displays the items
 * coming from the props, and notify the caller via callbacks.
 * Supported operations:
 *  - Add
 *  - Edit
 *  - Delete
 *
 * @param props Props for ItemsList component
 */
const ItemsList = (props: ItemsListProps) => {
  const onItemClick = props.onItemClick || (() => {});
  const onAddRequest = props.onAddRequest || (() => {});
  const onEditRequest = props.onEditRequest || (() => {});
  const onDeleteRequest = props.onDeleteRequest || (() => {});

  return (
    <div className="items-list">
      <div className="items-list-content">
        {props.items.map((item, i) => {
          return (
            <div className="item">
              <span
                className="display-text"
                key={i}
                onClick={(e) => {
                  // e.stopPropagation();

                  onItemClick(item, i);
                }}
              >
                {item.displayText}
              </span>
              <div className="item-toolbar btn-toolbar right">
                {props.editEnabled && (
                  <ActionButton
                    action={Action.Edit}
                    size={ComponentSize.Small}
                    onClick={() => {
                      onEditRequest(item, i);
                    }}
                  />
                )}

                {props.deleteEnabled && (
                  <ActionButton
                    action={Action.Delete}
                    size={ComponentSize.Small}
                    onClick={() => {
                      console.log("Here");
                      onDeleteRequest(item, i);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-toolbar center">
        {props.addEnabled && (
          <ActionButton
            action={Action.Add}
            onClick={() => {
              onAddRequest();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ItemsList;
