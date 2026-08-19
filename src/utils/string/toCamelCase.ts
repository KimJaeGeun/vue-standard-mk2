const toCamelCase = (value: string) =>
    value.replace(/[-_\s]+(.)?/g, (_, character: string = '') => character.toUpperCase());

export default toCamelCase;
