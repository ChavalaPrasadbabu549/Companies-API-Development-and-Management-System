import { Request, Response } from "express";
import Company from "../models/Company";
import { CustomRequest } from "../middleware/Filters";

export const companyCreation = async (req: Request, res: Response) => {
    const {
        name,
        legalName,
        registrationNumber,
        industry,
        subIndustry,
        companyType,
        ownership,
        email,
        phone,
        fax,
        website,
        address,
        foundedYear,
        founders,
        ceo,
        boardMembers,
        employees,
        branches,
        annualRevenue,
        valuation,
        stockSymbol,
        isListed,
        status,
        licenses,
        taxId,
        regulatoryBody,
        logoUrl,
        socialLinks,
        about
    } = req.body;

    try {

        if (!name || !registrationNumber || !industry || !companyType || !email) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Please provide all required fields (name, registrationNumber, industry, companyType, email)",
            })
        }
        const emailExist = await Company.findOne({ email });
        if (emailExist) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Company with this email already exists",
            });
        }

        const newCompany = new Company({
            name,
            legalName,
            registrationNumber,
            industry,
            subIndustry,
            companyType,
            ownership,
            email,
            phone,
            fax,
            website,
            address,
            foundedYear,
            founders,
            ceo,
            boardMembers,
            employees,
            branches,
            annualRevenue,
            valuation,
            stockSymbol,
            isListed,
            status,
            licenses,
            taxId,
            regulatoryBody,
            logoUrl,
            socialLinks,
            about,
        });

        const savedCompany = await newCompany.save();
        return res.status(201).json({
            code: 201,
            status: true,
            message: "Company created successfully",
            data: savedCompany,
        })
    } catch (error: any) {
        return res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error: error.message,
        })
    }
}

export const companyUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
        name,
        legalName,
        registrationNumber,
        industry,
        subIndustry,
        companyType,
        ownership,
        email,
        phone,
        fax,
        website,
        address,
        foundedYear,
        founders,
        ceo,
        boardMembers,
        employees,
        branches,
        annualRevenue,
        valuation,
        stockSymbol,
        isListed,
        status,
        licenses,
        taxId,
        regulatoryBody,
        logoUrl,
        socialLinks,
        about
    } = req.body;

    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({
                code: 404,
                status: false,
                message: "Company not found",
            });
        }

        if (name) company.name = name;
        if (legalName) company.legalName = legalName;
        if (registrationNumber) company.registrationNumber = registrationNumber;
        if (industry) company.industry = industry;
        if (subIndustry) company.subIndustry = subIndustry;
        if (companyType) company.companyType = companyType;
        if (ownership) company.ownership = ownership;
        if (email) company.email = email;
        if (phone) company.phone = phone;
        if (fax) company.fax = fax;
        if (website) company.website = website;
        if (address) company.address = address;
        if (foundedYear) company.foundedYear = foundedYear;
        if (founders) company.founders = founders;
        if (ceo) company.ceo = ceo;
        if (boardMembers) company.boardMembers = boardMembers;
        if (employees) company.employees = employees;
        if (branches) company.branches = branches;
        if (annualRevenue) company.annualRevenue = annualRevenue;
        if (valuation) company.valuation = valuation;
        if (stockSymbol) company.stockSymbol = stockSymbol;
        if (isListed !== undefined) company.isListed = isListed;
        if (status !== undefined) company.status = status;
        if (licenses) company.licenses = licenses;
        if (taxId) company.taxId = taxId;
        if (regulatoryBody) company.regulatoryBody = regulatoryBody;
        if (logoUrl) company.logoUrl = logoUrl;
        if (socialLinks) company.socialLinks = socialLinks;
        if (about) company.about = about;

        const updatedCompany = await company.save();
        return res.status(200).json({
            code: 200,
            status: true,
            message: "Company updated successfully",
            data: updatedCompany,
        });

    } catch (error: any) {
        return res.status(500).json({
            success: false,
            code: 500,
            message: "Server error"
        })
    }
}

export const companyList = async (req: CustomRequest, res: Response) => {
    try {
        const pagination = req.query.pagination;
        const sort = req.query.sort;
        const filters = req.filters || {};

        const sortField = sort?.field || "createdAt";
        const sortOrder = sort?.order || -1;
        const page = pagination?.page || 1;
        const limit = pagination?.limit || 10;
        const skip = pagination?.skip || 0;

        const companies = await Company.find(filters)
            .sort({ [sortField]: sortOrder })
            .skip(skip)
            .limit(limit);

        const totalRecords = await Company.countDocuments(filters);
        console.log({ filters, page, limit, skip, sortField, sortOrder });

        return res.status(200).json({
            code: 200,
            status: true,
            message: "Companies fetched successfully",
            data: companies,
            pagination: {
                totalRecords,
                page,
                limit,
                totalPages: Math.ceil(totalRecords / limit),
            },
        });
    } catch (error: any) {
        return res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error: error.message,
        });
    }
};

export const companyById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({
                code: 404,
                status: false,
                message: "Company not found",
            });
        }
        return res.status(200).json({
            code: 200,
            status: true,
            message: "Company fetched successfully",
            data: company
        });
    } catch (error: any) {
        return res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error: error.message
        })
    }
}

export const companyDelete = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const company = await Company.findById(id);
        if (!company) {
            return res.status(404).json({
                code: 404,
                status: false,
                message: "Company not found",
            });
        }

        await company.deleteOne();

        return res.status(200).json({
            code: 200,
            status: true,
            message: "Company deleted successfully",
        });
    } catch (error: any) {
        return res.status(500).json({
            code: 500,
            status: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
