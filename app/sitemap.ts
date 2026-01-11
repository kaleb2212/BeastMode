import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://beastmodetechnologies.et"

    const routes = [
        "",
        "/services",
        "/get-started",
        "/contact",
        "/support",
        "/brands",
        "/consultation",
        "/architecture",
        "/services/cctv-camera-installation",
        "/services/ict-support",
        "/services/networking-services",
        "/services/alarm-system-intercom",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }))

    return routes
}
