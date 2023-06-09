import React, { CSSProperties, useEffect, useRef } from "react";
import { AvatarHashProps } from "./AvatarHash.types";
// @ts-ignore
import jazzicon from "@metamask/jazzicon";

const AvatarHash = (props: AvatarHashProps) => {
  const hashCode = (s: string) => {
    return s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  };

  const avatar = useRef<HTMLDivElement>(null);

  const width = props.width || 100;

  const hash = hashCode(props.address || "");

  useEffect(() => {
    if (avatar.current) {
      avatar.current.innerHTML = "";

      let el = jazzicon(width, hash);
      // @ts-ignore
      avatar.current.appendChild(el);
    }
  }, [avatar.current, props.address, props.width, props.borderRadius]);

  const style = {
    "--border": props.borderRadius ? props.borderRadius + "px" : "50px",
  } as CSSProperties;

  return (
    <>
      <div
        className="avatar-hash"
        ref={avatar}
        style={{ ...style, height: width + "px", width: width + "px" }}
      ></div>
    </>
  );
};

export default AvatarHash;
