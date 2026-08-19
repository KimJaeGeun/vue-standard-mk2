import type { App } from 'vue';

import CompButton from '@/components/form/CompButton.vue';
import CompCheckbox from '@/components/form/CompCheckbox.vue';
import CompDatePicker from '@/components/form/CompDatePicker.vue';
import CompInput from '@/components/form/CompInput.vue';
import CompRadioButton from '@/components/form/radio/CompRadioButton.vue';
import CompRadioGroup from '@/components/form/radio/CompRadioGroup.vue';
import CompSelectBox from '@/components/form/select/CompSelectBox.vue';
import CompTabButton from '@/components/form/CompTabButton.vue';
import CompTextarea from '@/components/form/CompTextarea.vue';
import CompUploadFile from '@/components/form/CompUploadFile.vue';
import CompBadge from '@/components/CompBadge.vue';
import CompInfiniteScroll from '@/components/CompInfiniteScroll.vue';
import CompLoading from '@/components/CompLoading.vue';
import CompMessageModal from '@/components/CompMessageModal.vue';
import CompModal from '@/components/CompModal.vue';
import CompPagination from '@/components/CompPagination.vue';
import CompTable from '@/components/CompTable.vue';
import CompTooltip from '@/components/CompTooltip.vue';

const globalComponent = {
    CompButton,
    CompCheckbox,
    CompDatePicker,
    CompInput,
    CompRadioButton,
    CompRadioGroup,
    CompSelectBox,
    CompTabButton,
    CompTextarea,
    CompUploadFile,
    CompBadge,
    CompInfiniteScroll,
    CompLoading,
    CompMessageModal,
    CompModal,
    CompPagination,
    CompTable,
    CompTooltip,
};

const addGlobalComponent = (app: App<Element>) =>
    Object.entries(globalComponent).forEach(([name, component]) => {
        app.component(name, component);
    });

export default addGlobalComponent;
