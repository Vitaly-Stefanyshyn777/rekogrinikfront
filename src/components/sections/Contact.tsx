"use client";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  CheckMarkIcon,
  NumberIcon,
  EmailIcon,
  Instagram2Icon,
  TelegramIcon,
  MessageIcon,
  TimeIcon,
} from "@/components/Icons/Icons";

type FormValues = {
  email: string;
  phone: string;
  name: string;
  address: string;
  workType: string;
  consent: boolean;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { workType: "", consent: false },
  });

  const onSubmit = (data: FormValues) => {
    console.log("contact form:", data);
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftTopRow}>
            <div className={styles.leftCol}>
              <span className={styles.h1}>
                Jste připraveni začít s vaším projektem?
              </span>
              <p>
                Zanechte nám požadavek a náš specialista se s vámi do hodiny
                spojí, aby s vámi probral podrobnosti a provedl bezplatnou
                prohlídku nemovitosti.
              </p>
            </div>
            <div className={styles.leftCollow}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <NumberIcon />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.phoneTitle}>+420 608 583 115</p>
                  <p className={styles.phoneSub}>Volejte kdykoliv</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <EmailIcon />
                </span>
                <div className={styles.infoText}>
                  <p className={styles.emailTitle}>rekogrinikcz@gmail.com</p>
                  <p className={styles.emailSub}>Odpovídáme do hodiny</p>
                </div>
              </div>
            </div>

            <div className={styles.leftBottom}>
              <div className={styles.scheduleBlock}>
                <div className={styles.timeRow}>
                  <span className={styles.timeIcon}>
                    <TimeIcon />
                  </span>
                  <p>Pracovní harmonogram</p>
                </div>
                <div className={styles.schedule}>
                  <div className={styles.scheduleCol}>
                    <p className={styles.scheduleDays}>Пн–Пт</p>
                    <p className={styles.scheduleTime}>08:00 - 20:00</p>
                  </div>
                  <div className={styles.scheduleCol}>
                    <p className={styles.scheduleDays}>Сб–Нд</p>
                    <p className={styles.scheduleTime}>09:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <div className={styles.socialBlock}>
                <p className={styles.followTitle}>Sledujte nás</p>
                <div className={styles.iconsRow}>
                  <div className={styles.iconWrap}>
                    <Instagram2Icon />
                  </div>
                  <div className={styles.iconWrap}>
                    <TelegramIcon />
                  </div>
                  <div className={styles.iconWrap}>
                    <MessageIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGrid}>
              <div className={styles.fieldPair}>
                <div className={styles.field}>
                  <input
                    placeholder="Email pro kontakt"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span className={styles.err}>*</span>}
                </div>
                <div className={styles.field}>
                  <input
                    placeholder="Vaše telefonní číslo"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && <span className={styles.err}>*</span>}
                </div>
              </div>
              <div className={styles.fieldPair}>
                <div className={styles.field}>
                  <input
                    placeholder="Jméno na adresu"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span className={styles.err}>*</span>}
                </div>
                <div className={styles.field}>
                  <input
                    placeholder="Vaše adresa"
                    {...register("address", { required: true })}
                  />
                  {errors.address && <span className={styles.err}>*</span>}
                </div>
              </div>
            </div>
            <div className={styles.selectRow}>
              <select {...register("workType", { required: true })}>
                <option value="" disabled>
                  Vyberte typ práce
                </option>
                <option value="flat">Rekonstrukce bytu</option>
                <option value="bath">Koupelny</option>
                <option value="drywall">Sádrokarton</option>
              </select>
              <span className={styles.checkIcon}>
                <CheckMarkIcon />
              </span>
            </div>
            <div className={styles.textareaRow}>
              <textarea
                rows={4}
                placeholder="Řekněte nám více o vašem projektu..."
                {...register("message")}
              ></textarea>
            </div>
            <div className={styles.actions}>
              <button type="submit" className={styles.submit}>
                Zanechte žádost
              </button>
              <p className={styles.note}>
                Kliknutím na tlačítko souhlasíte se zpracováním osobních údajů v
                souladu se zásadami <br /> ochrany osobních údajů.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
