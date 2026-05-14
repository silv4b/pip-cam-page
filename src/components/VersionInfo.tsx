"use client";

import { useState, useEffect } from "react";

const FALLBACK_VERSION = "v1.3.0";
const FALLBACK_URL = "https://github.com/silv4b/pip-cam/releases";

const VersionInfo = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [releaseUrl, setReleaseUrl] = useState(FALLBACK_URL);

  useEffect(() => {
    fetch("https://api.github.com/repos/silv4b/pip-cam/releases/latest")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.tag_name) {
          setVersion(data.tag_name.replace(/^v/i, ""));
          if (data.html_url) setReleaseUrl(data.html_url);
        } else {
          setVersion(FALLBACK_VERSION);
        }
      })
      .catch(() => setVersion(FALLBACK_VERSION));
  }, []);

  return { version: version || FALLBACK_VERSION, releaseUrl };
};

export { VersionInfo as default, FALLBACK_VERSION, FALLBACK_URL };
