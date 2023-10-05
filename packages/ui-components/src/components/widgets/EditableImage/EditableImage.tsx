import React, { useEffect, useState } from "react";
import { EditableImageProps, EditableImagesSize } from "./EditableImage.types";
import { PageCard, Popup, usePopup } from "../../page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import {
  DropZoneFormField,
  FieldComponentProps,
  FormOnSubmitDataModel,
  FormV2,
  useFormV2,
} from "../../forms";
import { AvatarHash } from "../../common";

const EditableImage = (props: EditableImageProps) => {
  const popupLogic = usePopup();

  const size = props.size || EditableImagesSize.Medium;

  const formLogic = useFormV2({});

  const [isFormLoaded, setIsFormLoaded] = useState<boolean>(false);

  const [image, setImage] = useState<string | null>(props.image);

  useEffect(() => {
    formLogic.addField({
      key: "image",
      value: "",
      label: "Set new Image",
      fieldComponent: DropZoneFormField as React.FC<FieldComponentProps>,
    });

    formLogic.enableSubmit(true);

    setIsFormLoaded(true);
  }, []);

  useEffect(() => {
    if (isFormLoaded) {
      formLogic.setValue("image", props.image);
    }
  }, [props.image, isFormLoaded]);

  useEffect(() => {
    (async () => {
      if (image) {
        let res;
        try {
          res = await fetch(image);
        } catch (err) {
          console.log("err");
          setImage(null);
          if (props.onError) {
            props.onError();
          }
        }

        if (!res || typeof res === "undefined" || res.status !== 200) {
          setImage(null);
          if (props.onError) {
            props.onError();
          }
        }
      }
    })();
  }, [image, isFormLoaded]);

  return (
    <>
      <div className="editable-image">
        <Popup popupLogic={popupLogic}>
          <div className="wrapper">
            <FormV2
              formLogic={formLogic}
              onSubmit={(formData: FormOnSubmitDataModel) => {
                setImage(formData.values.image);
                if (props.onSubmit) {
                  props.onSubmit(formData.values.image);
                }
                popupLogic.closePopup();
              }}
            />
          </div>
        </Popup>
        <div
          className={`image-wrapper ${
            size === EditableImagesSize.Small
              ? "small"
              : size === EditableImagesSize.Medium
              ? "medium"
              : "large"
          }`}
        >
          {props.iconString && !image ? (
            <AvatarHash address={props.iconString || ""} />
          ) : (
            <img src={image || ""} alt="" className="image" />
          )}
          <div
            className="pencil"
            onClick={() => {
              popupLogic.openPopup();
            }}
          >
            <FontAwesomeIcon icon={faPencil} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditableImage;
