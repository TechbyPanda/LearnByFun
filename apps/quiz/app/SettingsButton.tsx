"use client";

import { useRef } from "react";
import { DEFAULT_SETTINGS, TIMER_CHOICES, updateSettings, useSettings } from "./settings";

export default function SettingsButton() {
  const settings = useSettings();
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        className="settings-button"
        aria-label="Settings"
        title="Settings"
        onClick={() => dialog.current?.showModal()}
      >
        <span aria-hidden="true">⚙</span>
      </button>

      <dialog
        ref={dialog}
        className="settings-dialog"
        aria-labelledby="settings-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close(); // backdrop click
        }}
      >
        <div className="settings-body">
          <div className="settings-heading">
            <h2 id="settings-title">Settings</h2>
            <button
              type="button"
              className="settings-close"
              aria-label="Close settings"
              onClick={() => dialog.current?.close()}
            >
              ✕
            </button>
          </div>

          <label className="settings-row">
            <span>
              <strong>Time per question</strong>
              <span className="muted">Moves to the next question when time runs out.</span>
            </span>
            <select
              value={settings.timerSeconds}
              onChange={(event) => updateSettings({ timerSeconds: Number(event.target.value) })}
            >
              {TIMER_CHOICES.map((seconds) => (
                <option key={seconds} value={seconds}>
                  {seconds === 0 ? "Off" : `${seconds} seconds`}
                </option>
              ))}
            </select>
          </label>

          <div className="settings-footer">
            <button
              type="button"
              className="button secondary"
              onClick={() => updateSettings(DEFAULT_SETTINGS)}
            >
              Reset
            </button>
            <button type="button" className="button" onClick={() => dialog.current?.close()}>
              Done
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
