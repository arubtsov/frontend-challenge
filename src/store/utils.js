export function getNewId (transcriptions) {
    return Math.max(0, ...transcriptions.map(item => item.id)) + 1;
}