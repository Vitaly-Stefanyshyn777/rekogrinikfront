"use client";
import React, { useRef } from "react";
import styles from "./WorkflowSection.module.css";
import {
  NumberIcon,
  CalculatorIcon,
  DocumentIcon,
  WrenchIcon,
  KeyIcon,
  Icon3,
} from "@/components/Icons/Icons";
import GridBackground from "@/components/GridBackground/GridBackground";
import useIsMobile from "@/components/hooks/useIsMobile";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import WorkflowMarker from "./WorkflowMarker";

const steps = [
  {
    step: 1,
    duration: "1 den",
    title: <>Konzultace a aplikace</>,
    subtitle:
      "Kontakt s klientem, projednání přání a předběžné posouzení projektu",
    list: [
      [{ type: "main", text: "Telefonická konzultace" }],
      [{ type: "main", text: "Projednávání rozpočtu a termínů" }],
      [{ type: "main", text: "Účel schůzky" }],
    ],
    icon: <NumberIcon />,
  },
  {
    step: 3,
    duration: "2–3 dny",
    title: <>Odhad a smlouva</>,
    subtitle:
      "Vypracování podrobného rozpočtu s pevnými cenami a podpis smlouvy",
    list: [
      [{ type: "main", text: "Detailní odhad práce" }],
      [{ type: "main", text: "Specifikace materiálů" }],
      [{ type: "main", text: "Pracovní harmonogram" }],
      [{ type: "main", text: "Podepsání smlouvy" }],
    ],
    icon: <DocumentIcon />,
  },
  {
    step: 5,
    duration: "1–2 dny",
    title: <>Kontrola kvality</>,
    subtitle:
      "Závěrečná kontrola kvality provedené práce a odstranění nedostatků",
    list: [
      [{ type: "main", text: "Technická kontrola prací" }],
      [{ type: "main", text: "Kontrola všech systémů" }],
      [{ type: "main", text: "Odstraňování závad" }],
      [{ type: "main", text: "Generální úklid" }],
    ],
    icon: <Icon3 />,
  },
];

const rightStepsData = [
  {
    step: 2,
    duration: "1–2 dny",
    title: <>Odjezd a měření</>,
    subtitle:
      "Bezplatná návštěva mistra pro detailní zaměření a posouzení objektu",
    list: [
      [{ type: "main", text: "Podrobné měření prostor" }],
      [{ type: "main", text: "Posouzení stavu komunikací" }],
      [{ type: "main", text: "Fotofixace objektu" }],
      [{ type: "main", text: "Konzultace na místě" }],
    ],
    icon: <CalculatorIcon />,
  },
  {
    step: 4,
    duration: "2–8 týdnů",
    title: <>Předání zařízení</>,
    subtitle: "Profesionální provedení všech fází oprav dle plánu a rozpočtu",
    list: [
      [{ type: "main", text: "Demontážní práce" }],
      [{ type: "main", text: "Elektroinstalace a vodoinstalace" }],
      [{ type: "main", text: "Stavební práce" }],
      [{ type: "main", text: "Dokončovací práce" }],
      [{ type: "main", text: "Pravidelné zprávy o pokroku" }],
    ],
    icon: <WrenchIcon />,
  },
  {
    step: 6,
    duration: "1 den",
    title: <>Předání zařízení</>,
    subtitle:
      "Podepsání protokolu o provedené práci a předání objektu klientovi se zárukou",
    list: [
      [{ type: "main", text: "Podepsání pracovního aktu" }],
      [{ type: "main", text: "Předání dokumentace" }],
      [{ type: "main", text: "Návod k obsluze" }],
      [{ type: "main", text: "Vydání záruky" }],
    ],
    icon: <KeyIcon />,
  },
];

const addSpaceToDesc = (
  list: { type: string; text: string }[][]
): { type: string; text: string }[][] =>
  list.map((parts: { type: string; text: string }[]) =>
    parts.map((part: { type: string; text: string }) =>
      part.type === "desc" && !part.text.endsWith(" ")
        ? { ...part, text: part.text + " " }
        : part
    )
  );

const stepsWithSpaces = steps.map((step) => ({
  ...step,
  list: addSpaceToDesc(step.list),
}));
const rightStepsDataWithSpaces = rightStepsData.map((step) => ({
  ...step,
  list: addSpaceToDesc(step.list),
}));

const rightSteps = [null, ...rightStepsDataWithSpaces];

export default function WorkflowSection({
  block,
}: {
  block?: {
    enabled?: boolean;
    title?: string;
    subtitle?: string;
    tabStyle?: string;
  };
}) {
  const isMobile = useIsMobile();
  const safeBlock = {
    enabled: true,
    subtitle: "WORKFLOW",
    title: "STEP BY STEP [[TO RESULTS]]",
    tabStyle: "dark",
    ...block,
  };

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.2", "end 1"], // Анімація починається коли верхній край досягає 20% від верху, закінчується коли низ торкається низу екрану
  });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothLine = useSpring(line, {
    stiffness: 60, // Збільшуємо stiffness для швидшої реакції
    damping: 25, // Зменшуємо damping для швидшого завершення
  });

  if (!safeBlock.enabled) return null;

  const left = stepsWithSpaces;
  const right = rightStepsDataWithSpaces;
  const mobileSteps = [
    left.find((s) => s.step === 1)!,
    right.find((s) => s.step === 2)!,
    left.find((s) => s.step === 3)!,
    right.find((s) => s.step === 4)!,
    left.find((s) => s.step === 5)!,
    right.find((s) => s.step === 6)!,
  ];

  return (
    <section ref={sectionRef} className={styles["workflow-section"]}>
      <div className={styles["workflow-header"]}>
        <h2 className={styles["wf-title"]}>Fáze práce</h2>
        <p className={styles["wf-subtitle"]}>
          Transparentní proces od prvního zavolání až po dodání hotového
          objektu. Každá fáze je monitorována a odsouhlasena s klientem.
        </p>
      </div>
      <div className={styles["workflow-section-overlay"]} />

      {isMobile ? (
        <div
          className={styles["workflow-mobile-wrapper"]}
          style={{ position: "relative" }}
        >
          <motion.div
            className={styles["workflow-mobile-line"]}
            style={{
              scaleY: smoothLine,

              transformOrigin: "top",
            }}
          />

          <div className={styles["workflow-mobile-list"]}>
            {mobileSteps.map((step, i) => (
              <div className={styles["step-wrapper"]} key={step.step}>
                <motion.div
                  className={styles["step-marker"]}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1.2, opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles["step-indicator"]}>
                    <span className={styles["step-marker-number"]}>
                      {step.step.toString().padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  className={styles["step-card"]}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles["step-top-row"]}>
                    <div className={styles["step-header-left"]}>
                      <h3 className={styles["step-title"]}>{step.title}</h3>
                      <div className={styles["step-badge"]}>
                        STEP {step.step}
                      </div>
                    </div>
                    <div className={styles["step-icon-wrapper"]}>
                      {step.step === 1 ? (
                        <>
                          <span className={styles["step-icon-blur"]} />
                          <span className={styles["step-icon-svg"]}>
                            <NumberIcon />
                          </span>
                        </>
                      ) : (
                        <span className={styles["step-icon-svg"]}>
                          {step.icon}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={styles["step-content-block"]}>
                    {"subtitle" in step && step.subtitle && (
                      <div className={styles["step-subtitle"]}>
                        {step.subtitle}
                      </div>
                    )}
                    <ul className={styles["step-list"]}>
                      {step.list.map((parts, index) => (
                        <li className={styles["step-list-item"]} key={index}>
                          <div className={styles["step-list-block"]}>
                            <span className={styles["step-list-icon"]}>
                              {/* <IconDot /> */}
                            </span>
                          </div>
                          <span className={styles["step-list-text-wrap"]}>
                            {parts.map((part, i) => (
                              <span
                                key={i}
                                className={
                                  part.type === "main"
                                    ? styles["step-list-main"]
                                    : styles["step-list-desc"]
                                }
                              >
                                {part.text}
                              </span>
                            ))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles["workflow-grid"]}>
          <div className={styles["workflow-left"]}>
            {stepsWithSpaces.slice(0, 3).map((step, i) => (
              <motion.div
                key={step.step}
                className={
                  styles["step-card"] +
                  (i >= 1 ? " " + styles["step-card--shadow"] : "")
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
              >
                <div className={styles["step-top-row"]}>
                  <div className={styles["step-header-left"]}>
                    <h3 className={styles["step-title"]}>{step.title}</h3>
                    <div className={styles["step-badge"]}>
                      {"duration" in step ? step.duration : ""}
                    </div>
                  </div>
                  <div className={styles["step-icon-wrapper"]}>
                    {step.step === 1 ? (
                      <>
                        <span className={styles["step-icon-blur"]} />
                        <span className={styles["step-icon-svg"]}>
                          <NumberIcon />
                        </span>
                      </>
                    ) : (
                      <span className={styles["step-icon-svg"]}>
                        {step.icon}
                      </span>
                    )}
                  </div>
                </div>
                <div className={styles["step-content-block"]}>
                  {"subtitle" in step && step.subtitle && (
                    <div className={styles["step-subtitle"]}>
                      {step.subtitle}
                    </div>
                  )}
                  <ul className={styles["step-list"]}>
                    {step.list.map((parts, idx) => (
                      <li className={styles["step-list-item"]} key={idx}>
                        <span className={styles["step-list-icon"]}>
                          {/* <IconDot /> */}
                        </span>
                        <span className={styles["step-list-text-wrap"]}>
                          {parts.map((part, i) => (
                            <span
                              key={i}
                              className={
                                part.type === "main"
                                  ? styles["step-list-main"]
                                  : styles["step-list-desc"]
                              }
                            >
                              {part.text}
                            </span>
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles["workflow-line-wrap"]}>
            <motion.div
              className={styles["workflow-line"]}
              style={{ scaleY: smoothLine }}
            />
            <div className={styles["workflow-steps"]}>
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <WorkflowMarker
                  key={i}
                  index={i}
                  total={6}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
          <div className={styles["workflow-right"]}>
            {rightSteps.map((step, i) =>
              step ? (
                <motion.div
                  key={step.step}
                  className={
                    styles["step-card"] +
                    (i >= 1 ? " " + styles["step-card--shadow"] : "")
                  }
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <div className={styles["step-top-row"]}>
                    <div className={styles["step-header-left"]}>
                      <h3 className={styles["step-title"]}>{step.title}</h3>
                      <div className={styles["step-badge"]}>
                        {"duration" in step ? step.duration : ""}
                      </div>
                    </div>
                    <div className={styles["step-icon-wrapper"]}>
                      <span className={styles["step-icon-svg"]}>
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  <div className={styles["step-content-block"]}>
                    {"subtitle" in step && step.subtitle && (
                      <div className={styles["step-subtitle"]}>
                        {step.subtitle}
                      </div>
                    )}
                    <ul className={styles["step-list"]}>
                      {step.list.map((parts, index) => (
                        <li className={styles["step-list-item"]} key={index}>
                          <span className={styles["step-list-icon"]}>
                            {/* <IconDot /> */}
                          </span>
                          <span className={styles["step-list-text-wrap"]}>
                            {parts.map((part, i) => (
                              <span
                                key={i}
                                className={
                                  part.type === "main"
                                    ? styles["step-list-main"]
                                    : styles["step-list-desc"]
                                }
                              >
                                {part.text}
                              </span>
                            ))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ) : (
                <div
                  className={styles["ghost-block"]}
                  key={`ghost-${i}`}
                  style={{ visibility: "hidden" }}
                ></div>
              )
            )}
          </div>
        </div>
      )}

      <GridBackground />
    </section>
  );
}
