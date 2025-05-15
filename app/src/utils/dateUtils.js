export function formatDate(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function getWeekRange(date = new Date()) {
    const currentDay = new Date(date);
    const dayOfWeek = currentDay.getDay();
    const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
    
    const firstDayOfWeek = new Date(currentDay);
    firstDayOfWeek.setDate(currentDay.getDate() + diffToMonday);
    
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
    
    return {
        firstDay: formatDate(firstDayOfWeek),
        lastDay: formatDate(lastDayOfWeek)
    };
}

