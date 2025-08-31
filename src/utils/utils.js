export function convertMinutes(minutes)
{
    const hours=Math.floor(minutes/60);
    const remaining=minutes%60;
    return `${hours}h ${remaining}m`
}