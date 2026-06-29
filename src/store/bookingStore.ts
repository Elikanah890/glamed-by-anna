import { create } from 'zustand';
import { BookingFormData } from '@/types';

interface BookingStore {
  isBookingModalOpen: boolean;
  selectedService: string | null;
  formData: Partial<BookingFormData>;
  openBookingModal: (service?: string) => void;
  closeBookingModal: () => void;
  setFormData: (data: Partial<BookingFormData>) => void;
  resetForm: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  isBookingModalOpen: false,
  selectedService: null,
  formData: {},
  openBookingModal: (service) =>
    set({ isBookingModalOpen: true, selectedService: service || null }),
  closeBookingModal: () => set({ isBookingModalOpen: false }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  resetForm: () => set({ formData: {}, selectedService: null }),
}));
