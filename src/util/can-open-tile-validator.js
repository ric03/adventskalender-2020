const DECEMBER_INDEX = 11; // months are zero indexed.

export function canOpenTile(dayOfMonth, date = new Date()) {
    if (window.DISABLE_DATE_LOCK) return true;


    const isDecember = date.getMonth() === DECEMBER_INDEX;
    const isPreviousOrSameDay = dayOfMonth <= date.getDate();

    return isDecember && isPreviousOrSameDay;
}