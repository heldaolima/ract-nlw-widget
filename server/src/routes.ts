import express from "express";
import nodemailer from "nodemailer";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    
    
    const nodeMailerMailAdapter = new NodemailerMailAdapter();
    const prismaFeedbackReoisitory = new PrismaFeedbacksRepository();

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackReoisitory, nodeMailerMailAdapter);

    submitFeedbackUseCase.run({
        type, comment, screenshot
    });

    return res.status(201).send();
});