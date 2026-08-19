const isFileList = (value: unknown): value is FileList => value instanceof FileList;

export default isFileList;
