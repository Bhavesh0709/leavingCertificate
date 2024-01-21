import {createLogger, format, transports} from 'winston'

export const logger = createLogger({
    format: format.combine(
        format.timestamp({
            format: 'DD-MMM-YYYY HH:mm:ss'
        }),
        format.errors({stack: true}),
        format.json()
    ),
    transports: [new transports.Console()],
    silent: false
})