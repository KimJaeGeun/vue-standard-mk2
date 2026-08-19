import { defineStore } from 'pinia';

type ModalType = 'alert' | 'confirm';
type ModalCallback = {
    ok?: () => void | Promise<void>;
    cancel?: () => void;
};

type ModalOptions = {
    title?: string;
    type?: ModalType;
    message: string;
    buttonName?: {
        ok?: string;
        cancel?: string;
    };
    callback?: ModalCallback;
};

type MessageModalState = {
    show: boolean;
    title: string;
    type: ModalType;
    message: string;
    buttonName: {
        ok: string;
        cancel: string;
    };
    callback: ModalCallback;
};

const useMessageModalStore = defineStore('messageModal', {
    state: (): MessageModalState => ({
        show: false,
        title: '알림',
        type: 'alert' as ModalType,
        message: '',
        buttonName: {
            ok: '확인',
            cancel: '취소',
        },
        callback: {
            ok: undefined,
            cancel: undefined,
        },
    }),
    actions: {
        open(options: ModalOptions) {
            this.title = options.title ?? '알림';
            this.type = options.type ?? 'alert';
            this.message = options.message;
            this.buttonName.ok = options.buttonName?.ok ?? '확인';
            this.buttonName.cancel = options.buttonName?.cancel ?? '취소';
            this.callback.ok = options.callback?.ok;
            this.callback.cancel = options.callback?.cancel;
            this.show = true;
        },
        async onButtonClick(type: 'ok' | 'cancel') {
            const callback = this.callback[type];
            this.$reset();
            await callback?.();
        },
    },
});

export default useMessageModalStore;
