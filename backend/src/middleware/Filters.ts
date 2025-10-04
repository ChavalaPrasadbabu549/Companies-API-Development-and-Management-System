import { Request, NextFunction, Response } from "express";

export interface CustomQuery {
    page?: string;
    limit?: string;
    sortField?: string;
    sortOrder?: string;
    pagination?: { page: number; limit: number; skip: number };
    sort?: { field: string; order: 1 | -1 };
    filters?: Record<string, any>;
}

export interface CustomRequest extends Request {
    query: CustomQuery & Request["query"];
    filters?: Record<string, any>;
}

export const Filters = (req: CustomRequest, _res: Response, next: NextFunction) => {
    const pageNumber = parseInt(req.query.page as string) || 1;
    const limitNumber = parseInt(req.query.limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;

    const sortField = (req.query.sortField as string) || "createdAt";
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1;

    const filters: Record<string, any> = {};
    for (const key in req.query) {
        if (["page", "limit", "sortField", "sortOrder"].includes(key)) continue;

        const value = req.query[key];
        if (value !== undefined && value !== "") {
            if (value === "true") filters[key] = true;
            else if (value === "false") filters[key] = false;
            else if (!isNaN(Number(value))) filters[key] = Number(value);
            else filters[key] = value;
        }
    }

    req.query.pagination = { page: pageNumber, limit: limitNumber, skip };
    req.query.sort = { field: sortField, order: sortOrder };
    req.filters = filters;

    next();
};
