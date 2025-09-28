import { Response, Request, NextFunction } from "express";

export interface CustomQuery {
    page?: string;
    limit?: string;
    sortField?: string;
    sortOrder?: string;
    pagination?: { page: number; limit: number; skip: number };
    sort?: { field: string; order: 1 | -1 };
}

export interface CustomRequest extends Request {
    query: CustomQuery & Request["query"];
}

export const Filters = (req: CustomRequest, res: Response, next: NextFunction) => {
    const { page = "1", limit = "10", sortField = "createdAt", sortOrder = "desc" } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    req.query.pagination = { page: pageNumber, limit: limitNumber, skip };
    req.query.sort = { field: sortField, order: sortOrder === "asc" ? 1 : -1 };

    next();
};
