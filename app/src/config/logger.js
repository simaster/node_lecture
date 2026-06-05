// const winston = require("winston");
const { createLogger, transports, format} = require("winston");
const { combine, timestamp, label, printf, json, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
        return `${timestamp} [${label}] ${level} : ${message}`;
    });

const printLogFormat = combine(
    label({
        label: "backend start!"
    }),
    // colorize(),
    timestamp({
        format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
    // json(),
    // printf(({ timestamp, label, level, message }) => {
    //     return `${timestamp} [${label}] ${level} : ${message}`;
    // })
);

const path = require("path");

const logger = createLogger({
    // transports: [new transports.Console({
    transports: [
        new transports.File({
            // filename: "./log/access.log",
            filename: "access.log",
            dirname: "./log",
            // dirname: path.join(__dirname,"..","..", "/log"),
            level: "info", // "http"
            format: printLogFormat
            // winston.format.colorize(),
            // winston.format.simple(),
        }),
        // new transports.Console({
        //     level: "info", // "http"
        //     format: printLogFormat
        // }),
    ]
})

if (process.env.NODE_ENV !== "production") {
    logger.add(
      new transports.Console({
        level: "info",
        format: printLogFormat,
      })
    )
}

// const logger = winston.createLogger({
//     transports: [new winston.transports.Console({
//         level: "info", // "http"
//         format: winston.format.combine(
//             // winston.format.colorize(),
//             // winston.format.simple(),
//             winston.format.timestamp({
//                 format: "YYYY-MM-DD HH:mm:dd",
//             }),
//             winston.format.json(),

//         ),
//     })],
// })

module.exports = logger;
