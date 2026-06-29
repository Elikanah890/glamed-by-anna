import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles, Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, Check, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils';
import { getWhatsAppLink, getDirectWhatsAppLink } from '@/utils';
import { services } from '@/constants';
import { Button } from '@/components/ui/Button';

const bookingSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  phone: z.string().min(9, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  location: z.enum(['studio', 'home']),
  message: z.string().optional(),
  agreedToPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the booking policy',
  }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      location: 'studio',
      message: '',
      agreedToPolicy: false,
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    const link = getWhatsAppLink(data);
    setSubmitted(true);
    window.open(link, '_blank');
  };

  const handleInstantWhatsApp = () => {
    window.open(getDirectWhatsAppLink(), '_blank');
  };

  const inputClasses = 'w-full px-4 py-3 rounded-xl bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-gray-700 text-[#1C1C1C] dark:text-white placeholder-gray-400 text-sm font-body focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3"
        >
          <Check size={20} className="text-green-500 flex-shrink-0" />
          <p className="text-green-700 dark:text-green-300 text-sm font-body">
            {t('booking.success')}
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
            <User size={14} className="text-[#D4AF37]" />
            {t('booking.form.name')} *
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder={t('booking.form.namePlaceholder')}
            className={cn(inputClasses, errors.name && 'border-red-400')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
              <Phone size={14} className="text-[#D4AF37]" />
              {t('booking.form.phone')} *
            </label>
            <input
              type="tel"
              {...register('phone')}
              placeholder={t('booking.form.phonePlaceholder')}
              className={cn(inputClasses, errors.phone && 'border-red-400')}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
                <AlertCircle size={12} /> {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
              <Mail size={14} className="text-[#D4AF37]" />
              {t('booking.form.email')} *
            </label>
            <input
              type="email"
              {...register('email')}
              placeholder={t('booking.form.emailPlaceholder')}
              className={cn(inputClasses, errors.email && 'border-red-400')}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
                <AlertCircle size={12} /> {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
            <Sparkles size={14} className="text-[#D4AF37]" />
            {t('booking.form.service')} *
          </label>
          <select
            {...register('service')}
            className={cn(inputClasses, errors.service && 'border-red-400')}
          >
            <option value="">{t('booking.form.servicePlaceholder')}</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>{s.title}</option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
              <AlertCircle size={12} /> {errors.service.message}
            </p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
              <Calendar size={14} className="text-[#D4AF37]" />
              {t('booking.form.date')} *
            </label>
            <input
              type="date"
              {...register('date')}
              min={new Date().toISOString().split('T')[0]}
              className={cn(inputClasses, errors.date && 'border-red-400')}
            />
            {errors.date && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
                <AlertCircle size={12} /> {errors.date.message}
              </p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
              <Clock size={14} className="text-[#D4AF37]" />
              {t('booking.form.time')} *
            </label>
            <input
              type="time"
              {...register('time')}
              className={cn(inputClasses, errors.time && 'border-red-400')}
            />
            {errors.time && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
                <AlertCircle size={12} /> {errors.time.message}
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
            <MapPin size={14} className="text-[#D4AF37]" />
            {t('booking.form.location')} *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className={cn(
              'flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all font-body text-sm',
              watch('location') === 'studio'
                ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37]'
                : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'
            )}>
              <input
                type="radio"
                {...register('location')}
                value="studio"
                className="sr-only"
              />
              {t('booking.form.studio')}
            </label>
            <label className={cn(
              'flex items-center justify-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all font-body text-sm',
              watch('location') === 'home'
                ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37]'
                : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300'
            )}>
              <input
                type="radio"
                {...register('location')}
                value="home"
                className="sr-only"
              />
              {t('booking.form.home')}
            </label>
          </div>
          {errors.location && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
              <AlertCircle size={12} /> {errors.location.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 font-body">
            <MessageSquare size={14} className="text-[#D4AF37]" />
            {t('booking.form.message')}
          </label>
          <textarea
            {...register('message')}
            rows={3}
            placeholder={t('booking.form.messagePlaceholder')}
            className={cn(inputClasses, 'resize-none')}
          />
        </div>

        {/* Policy Agreement */}
        <div>
          <label className={cn(
            'flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all',
            errors.agreedToPolicy
              ? 'border-red-400 bg-red-50 dark:bg-red-900/10'
              : 'border-gray-200 dark:border-gray-700 hover:border-[#D4AF37]/30'
          )}>
            <input
              type="checkbox"
              {...register('agreedToPolicy')}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
            />
            <span className="text-xs text-gray-500 dark:text-gray-400 font-body leading-relaxed">
              {t('booking.form.policy')}
            </span>
          </label>
          {errors.agreedToPolicy && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1 font-body">
              <AlertCircle size={12} /> {errors.agreedToPolicy.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="space-y-3 pt-2">
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            <MessageCircle size={18} />
            {t('booking.form.submit')}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-4 bg-[#F8F5F2] dark:bg-[#121212] text-gray-400 font-body">or</span>
            </div>
          </div>

          <Button
            type="button"
            variant="primary"
            size="md"
            className="w-full"
            onClick={handleInstantWhatsApp}
          >
            <MessageCircle size={16} />
            {t('booking.form.instant')}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
