export const listNo = (total: number, page: number, size: number, index: number) =>
    total - (page - 1) * size - index;

export default listNo;
