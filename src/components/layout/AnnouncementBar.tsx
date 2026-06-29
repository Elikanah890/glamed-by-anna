import { motion } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { WHATSAPP_LINK } from '@/constants';

interface AnnouncementBarProps {
  onClose: () => void;
}

export function AnnouncementBar({ onClose }: AnnouncementBarProps) {
  const { t } = useTranslation();

  return (
    <div className="relative z-[60] bg-gradient-gold text-white overflow-hidden">
      <div className="container-luxury flex items-center justify-between py-2 text-sm">
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline font-body"
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">{t('announcement.text', 'Book Your Appointment Today & Get 10% Off!')}</span>
            <span className="sm:hidden">{t('announcement.textShort', 'Book & Get 10% Off!')}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label={t('announcement.close', 'Close announcement')}
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
