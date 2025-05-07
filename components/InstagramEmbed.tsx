// components/InstagramEmbed.tsx
"use client";

import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptExists = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    
    if (!scriptExists) {
      const script = document.createElement("script");
      script.setAttribute("src", "//www.instagram.com/embed.js");
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script already exists, reprocess embeds
      // @ts-ignore
      if (window?.instgrm?.Embeds?.process) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    }
  }, []);

  return (
    <div ref={embedRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "99.375%",
        }}
      ></blockquote>
    </div>
  );
};

export default InstagramEmbed;
