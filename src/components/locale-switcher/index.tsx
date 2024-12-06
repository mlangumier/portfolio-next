import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useTransition } from 'react';

import { englishFlagIcon, frenchFlagIcon } from '@/assets/images';
import { ILocale, usePathname, useRouter } from '@/i18n/routing';

interface Props {
  handleCloseMobileMenu?: () => void;
}

const LocalSwitcher: React.FC<Props> = ({ handleCloseMobileMenu }) => {
  const locale = useLocale() as ILocale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // Add 'isPending' to use with Spinner
  const pathname = usePathname();
  const params = useParams();

  const handleSwitchLocale = (nextLocale: ILocale) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });

    if (handleCloseMobileMenu) handleCloseMobileMenu();
  };

  return (
    <button
      className="hover:cursor-pointer"
      onClick={() => handleSwitchLocale(locale === 'fr' ? 'en' : 'fr')}
      disabled={isPending}
    >
      {locale === 'fr' ? (
        <Image src={englishFlagIcon} alt="" className="size-9 md:size-7" />
      ) : (
        <Image src={frenchFlagIcon} alt="" className="size-9 md:size-7" />
      )}
    </button>
  );
};

export default LocalSwitcher;
