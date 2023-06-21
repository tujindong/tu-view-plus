import { onUpdated, ref, Slots } from 'vue';

export const usePickSlots = (slots: Slots, slotName: string) => {
  const slot = ref(slots[slotName]);

  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });

  return slot;
};
