// referenced Module 14 Activity 15 
// formats date to MM/DD/YYYY

module.exports = {
    format_date: (date) => {
        const formatDate = new Date(date);
        const month = formatDate.getMonth() + 1;
        const day = formatDate.getDate();
        const year = formatDate.getFullYear();
        const hours = formatDate.getHours();
        const minutes = formatDate.getMinutes();

        const formatTime = `${hours}:${minutes}`;
        const formatDateTime = `${month}/${day}/${year} ${formatTime}`

        return formatDateTime;
    },
};