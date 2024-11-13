import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useTransition } from 'react';

import { englishFlagIcon, frenchFlagIcon } from '@/assets/images';
import { Locale, usePathname, useRouter } from '@/i18n/routing';

interface Props {
  btnLabel: string;
  handleCloseMobileMenu: () => void;
}

const LocalSwitcher: React.FC<Props> = ({ btnLabel, handleCloseMobileMenu }) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // Add 'isPending' to use with Spinner
  const pathname = usePathname();
  const params = useParams();

  const handleSwitchLocale = (nextLocale: Locale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
    handleCloseMobileMenu();
  };

  return (
    <button
      aria-label={btnLabel}
      className="hover:cursor-pointer"
      onClick={() => handleSwitchLocale(locale === 'fr' ? 'en' : 'fr')}
      disabled={isPending}
    >
      {locale === 'fr' ? (
        <Image src={englishFlagIcon} alt="" height={40} width={40} className="size-16 md:size-10" />
      ) : (
        <Image src={frenchFlagIcon} alt="" height={40} width={40} className="size-16 md:size-10" />
      )}
    </button>
  );
};

export default LocalSwitcher;
