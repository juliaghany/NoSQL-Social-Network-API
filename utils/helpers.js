// referenced Module 14 Activity 15
// formats date to MM/DD/YYYY

const dayjs = require('dayjs');

module.exports = {
    format_date: (date) => {
        const formatDate = dayjs(date);
        const formatDateTime = formatDate.format('MM/DD/YYYY h:mm A')

        return formatDateTime;
    }
}