const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./output",
  reportPath: "./output",
  displayDuration: true,
  durationInMS: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '109',
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "12.6",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "UI Automation" },
      { label: "Environment", value: "QA" },
      { label: "Execution Start Time", value: "Jan 12th 2023, 11:30 AM" },
      { label: "Execution End Time", value: "JAN 12th 2023, 11:31 AM" },
    ],
  },
});
