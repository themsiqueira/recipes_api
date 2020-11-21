/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express, { Response, Request, NextFunction } from 'express';

import { Server } from '@overnightjs/core';
import 'express-async-errors';
import '../../container';
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../swagger';
import AppError from '../../errors/AppError';

import { controllers } from './controllers';
import LoggerService from '../logging/LoggerService';

const loggerService = new LoggerService();
const logger = loggerService.create('app');

class App extends Server {
  server: express.Application;

  constructor() {
    super();
    this.server = this.app;

    this.expressSetup();
    this.swaggerSetup();
    this.controllersSetup();
    this.exceptionHandler();
  }

  private expressSetup(): void {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(cors());
  }

  private swaggerSetup(): void {
    this.server.use(
      '/api/docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );
  }

  private controllersSetup(): void {
    this.addControllers(controllers);
  }

  public exceptionHandler(): void {
    this.server.use(
      async (err: Error, req: Request, res: Response, next: NextFunction) => {
        logger.error(
          `error: ${err.name} - stack: ${err.stack} - message: ${err.message}`,
        );

        if (err instanceof AppError) {
          return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
          });
        }

        return res.status(500).send({
          error: 'Sorry. It seems that ocurred an expected error',
          details: err.message,
        });
      },
    );
  }
}

export default new App().server;
