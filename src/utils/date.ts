const fullFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
});

const monthYearFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
});

const yearFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
});

function parseLocalDate(date: Date | string): Date {
    let localDate: Date;

    if (typeof date === "string") {
        const [y, m, d] = date.split("-").map(Number);
        localDate = new Date(y, m - 1, d);
    } else {
        localDate = new Date(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate()
        );
    }

    return localDate;
}

export function formatDate(date: Date | string): string {
    return fullFormatter.format(parseLocalDate(date));
}

export function formatMonthYear(date: Date | string): string {    
    return monthYearFormatter.format(parseLocalDate(date));
}

export function formatYear(date: Date | string): string {
    return yearFormatter.format(parseLocalDate(date));
}
