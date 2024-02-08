import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ru } from "../locales/ru";

export const useTranslation = () => {
  const router = useRouter();
  return router.locale === "en" ? en : ru;
};
