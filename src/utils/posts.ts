export function formatDate(date: string) {
    const dateOptions: object = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    }
    return new Date(date).toLocaleDateString("en-US", dateOptions);
}
