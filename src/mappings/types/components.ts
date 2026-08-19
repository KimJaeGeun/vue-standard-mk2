export type InputValue = string | number;
export type SelectValue = InputValue | boolean;

export type Option = {
    label: string;
    value: SelectValue;
    disabled?: boolean;
};

export type InputOption = {
    label: string;
    value: InputValue;
    disabled?: boolean;
};

export type TabOption = InputOption & {
    disabled?: boolean;
    badge?: string;
};
