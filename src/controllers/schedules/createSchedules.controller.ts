import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
    
    const {userId, propertyId, date, hour}: IScheduleRequest = req.body;
    const createdSchedule = await createScheduleService({userId, propertyId, date, hour})
    return res.status(201).json(instanceToPlain(createdSchedule))
   
};

export default createScheduleController;