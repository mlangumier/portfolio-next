import en from './messages/en.json';

type TMessages = typeof en;

declare global {
    // Use type safe message keys with `next-intl`
    type IntlMessages = TMessages;
}
