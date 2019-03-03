export function getNewId (transcriptions) {
    const maxId = Math.max(0, ...transcriptions.map(item => item.id));

    return maxId && maxId + 1;
}