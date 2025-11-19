import React, { useState } from "react";

const FALLBACK_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
       <rect width="100%" height="100%" fill="#eee"/>
       <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-size="20">Image not available</text>
     </svg>`
  );

export default function SmartImage({ src, alt = "", className = "", style = {}, ...props }) {
  const [failed, setFailed] = useState(false);

  const finalSrc = !src || failed ? FALLBACK_SVG : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
