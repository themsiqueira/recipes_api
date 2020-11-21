/* eslint-disable no-shadow */
import { injectable } from 'tsyringe';
import { format, createLogger, transports, Logger } from 'winston';

const { splat, printf, combine, colorize, timestamp, errors } = format;

@injectable()
export default class LoggerService {
  public create(scope: string): Logger {
    return createLogger({
      level: 'info',
      defaultMeta: {
        scope,
        projectLabel: 'RecipesApi',
      },
      exitOnError: false,
      transports: [
        new transports.Console({
          format: this.combineLogFormats(),
        }),
      ],
    });
  }

  private colors() {
    return colorize({
      all: true,
      colors: Object.freeze({
        trace: 'green',
        info: 'blue',
        warn: 'yellow',
        error: 'red',
        fatal: 'red',
      }),
    });
  }

  private customFormat() {
    return printf(
      ({ level, message, timestamp, projectLabel, scope }) =>
        `[${timestamp}] ${level} - [${projectLabel} - ${scope}]: ${message}`,
    );
  }

  private combineLogFormats(...formats: []) {
    return combine(
      errors({ stack: true }),
      timestamp(),
      splat(),
      this.colors(),
      this.customFormat(),
      ...formats,
    );
  }
}
