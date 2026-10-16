import { ActionIcon, MantineColor, MantineSize, Tooltip } from "@mantine/core";
import { CopyButton } from "@/components/common/copy-button";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import classes from "./copy.module.css";

const SPARKLE_COLORS = [
  "var(--mantine-color-teal-5)",
  "var(--mantine-color-yellow-5)",
  "var(--mantine-color-cyan-4)",
  "var(--mantine-color-grape-4)",
];
const SPARKLE_COUNT = 8;

interface CopyProps {
  text: string;
  size?: MantineSize;
  color?: MantineColor;
  /** Override the accessible name (and tooltip) when not yet copied. Lets callers disambiguate adjacent copy buttons for screen readers. */
  label?: string;
}
export default function CopyTextButton({ text, size, label }: CopyProps) {
  const { t } = useTranslation();

  const copyLabel = label ?? t("Copy");
  // Bumped on each click so the sparkles remount and replay the animation.
  const [burst, setBurst] = useState(0);

  return (
    <CopyButton value={text} timeout={2000}>
      {({ copied, copy }) => (
        <span className={classes.wrapper}>
          <Tooltip
            label={copied ? t("Copied") : copyLabel}
            withArrow
            position="right"
          >
            <ActionIcon
              color={copied ? "teal" : "gray"}
              variant="subtle"
              onClick={() => {
                copy();
                setBurst((b) => b + 1);
              }}
              size={size}
              aria-label={copied ? t("Copied") : copyLabel}
            >
              {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            </ActionIcon>
          </Tooltip>
          {burst > 0 && (
            <span key={burst} className={classes.sparkles} aria-hidden>
              {Array.from({ length: SPARKLE_COUNT }, (_, i) => (
                <span
                  key={i}
                  className={classes.sparkle}
                  style={
                    {
                      "--sparkle-angle": `${(360 / SPARKLE_COUNT) * i}deg`,
                      "--sparkle-distance": `${14 + (i % 2) * 6}px`,
                      "--sparkle-delay": `${(i % 3) * 40}ms`,
                      "--sparkle-color":
                        SPARKLE_COLORS[i % SPARKLE_COLORS.length],
                    } as React.CSSProperties
                  }
                />
              ))}
            </span>
          )}
        </span>
      )}
    </CopyButton>
  );
}
