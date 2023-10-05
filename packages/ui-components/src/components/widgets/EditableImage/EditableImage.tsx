import React, { useEffect, useState } from "react";
import { EditableImageProps, EditableImagesSize } from "./EditableImage.types";
import { PageCard, Popup, usePopup } from "../../page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import {
  DropZoneFormField,
  DropZoneFormFieldProps,
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
      value: [],
      label: "Set new Image",
      fieldComponent: DropZoneFormField as React.FC<FieldComponentProps>,
      attributes: {},
    });

    formLogic.enableSubmit(true);

    setIsFormLoaded(true);
  }, []);

  useEffect(() => {
    if (isFormLoaded && props.image) {
      formLogic.setValue("image", [props.image]);
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

  const fileToArrayBuffer = (file: any) => {
    return new Promise<any>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;

        resolve(arrayBuffer);
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const fileToBase64 = async (file: any) => {
    const buffer = await fileToArrayBuffer(file);
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <>
      <div className="editable-image">
        <Popup popupLogic={popupLogic} closeCrossEnabled>
          <div className="wrapper">
            <h1 className="title kanit">Update image</h1>
            <FormV2
              formLogic={formLogic}
              onSubmit={async (formData: FormOnSubmitDataModel) => {
                const image = await fileToArrayBuffer(formData.values.image[0]);
                setImage(image);
                if (props.onSubmit) {
                  props.onSubmit(image);
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
