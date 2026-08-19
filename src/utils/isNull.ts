const isNull = (value: unknown): value is null | undefined => value === null || value === undefined;

export default isNull;
