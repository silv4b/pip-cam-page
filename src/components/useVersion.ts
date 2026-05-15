"use client";

import { useState, useEffect } from "react";

const FALLBACK = { version: "1.3.0", url: "https://github.com/silv4b/pip-cam/releases" };

export default function useVersion() {
    const [info, setInfo] = useState(FALLBACK);

    useEffect(() => {
        fetch("https://api.github.com/repos/silv4b/pip-cam/releases/latest")
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => {
                if (d?.tag_name) {
                    setInfo({
                        version: d.tag_name.replace(/^v/i, ""),
                        url: d.html_url || FALLBACK.url,
                    });
                }
            })
            .catch(() => { });
    }, []);

    return info;
}
