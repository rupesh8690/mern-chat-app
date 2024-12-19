// generated from chatgpt
export function extractTime(dateString) {
    // Create a Date object from the given MongoDB timestamp
    const date = new Date(dateString);

    // Extract hours and minutes from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Format hours and minutes to always display two digits
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Return the formatted time as 'hours:minutes'
    return `${formattedHours}:${formattedMinutes}`;
}

