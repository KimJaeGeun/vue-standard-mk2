const pad = (value: number) => String(value).padStart(2, '0');

export const formatDate = (value: Date | string | number, separator = '-') => {
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return '';

    return [date.getFullYear(), pad(date.getMonth() + 1), pad(date.getDate())].join(separator);
};

export default formatDate;
