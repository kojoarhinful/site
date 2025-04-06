"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-8">
      <Giscus
        repo="kojoarhinful/site"
        repoId="R_kgDOOSzdyw"
        category="General"
        categoryId="DIC_kwDOOSzdy84Co0iG"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light" // for now
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
